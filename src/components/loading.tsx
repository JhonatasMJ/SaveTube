import { SpinnerRoundFilled } from "spinners-react"

export function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-3">
        <SpinnerRoundFilled size={40} thickness={100} speed={100} color="rgba(251, 146, 60, 1)" />
      </div>
    </div>
  )
}
