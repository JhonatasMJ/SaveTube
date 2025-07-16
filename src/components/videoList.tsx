import { VideoItem } from "./videoItem"

export function VideoList() {
  return (
    <section className="h-full flex flex-col gap-2">
      <h3 className="flex items-center gap-2 text-sm font-bold mb-2 flex-shrink-0">
        <span className="h-2 w-1 bg-orange-500 "></span>
        Vídeos Listados
      </h3>
      <div className="flex-1 overflow-y-auto pr-0.5">
        <div className="flex flex-col gap-4">
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </div>
      </div>
    </section>
  )
}
