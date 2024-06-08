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
    coachExperience: null, // Added for coaches
    coachReview: null,

    // section 3 for athletes
    height: null, // Added for athletes
    weight: null, // Added for athletes
    gymExperience: null, // Added for athletes
    powerliftingExperience: null, // Added for athletes
    competedBefore: false, // Added for athletes
    bestSquatTraining: null, // Added for athletes
    bestBenchTraining: null, // Added for athletes
    bestDeadliftTraining: null, // Added for athletes
    bestSquatComp: null, // Added for athletes
    bestBenchComp: null, // Added for athletes
    bestDeadliftComp: null, // Added for athletes
    nextCompetition: "", // Added for athletes
    trainingHistory: "", // Added for athletes
    currentProgram: "", // Added for athletes
    familiarRPE: false, // Added for athletes
    proficientRPE: false, // Added for athletes
    deadliftStance: "", // Added for athletes
    liftingGoals: "", // Added for athletes
    trainingDays: null, // Added for athletes
    trainingAvailability: [], // Added for athletes (array for multiple days)
    equipment: "", // Added for athletes
    injuries: "", // Added for athletes
    questions: "", // Added for athletes
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
