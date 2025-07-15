import { VideoItem } from "./videoItem";

export function VideoList() {
  return (
    <section className="w-full flex-1 overflow-hidden flex flex-col gap-2">
      <h3 className="flex items-center gap-2 text-sm font-bold mb-2">
        <span className="h-2 w-2 bg-purple-500 rounded-sm"></span>
        Vídeos Listados
      </h3>

      <section className="flex flex-col gap-4 overflow-y-auto pr-0.5">
        <VideoItem />
          <VideoItem />
            <VideoItem />
              <VideoItem />
                <VideoItem />
                
                <VideoItem />
        
        {/* <p className="text-xs">Sua lista está vazia</p> */}
      </section>
    </section>
  );
}
