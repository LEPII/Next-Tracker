"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setLoginUserName(e.target.value)}></input>
      <input
        type="password"
        name="password"
        placeholder="password "
        onChange={(e) => setLoginPassword(e.target.value)}></input>
      <button> Login </button>
      <div>
        <p>Don&rsquo;t have an account?</p>
        <Link href="/register"> Register Here </Link>
      </div>
    </div>
  );
};

export default Page;
