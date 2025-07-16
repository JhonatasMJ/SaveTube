import { Clock, Play, Trash2 } from "lucide-react";

export function VideoItem() {
  return (
    <div className="w-full bg-stone-800 rounded-md overflow-hidden relative">
      <div className="flex h-24">
        <div className="w-24 h-full bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg')] bg-cover bg-center" />

        <div className="flex-1 flex flex-col justify-between p-3 text-white ">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold truncate leading-tight">
                Meu títuloaaaaaa
              </h2>
              <span className="text-xs text-orange-500 flex items-center gap-1">
                <Clock className="size-3" />
                12:32
              </span>
            </div>

            <button className="bg-red-700 absolute right-0 top-0  p-1 transition-colors cursor-pointer rounded-bl-md ">
              <Trash2 className="size-3.5" />
            </button>
          </div>

          <div className="flex items-center justify-between mt-2 w-full">
            <button className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 text-xs rounded-sm flex items-center gap-1 transition-colors cursor-pointer w-full justify-center  ">
              <Play className="size-3.5" />
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
