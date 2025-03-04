"use client";
import { useUserContext } from "@/context/userContext";
import React, { useState } from "react";

function ForgotPasswordForm() {
  const { forgotPasswordEmail } = useUserContext();

  // state
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    forgotPasswordEmail(email);

    // clear input
    setEmail("");
  };

  return (
    <form className="relative m-[2rem] p-6 rounded-lg bg-white max-w-[520px] w-full">
      <img src="/logo.png" alt="" />
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-[18px] font-medium">TaskNext</h1>
        <h1 className="mb-2 text-[20px] font-medium">Forget Password</h1>
        <div className="mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-[#999]">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            placeholder="Enter Your Email"
            className="px-4 py-3 border-[2px] rounded-md outline-[#3aafae] text-gray-800"
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            onClick={handleSubmit}
            className={`mt-[1.5rem] flex-1 px-4 py-3 font-bold  text-white rounded-md transition-colors ${
              !email ? "bg-[#b1b1b1]" : "bg-[#3aafae] hover:bg-[#ec563b]"
            }`}
          >
            Reset Password
          </button>
        </div>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;