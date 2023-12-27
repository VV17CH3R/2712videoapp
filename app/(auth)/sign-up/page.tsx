import { GitHubLoginButton, GoogleLoginButton } from "@/app/components/Buttons";
import { authOptions } from "@/app/utils/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SingUp() {

  const session = await getServerSession(authOptions);

  if(session) { redirect("/home")};

  return (
    <div className="mt-24 rounded-xl bg-black/75 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form  method="post" action="/api/auth/signin">
        <h1 className=" w-full text-center text-2xl font-semibold">
          Регистрация
        </h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email..."
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914d8]"
          >
            Регистрация
          </Button>
        </div>
      </form>
      <div className="flex mt-4 justify-between text-gray-500 text-sm ">
        Уже есть аккаунт? <Link className="text-white hover:underline" href={"/login"}>Войти</Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GitHubLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
}
