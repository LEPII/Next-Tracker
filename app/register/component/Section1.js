"use client";

import React, { useState } from "react";

const Section1 = ({ userInfo, handleChange, toggleSection }) => {
  const [showSection2, setShowSection2] = useState(false);

  // Toggle section visibility based on current state
  const handleToggleSearch = () => {
    const isSection1Complete =
      userInfo.fullName &&
      userInfo.email &&
      userInfo.password &&
      userInfo.phoneNumber;
    if (isSection1Complete) {
      setShowSection2(!showSection2);
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={userInfo.fullName}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={userInfo.password}
        onChange={handleChange}
        required
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={userInfo.confirmPassword}
        onChange={handleChange}
        required
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={userInfo.phoneNumber}
        onChange={handleChange}
      />

      <button onClick={handleToggleSection}>Continue to Section 2</button>

      {/* Section 2 Fields (conditionally rendered) */}
      {showSection2 && (
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={userInfo.birthday}
            onChange={handleChange}
          />
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={userInfo.gender}
            onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div>
            <label htmlFor="role">Are you a coach or an athlete?</label>
            <select
              id="role"
              name="role"
              value={userInfo.role}
              onChange={handleChange}
              required>
              <option value="">Select Role</option>
              <option value="coach">Coach</option>
              <option value="athlete">Athlete</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;
