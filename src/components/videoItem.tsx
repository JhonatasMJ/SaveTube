import { Clock, Play, Trash2 } from "lucide-react";

export function VideoItem() {
  return (
    <div className="w-full bg-purple-900 rounded-md overflow-hidden">
      <div className="flex h-20">
        <div className="w-24 h-full bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg')] bg-cover bg-center" />

        <div className="flex-1 flex flex-col justify-between p-3 text-white ">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold truncate leading-tight">
              Meu títuloaaaaaa
            </h2>
            <button className="text-gray-400 hover:text-red-400 p-1 transition-colors cursor-pointer">
              <Trash2 className="size-3.5" />
            </button>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <button className="bg-pink-500 hover:bg-pink-600 px-3 py-1.5 text-xs rounded-sm flex items-center gap-1 transition-colors cursor-pointer">
                <Play className="size-3" />
                Reproduzir
              </button>
              <span className="text-xs text-cyan-400 flex items-center gap-1">
                <Clock className="size-3" />
                12:32
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
