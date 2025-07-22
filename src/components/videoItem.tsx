"use client"

import { Clock, Play, Plus, Trash2 } from "lucide-react"
import { useList } from "../context/ListContext"


export interface Video {
  docId?: string
  id: string
  title: string
  thumbnail: string
  duration: string
  durationMs: number
}

interface VideoItemProps {
  data: Video
}

export function VideoItem({ data }: VideoItemProps) {
  const { createListItem, list, deleteListItem } = useList()
  async function addCurrentVideo() {
    await createListItem(data)
  }

  async function handleDeleteItem() {
    if (!data.docId) return
    await deleteListItem(data.docId)
  }

  function openVideo() {
    chrome.tabs.create({
      url: `https://www.youtube.com/watch?v=${data.id}`,
    })
  }

  const alreadyExists = list.some((video) => video.id === data.id)

  return (
    <div className="w-full bg-stone-800 rounded-md overflow-hidden relative">
      <div className="flex h-20">
        <div
          style={{ backgroundImage: `url(${data.thumbnail})` }}
          className="w-20 h-full bg-cover bg-center flex-shrink-0"
        />

        <div className="flex-1 flex flex-col justify-between p-2 text-white min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-2">
              <h2 className="text-xs font-bold leading-tight mb-1 truncate">{data.title}</h2>
              <span className="text-xs text-orange-500 flex items-center gap-1">
                <Clock className="size-3 flex-shrink-0" />
                {data.duration}
              </span>
            </div>

            <button
              onClick={handleDeleteItem}
              className="bg-red-700 p-1 transition-colors cursor-pointer  flex-shrink-0"
            >
              <Trash2 className="size-3" />
            </button>
          </div>

          <div className="flex items-center justify-between mt-1 w-full">
            {data.docId ? (
              <button
                onClick={openVideo}
                className="bg-orange-500 hover:bg-orange-600 px-2 py-1 text-xs rounded-sm flex items-center gap-1 transition-colors cursor-pointer w-full justify-center"
              >
                <Play className="size-3" />
                Reproduzir
              </button>
            ) : (
              <button
                onClick={addCurrentVideo}
                disabled={alreadyExists}
                className={`px-2 py-1 text-xs rounded-sm flex items-center gap-1 transition-colors w-full justify-center ${
                  alreadyExists
                    ? "bg-orange-500/50 cursor-not-allowed opacity-50"
                    : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
                }`}
              >
                <Plus className="size-3" />
                {alreadyExists ? "Já Adicionado" : "Adicionar"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
