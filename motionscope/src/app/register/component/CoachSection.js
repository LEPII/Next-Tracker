
const CoachSection = ({ userInfo, handleChange }) => {
  return (
    <div className="coach-section">
      <h2>For Coaches</h2>
      <label htmlFor="coachExperience">
        Years of Powerlifting Coaching Experience:
      </label>
      <input
        type="number"
        id="coachExperience"
        name="coachExperience"
        value={userInfo.coachExperience}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default CoachSection