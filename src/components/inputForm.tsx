import { Controller } from "react-hook-form"
import { Input, type InputProps } from "./input"

type Props = InputProps & {
    id: string;
    control: any;
    error?: string;
}

export function InputForm ({id,control,error, ...rest }:Props) {
    return (
        <div className="flex flex-col gap-2 w-full " >
            <Controller
             control={control}
             defaultValue=""
             render={({field: {onChange, value}}) => (
                 <Input
               {...rest}
               onChange={onChange}
               value={value}
               id={id}
                 />
                )}
                name={id}
            />
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    )
}