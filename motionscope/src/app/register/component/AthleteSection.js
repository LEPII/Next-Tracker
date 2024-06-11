"use client";

import React, { useState } from "react";

const AthleteSection = ({ userInfo, handleChange }) => {
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  const handleToggleSearch = () => {
    const isSection1Complete =
      userInfo.height &&
      userInfo.weight &&
      userInfo.gymExperience &&
      userInfo.powerliftingExperience &&
      userInfo.competedBefore;

    if (isSection1Complete && competedBefore === "yes") {
      setShowSection2(!showSection2);
    } else if (isSection1Complete && competedBefore === "no") {
      setShowSection3(!showSection3);
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div className="athlete-section">
      <h2>For Athletes</h2>
      <label htmlFor="height">Height (cm):</label>
      <input
        type="number"
        id="height"
        name="height"
        value={userInfo.height}
        onChange={handleChange}
      />
      <label htmlFor="weight">Current Body Weight (kg/lbs):</label>
      <input
        type="number"
        id="weight"
        name="weight"
        value={userInfo.weight}
        onChange={handleChange}
      />
      <label htmlFor="gymExperience">Years of Gym Experience:</label>
      <input
        type="number"
        id="gymExperience"
        name="gymExperience"
        value={userInfo.gymExperience}
        onChange={handleChange}
      />
      <label htmlFor="powerliftingExperience">
        Years of Powerlifting Experience:
      </label>
      <input
        type="number"
        id="powerliftingExperience"
        name="powerliftingExperience"
        value={userInfo.powerliftingExperience}
        onChange={handleChange}
      />
      <label htmlFor="competedBefore">
        Have you competed in powerlifting before?
      </label>
      <input
        type="checkbox"
        id="competedBefore"
        name="competedBefore"
        checked={userInfo.competedBefore}
        onChange={handleChange}
      />

      {/* Section 2 Fields (conditionally rendered) */}
      {showSection2 && (
        <div>
          <label htmlFor="bestSquatComp">
            Best Squat Competition Lift (kg/lbs):
          </label>
          <input
            type="number"
            id="bestSquatComp"
            name="bestSquatComp"
            value={userInfo.bestSquatComp}
            onChange={handleChange}
          />
          <label htmlFor="bestBenchComp">
            Best Bench Press Competition Lift (kg/lbs):
          </label>
          <input
            type="number"
            id="bestBenchComp"
            name="bestBenchComp"
            value={userInfo.bestBenchComp}
            onChange={handleChange}
          />
          <label htmlFor="bestDeadliftComp">
            Best Deadlift Competition Lift (kg/lbs):
          </label>
          <input
            type="number"
            id="bestDeadliftComp"
            name="bestDeadliftComp"
            value={userInfo.bestDeadliftComp}
            onChange={handleChange}
          />
        </div>
      )}

      <label htmlFor="bestSquatTraining">Best Squat (Training):</label>
      <input
        type="number"
        name="bestSquatTraining"
        id="bestSquatTraining"
        value={athleteInfo.bestSquatTraining}
        onChange={handleInputChange}
      />
      <label htmlFor="bestBenchTraining">Best Bench Press (Training):</label>
      <input
        type="number"
        name="bestBenchTraining"
        id="bestBenchTraining"
        value={athleteInfo.bestBenchTraining}
        onChange={handleInputChange}
      />
      <label htmlFor="bestDeadliftTraining">Best Deadlift (Training):</label>
      <input
        type="number"
        name="bestDeadliftTraining"
        id="bestDeadliftTraining"
        value={athleteInfo.bestDeadliftTraining}
        onChange={handleInputChange}
      />

      <label htmlFor="nextCompetition">
        What are you plans for your next planed competition. If you don’t have
        plans, write N/A:
      </label>
      <input
        type="text"
        id="nextCompetition"
        name="nextCompetition"
        value={userInfo.nextCompetition}
        onChange={handleChange}
      />
      <label htmlFor="trainingHistory">Brief Training History:</label>
      <textarea
        id="trainingHistory"
        name="trainingHistory"
        value={userInfo.trainingHistory}
        onChange={handleChange}
        rows="4"
      />
      <label htmlFor="currentProgram">
        Current Training Program ( sets, reps, load, frequency, etc ):
      </label>
      <input
        type="text"
        id="currentProgram"
        name="currentProgram"
        value={userInfo.currentProgram}
        onChange={handleChange}
      />

      <label htmlFor="deadliftStance">Deadlift Stance:</label>
      <select
        name="deadliftStance"
        id="deadliftStance"
        value={athleteInfo.deadliftStance}
        onChange={handleInputChange}>
        <option value="">Select Stance</option>
        <option value="conventional">Conventional</option>
        <option value="sumo">Sumo</option>
      </select>

      <label htmlFor="liftingGoals">What are your lifting goals?</label>
      <textarea
        name="liftingGoals"
        id="liftingGoals"
        value={athleteInfo.liftingGoals}
        onChange={handleInputChange}
      />

      <label htmlFor="trainingDays">
        How many days per week can you train?
      </label>
      <input
        type="number"
        name="trainingDays"
        id="trainingDays"
        value={athleteInfo.trainingDays}
        onChange={handleInputChange}
      />

      <label htmlFor="equipment">
        What equipment do you have available to you?
      </label>
      <input
        type="text"
        id="equipment"
        name="equipment"
        value={formData.equipment}
        onChange={handleChange}
      />
      
      <label htmlFor="injuries">
        Do you have any current or previous injuries? If so, what are they?
      </label>
      <input
        type="text"
        id="injuries"
        name="injuries"
        value={formData.injuries}
        onChange={handleChange}
      />
      <label htmlFor="questions">Questions or concerns?</label>
      <textarea
        id="questions"
        name="questions"
        value={formData.questions}
        onChange={handleChange}></textarea>
    </div>
  );
};

export default AthleteSection;
