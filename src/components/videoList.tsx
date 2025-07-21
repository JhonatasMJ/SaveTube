import { useList } from "../context/ListContext";
import { useLoading } from "../context/LoadingContext";
import { VideoItem } from "./videoItem";


export function VideoList() {

  const { list } = useList();
  const {isLoading} = useLoading();

  return (
    <section className="h-full flex flex-col gap-2">
      <h3 className="flex items-center gap-2 text-sm font-bold mb-2 flex-shrink-0">
        <span className="h-2 w-1 bg-orange-500 "></span>
        Vídeos Listados
      </h3>
      <div className="flex-1 overflow-y-auto pr-0.5">
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <p className="text-gray-500 text-sm">Carregando vídeos...</p>
          ) : (
            list.map((video) => (
              <VideoItem key={video.id} data={video} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
