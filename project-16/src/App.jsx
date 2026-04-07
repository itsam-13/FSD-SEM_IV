import React, { useState } from "react";

function FormExample() {

  // State for radio
  const [gender, setGender] = useState("Male"); // default selected

  // State for dropdown
  const [city, setCity] = useState("Delhi"); // default selected

  return (
    <div>
      <h2>Radio Button Example</h2>

      {/* Radio Buttons */}
      <input
        type="radio"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      />
      Male

      <input
        type="radio"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      />
      Female

      <h3>Selected Gender: {gender}</h3>

      <hr />

      <h2>Dropdown Example</h2>

      {/* Dropdown */}
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Noida">Noida</option>
        <option value="Ghaziabad">Ghaziabad</option>
      </select>

      <h3>Selected City: {city}</h3>
    </div>
  );
}

export default FormExample;