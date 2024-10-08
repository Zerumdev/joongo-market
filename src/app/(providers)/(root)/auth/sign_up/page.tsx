import React from "react";
import SignUpForm from "./_components/SignUpForm";

function SignUpPage() {
  return (
    <main className="p-5">
      <h2 className="text-center font-bold text-3xl mb-10">
        회원으로 가입하기
      </h2>
      <SignUpForm />
    </main>
  );
}

export default SignUpPage;
