import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { LoadingProps } from "../types/loading";
import type { Video } from "../components/videoItem";
import axios from "axios";
import { formatYTDuration } from "../utils/formatYTDurations";
import { useLoading } from "./LoadingContext";

import { addDoc, collection, deleteDoc, doc, getDocs, query, where, type CollectionReference } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "./AuthContext";

interface ListData {
  list: Video[];
  currentVideo: Video;
  totalTime: number;
  createListItem: (videoData: Video) => Promise<void>;
  deleteListItem: (itemID: string) => Promise<void>;
}

const ListContext = createContext({} as ListData);

export function ListProvider({ children }: LoadingProps) {
  const { isLoading, toggleLoading } = useLoading();
  const { user } = useAuth();
  const [list, setList] = useState<Video[]>([]);
  const [currentVideo, setCurrentVideo] = useState({} as Video);

  const ref = collection(db, "videos") as CollectionReference<Video>;

   
  async function createListItem(videoData: Video) {
    if (isLoading || !user?.id) return;
    try {
      toggleLoading(true);
      const data = {
        ...videoData,
        userId: user.id,
      };
      const response = await addDoc(ref, data);
      setList((old) => [...old, { ...videoData, id: response.id }]);
    } catch (error) {
      console.error("Error creating list item:", error);
    } finally {
      toggleLoading(false);
    }
  }


  async function deleteListItem(itemId: string) { 
    if(isLoading) return;
    try {
      toggleLoading(true);
      const itemDoc = doc(db, "videos", itemId);
      await deleteDoc(itemDoc);
      setList(old => old.filter(video => video.docId !== itemId));
    } catch (error) {
      console.error("Error deleting list item:", error);
    } finally {
      toggleLoading(false);
    }
  }

  const getUserList = useCallback(async () => {
    if (!user?.id) return;
    try {
      toggleLoading(true);
      const userQuery = query(ref, where("userId", "==", user.id));
      const data = await getDocs(userQuery);
      const formattedData = data.docs.map((doc) => ({
        ...doc.data(),
        docId: doc.id,
      }));
        setList(formattedData)
    } catch (error) {
      console.error("Error fetching user list:", error);
    } 
    finally {
      toggleLoading(false);
    }
  },[user])


  useEffect(() => {
    getUserList();
  }, [user]);

  const ytBaseLink = "youtube.com/watch";
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  async function getCurrentVideoData(url: string) {
    const { data } = await axios.get(url);
    if (!data.items || !data.items.length) return;

    const video = data.items[0];
    const duration = formatYTDuration(video.contentDetails.duration);
    setCurrentVideo({
      id: video.id,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.default.url,
      duration: duration.formatted,
      durationMs: duration.ms,
    });
  }

  useEffect(() => {
    if (chrome?.tabs?.query) {
      chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        const newUrl = tabs[0]?.url;
        if (newUrl && newUrl.includes(ytBaseLink)) {
          const videoId = newUrl.replace("https://www.youtube.com/watch?v=", "");
          const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics,contentDetails`;
          getCurrentVideoData(apiUrl);
        }
      });
    }
  }, [chrome.tabs]);

  const totalTime = useMemo(() => { 
    return list.reduce((acc, video) => {
      return acc + video.durationMs;
    }, 0);
  }, [list]);


  return (
    <ListContext.Provider value={{ list, totalTime,currentVideo, createListItem, deleteListItem }}>
      {children}
    </ListContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useList() {
  return useContext(ListContext);
}
