"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

function RegisterForm() {
  const { registerUser, userState, handlerUserInput } = useUserContext();
  const { name, email, password } = userState;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <form className="relative m-[2rem] p-6 rounded-lg bg-white w-full max-w-[520px]">
      <img src="/logo.png" alt="" />
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-[18px] font-medium">TaskNext</h1>
        <h1 className="mb-2 text-[20px] font-medium">Register</h1>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-[#999]">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handlerUserInput("name")(e)}
            name="name"
            className="px-4 py-3 border-[2px] rounded-md outline-[#3aafae] text-gray-800"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-[#999]">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => handlerUserInput("email")(e)}
            name="email"
            className="px-4 py-3 border-[2px] rounded-md outline-[#3aafae] text-gray-800"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="relative mt-[1rem] flex flex-col">
          <label htmlFor="password" className="mb-1 text-[#999]">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => handlerUserInput("password")(e)}
            name="password"
            className="px-4 py-3 border-[2px] rounded-md outline-[#3aafae] text-gray-800"
            placeholder="***************"
          />
          <button
            type="button"
            className="absolute p-1 right-4 top-[43%] text-[22px] text-[#999] opacity-45"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash" onClick={togglePassword}></i>
            ) : (
              <i className="fas fa-eye" onClick={togglePassword}></i>
            )}
          </button>
        </div>
        <div className="flex mt-1" style={{ justifyContent: "space-between" }}>
          <a
            href="/login"
            className="font-bold text-[#3aafae] text-[14px] hover:text-[#ec563b] transition-all duration-300"
          >
            Already Have an Account? Login
          </a>
        </div>

        <div className="flex">
          <button
            type="submit"
            disabled={!name || !email || !password}
            onClick={registerUser}
            className={`mt-[1.5rem] flex-1 px-4 py-3 font-bold  text-white rounded-md transition-colors ${
              !name || !email || !password
                ? "bg-[#b1b1b1]"
                : "bg-[#3aafae] hover:bg-[#ec563b]"
            }`}
          >
            Register Now
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;