"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setRegisterUserName(e.target.value)}></input>
      <input
        type="password"
        name="password"
        placeholder="password "
        onChange={(e) => setRegisterPassword(e.target.value)}></input>
      <button> Register </button>
      <div>
        <p>Already have an account?</p>
        <Link href="/register"> Login Here </Link>
      </div>
    </div>
  );
};

export default Page;
