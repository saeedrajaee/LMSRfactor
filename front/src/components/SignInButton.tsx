import { getSession } from "@/lib/session";
import Link from "next/link";
import React from "react";

const SignInButton = async () => {
  const session = await getSession();
  // console.log("......session .............",session?.user.name)
  return (
    <div className="flex items-center gap-2 mt-auto">
      {!session || !session.user ? (
        <>
          <Link href={"/auth/signin"}>Sign In</Link>
          <Link href={"/auth/signup"}>Sign Up</Link>
        </>
      ) : (
        <>
          <p>{session.user.name}</p>
          <Link href={"/api/auth/signout"}>Sign Out</Link>
        </>
      )}
    </div>
  );
};

export default SignInButton;
