import Image from "next/image";
import { ReactNode } from "react";
import BGimg from "../../public/loginBg.jpeg";
import Logo from "../../public/Endless.png";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Image 
                src={BGimg} 
                alt="bg" 
                className="hidden sm:flex sm:object-cover -z-10 brightness-90"
                priority
                fill
            />
            <Image 
                src={Logo} 
                alt="logo" 
                width={90}
                height={130}
                className="absolute  left-auto top-auto  object-contain md:left-10 md:top-6"
                priority
            />
            { children }
        </div>
    )
}