
import { CurrentVideo } from "../components/currentVideo";
import { Header } from "../components/header";

import { VideoList } from "../components/videoList";

export function Home() {
  return (
    <main className="w-full h-screen flex">

      <div className="bg-purple-950 text-white flex flex-col items-center justify-center gap-2 p-4 w-72 h-1/2 relative overflow-hidden">
       <Header/>
       <CurrentVideo/>
       <VideoList/>
       
      </div>
    </main>
  )
}
