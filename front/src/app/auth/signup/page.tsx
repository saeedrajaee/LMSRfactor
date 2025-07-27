import Link from "next/link";
import React from "react";
import SignUpForm from "./_components/signUpForm";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md w-96 flex flex-col justify-center items-center">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
