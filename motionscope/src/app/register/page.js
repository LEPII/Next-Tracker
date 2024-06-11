"use client";

import Link from "next/link";
import { useState } from "react";
import Section1 from "./component/Section1.js"
import CoachSection from "./component/coachSection";
import AthleteSection from "./component/athleteSection.js";

const Page = () => {
  const [userInfo, setUserInfo] = useState({
    // section 1 members
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",

    // section 2 members
    birthday: null,
    gender: "",
    role: "",

    // section 3 for coaches
    coachExperience: null, 
    

    // section 3 for athletes
    height: null, 
    weight: null, 
    gymExperience: null, 
    powerliftingExperience: null,
    competedBefore: false, 
    bestSquatTraining: null, 
    bestBenchTraining: null, 
    bestDeadliftTraining: null, 
    bestSquatComp: null, 
    bestBenchComp: null,
    bestDeadliftComp: null,
    nextCompetition: "", 
    trainingHistory: "",
    currentProgram: "", 
    familiarRPE: false, 
    proficientRPE: false, 
    deadliftStance: "", 
    liftingGoals: "", 
    trainingDays: null, 
    trainingAvailability: [],
    equipment: "", 
    injuries: "", 
    questions: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", userInfo);
  };

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
        placeholder="password"
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
