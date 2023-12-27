import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import NavBar from "@/components/NavBar";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <NavBar />
      <main className="w-full max-w7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  )
}
