"use client";

import Link from "next/link";
import { useState } from "react";
import Section1 from "./component/Section1.js";
import CoachSection from "./component/CoachSection.js";
import AthleteSection from "./component/AthleteSection.js";

const Page = () => {
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  const [userInfo, setUserInfo] = useState({
    // section 1 members
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    currentProgram: "",
    powerliftingExperience: null,
    nextCompetition: "",
    competedBefore: false,

    bestSquatComp: null,
    bestBenchComp: null,
    bestDeadliftComp: null,

    bestSquatTraining: null,
    bestBenchTraining: null,
    bestDeadliftTraining: null,
    liftingGoals: "",
    deadliftStance: "",
    proficientRPE: false,

    trainingDays: null,
    trainingAvailability: [],
    equipment: "",
    injuries: "",
    questions: "",
  });

  const handleChange = (e) => {
    e.preventDefault;
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    console.log("Form data:", userInfo);
  };

  const handleShowNextSection = () => {
    const isSection0Complete = userInfo.email && userInfo.password;
    const isSection1Complete = userInfo.fullName && userInfo.role;

    if (isSection0Complete && !isSection1Complete) {
      setShowSection1(!showSection1);
    } else if (
      isSection0Complete &&
      isSection1Complete &&
      userInfo.role === "coach"
    ) {
      setShowSection2(!setShowSection2);
    } else if (
      isSection0Complete &&
      isSection1Complete &&
      userInfo.role === "athlete"
    ) {
      setShowSection3(!setShowSection3);
    } else {
      alert("Please fill in all required fields");
    }
  };

  const handleSubmit = (e) => {
    console.log("Form data:", userInfo);
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="email"
        name="email"
        onChange={(e) => handleChange(e.target.value)}></input>
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => handleChange(e.target.value)}></input>
      <button onChange={handleShowNextSection}> Continue </button>

      {showSection1 && (
        <Section1 userInfo={userInfo} handleChange={handleChange} />
      )}
      {showSection2 && (
        <CoachSection
          userInfo={userInfo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      {showSection3 && (
        <AthleteSection
          userInfo={userInfo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      <div>
        <p>Already have an account?</p>
        <Link href="/login"> Login Here </Link>
      </div>
    </div>
  );
};

export default Page;
