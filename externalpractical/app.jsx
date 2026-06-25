import React, { useState } from "react";
import "./AgeCalculator.css";
export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    if (!dob) 
    {
      alert("Please select your date of birth");
      return;
    }
    const birthDate = new Date(dob);
    const today = new Date();
    if (birthDate > today) {
      alert("Date of birth cannot be in the future");
      return;
    }
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) 
    {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );
      days += previousMonth.getDate();
    }
    if (months < 0) 
    {
      years--;
      months += 12;
    }
    setAge({ years, months, days });
  };
  return (
    <div className="container">
      <div className="card">
        <h1>🎂 Age Calculator</h1>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
        {age && (
          <div className="result">
            <div className="box">
              <span>{age.years}</span>
              <p>Years</p>
            </div>
            <div className="box">
              <span>{age.months}</span>
              <p>Months</p>
            </div>
            <div className="box">
              <span>{age.days}</span>
              <p>Days</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}