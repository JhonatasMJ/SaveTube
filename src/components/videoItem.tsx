import { Clock, Play, Trash2 } from "lucide-react";
import { useList } from "../context/ListContext";



export interface Video {
  docId?: string;
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  durationMs: number;
}


interface VideoItemProps {
  data: Video;
}

export function VideoItem({data}: VideoItemProps)  {

  const {createListItem, list, deleteListItem} = useList();
async function  addCurrentVideo () {
  await createListItem(data);
}

async function handleDeleteItem() {
  if (!data.docId) return;
  await deleteListItem(data.docId);
}

const alredyExists = list.some((item) => item.id === data.id);

  return (
    <div className="w-full bg-stone-800 rounded-md overflow-hidden relative">
      <div className="flex h-24">
        <div style={{ backgroundImage: `url(${data.thumbnail})` }} className="w-24 h-full bg-cover bg-center" />

        <div className="flex-1 flex flex-col justify-between p-3 text-white ">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold truncate leading-tight">
                {data.title}
              </h2>
              <span className="text-xs text-orange-500 flex items-center gap-1">
                <Clock className="size-3" />
                {data.duration}
              </span>
            </div>

            <button onClick={handleDeleteItem} className="bg-red-700 absolute right-0 top-0  p-1 transition-colors cursor-pointer rounded-bl-md ">
              <Trash2 className="size-3.5" />
            </button>
          </div>

          <div className="flex items-center justify-between mt-2 w-full">
      <button
  onClick={addCurrentVideo}
  disabled={alredyExists}
  className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 text-xs rounded-sm flex items-center gap-1 transition-colors cursor-pointer w-full justify-center"
>
  <Play className="size-3.5" />
  {data.docId ? "Iniciar" : "Adicionar à lista"}
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
