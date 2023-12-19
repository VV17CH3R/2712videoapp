import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from './utils/auth';

export default async function Home() {

  const session = await getServerSession(authOptions);

  if(!session) {
    return redirect("/login");
  } else {
    return redirect("/home")
  };

  // return (
  //   <div>
  //     {session?.user?.name} 
  //     <Image src={session?.user?.image as string} alt="ava" width={160} height={160}/>
  //   </div>
  // )
}
