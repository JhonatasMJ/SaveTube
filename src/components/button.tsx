import type { ButtonProps } from "../types/components";

export function Button ({titulo, ...props}: ButtonProps) {
    return (
        <button  {...props} className="bg-orange-500 hover:bg-orange-600  py-3 text-xs rounded-sm flex items-center gap-1 transition-colors cursor-pointer w-full justify-center">
       {titulo}
      </button>
    )
}