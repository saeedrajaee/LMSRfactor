import Link from "next/link";
import React from "react";
import SignInForm from "./_components/signInForm";

const SignInPage = () => {
  return (
        <div className="bg-white p-8 rounded-md gap-3 shadow-md w-96 flex flex-col justify-center items-center">

      <SignInForm/>
    </div>
  );
};

export default SignInPage;
