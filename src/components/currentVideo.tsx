import { useList } from "../context/ListContext";
import { VideoItem } from "./videoItem";

export function CurrentVideo() {
  const { currentVideo } = useList();
  return (
    <section className="w-full flex flex-col gap-0.5">
      <h3 className="flex items-center gap-2 text-sm font-bold mb-2">
        <span className="h-2 w-1 bg-orange-500 "></span>
        Vídeos Listados
          </h3>
        <div>
          {currentVideo?.id ? (
            <VideoItem data={currentVideo} />
          ) : (
            <p className="text-gray-500 text-sm">Nenhum vídeo selecionado</p>
          )}
        </div>
    </section>
  );
}
