import Logo from "@/assets/logo.svg";
import { Input } from "../components/input";

export default function Login() {
  return (
    <main className="w-full h-screen flex">
      <div className="bg-stone-900 text-white flex flex-col gap-2 p-4 w-72 h-1/2 ">
        <img className="w-20 h-12" src={Logo} alt="Logotipo" />
        <h3 className="flex items-center gap-2 text-xl font-bold mb-2">
          <span className="h-2.5 w-1 bg-orange-500 "></span>
          Login
        </h3>
        <form className="flex flex-col gap-2 w-full gap-4">
            <Input/>
        </form>
      </div>
    </main>
  );
}
