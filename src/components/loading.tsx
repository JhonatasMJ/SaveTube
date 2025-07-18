import { SpinnerRoundFilled } from "spinners-react";

export function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-stone-900 z-50">
      <SpinnerRoundFilled
        size={50}
        thickness={100}
        speed={100}
        color="rgba(172, 78, 57, 1)"
      />
    </div>
  );
}
