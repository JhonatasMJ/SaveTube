
import { useState, type InputHTMLAttributes, type ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

export function Input({ label, icon, id,placeholder,...props}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
    <label htmlFor={id} className=" text-md font-medium">{label}</label>
      <div
        className={`px-1 py-2 items-center flex rounded-sm justify-between gap-3 border transition-all duration-300 ease-in-out
          ${
            isFocused
              ? "border-orange-500 ring-1 ring-orange-300"
              : "border-neutral-600"
          }
          bg-neutral-800 transition-all duration-300 ease-in-out
        `}
      >
     
        <div
          className={`transition-colors ${
            isFocused ? "text-orange-400" : "text-zinc-500"
          }`}
        >
          {icon}
        </div>
        
        <input
          className="flex-1 bg-transparent border-none placeholder:text-zinc-600 focus:outline-none"
          type="text"
          placeholder={placeholder}
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
}
