import { Clock, Play, Trash2 } from "lucide-react";

export function VideoItem() {
  return (
    <section className="w-full bg-purple-900 rounded-md overflow-hidden">
      <div className="flex h-16">
        <div className="w-20 h-full bg-pink-500 flex items-center justify-center bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg')] bg-cover bg-no-repeat">
      
        </div>
        <div className="flex items-center px-4 text-white flex-1">
      <section className="overflow-hidden p-0.5 flex flex-col justify-between h-full flex-1">
        <h2 className="text-sm font-bold truncate">Meu títuloaaaaaa</h2>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <button  className="bg-pink-500 p-1.5 text-xs rounded-sm disabled:opacity-50 flex items-center gap-0.5 ">
              <Play className="size-3"/>
              Reproduzir
            </button>
            <button className="cursor-pointer">
              <Trash2 className="size-3"/>
            </button>
          </div>
          <span className="text-xs text-cyan-400 gap-0.5 flex items-center">
            <Clock className="size-2"/>
            12:32
            </span>
        </div>
      </section>
         
        </div>
      </div>

    </section>
  );
}
