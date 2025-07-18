import { CurrentVideo } from "../components/currentVideo"
import { Header } from "../components/header"
import { VideoList } from "../components/videoList"

export function Home() {
  return (
    <>
 
    <main className="w-full h-screen flex">
      <div className="bg-stone-900 text-white flex flex-col gap-2 p-4 w-82 h-1/2 ">
        <div className="flex-shrink-0">
          <Header />
        </div>
        <div className="flex-shrink-0">
          <CurrentVideo />
        </div>
        <div className="flex-1 min-h-0">
          <VideoList />
        </div>
      </div>
    </main>
    </>
  )
}
