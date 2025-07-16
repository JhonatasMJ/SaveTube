import { Mail } from "lucide-react";

export function Input() {



  return (
    <div className="flex flex-col gap-2">
        <label className=" text-md font-medium">Teste</label>
        <div className="bg-neutral-700 border border-orange-500 ring-orange-200 ring-1 px-1 py-2 items-center flex rounded-sm justify-between gap-1">
            <Mail className="size-4"/>
            <input type="text" placeholder="Meu input" />
        </div>
    </div>
  )
}
