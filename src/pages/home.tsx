import { CurrentVideo } from "../components/currentVideo"
import { Header } from "../components/header"
import { VideoList } from "../components/videoList"

export function Home() {
  return (
    <main className="w-full h-full flex flex-col bg-stone-900 text-white overflow-hidden">
      <div className="flex flex-col h-full p-3 overflow-hidden">
        <div className="flex-shrink-0 mb-3">
          <Header />
        </div>
        <div className="flex-shrink-0 mb-3">
          <CurrentVideo />
        </div>
        <div className="flex-1 min-h-0 overflow-hidden">
          <VideoList />
        </div>
      </div>
    </main>
  )
}
