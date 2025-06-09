import { getSession } from "@/lib/session";
import { Role } from "@/lib/type";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const session = await getSession()
  console.log(".............session..Dasboadr..........",session?.user.name)
  // if (session.user.role != Role.USER) redirect("/auth/signin");

  console.log(session)
  return <>
  {!session || !session.user ? (
        <>
        <div>
          <Link href={"/auth/signin"}>Sign In</Link></div>
         <div> <Link href={"/auth/signup"}>Sign Up</Link></div>
        </>
      ) : (
        <> <div>
    Dashboard
  </div>
          <p>{session.user.name}</p>
          <Link href={"/api/auth/signout"}>Sign Out</Link>
        </>
      )}
  
  </>
};

export default Dashboard;
