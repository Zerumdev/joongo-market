"use client";

import { useRouter } from "next/navigation";
import React, { ComponentProps } from "react";
import HandleSubmitSignUpFormEvent from "../../../../../../../types/signup.types";
import supabase from "../../../../../../../supabase/supabase.client";

function SignUpForm() {
  const router = useRouter();

  const handleSubmitSignUpForm: ComponentProps<"form">["onSubmit"] = async (
    e: HandleSubmitSignUpFormEvent
  ) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) return alert("이메일을 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");

    const res = await supabase.auth.signUp({
      email,
      password,
      options: { data: { nickname: "유저" } },
    });

    if (res.data.user) {
      alert("회원가입 성공");
      router.push("/");
    } else {
      alert("회원가입 실패");
    }
  };

  return (
    <form
      onSubmit={handleSubmitSignUpForm}
      className="grid grid-cols-1 gap-y-5 px-80"
    >
      <input
        name="email"
        className="border p-4"
        type="text"
        placeholder="이메일을 입력해 주세요"
      />
      <input
        name="password"
        className="border p-4"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
      />
      <button className="bg-blue-300 text-white p-4 font-bold">
        회원가입하기
      </button>
    </form>
  );
}

export default SignUpForm;
