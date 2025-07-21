import { createContext, useContext, useEffect, useState } from "react";
import type {  LoadingProps } from "../types/loading";
import type { Video } from "../components/videoItem";
import axios from "axios";
import { formatYTDuration } from "../utils/formatYTDurations";
import { set } from "zod";


interface ListData {
    currentVideo: Video;
}

const ListContext = createContext({} as ListData);

export function ListProvider({ children }: LoadingProps) {
    const [currentVideo, setCurrentVideo] = useState({} as Video);
    
const ytBaseLink = 'youtube.com/watch';
const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;


async function getCurrentVideoData (url:string) {
    const {data} = await axios.get(url);
    const video = data.items[0];
    const duration = formatYTDuration(video.contentDetails.duration);
    setCurrentVideo({
        
    })
}

    useEffect(() => { 
        if (chrome?.tabs?.query) { 
            chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
                const newUrl = tabs[0]?.url;
                if (newUrl && newUrl.includes(ytBaseLink)) {
                   const videoId = newUrl.replace('https://www.youtube.com/watch?v=', ''); 
                   const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics,contentDetails`;
                   getCurrentVideoData(apiUrl);
                }    
            })    
        }
    }, [chrome.tabs]);

 

  return (
  <ListContext.Provider value={{ currentVideo }}>
    {children}
  </ListContext.Provider>
  )
}

//Deixo pronto para usar
// eslint-disable-next-line react-refresh/only-export-components
export function useList() {
  const context = useContext(ListContext);
  return context;
}