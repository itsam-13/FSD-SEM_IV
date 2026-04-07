import { useState } from 'react'

function CheckboxExample() {
  const [skill, setSkill] = useState([])

  const handleCheckbox = (e) => {
    const value = e.target.value
    const checked = e.target.checked

    if (checked) {
      setSkill([...skill, value])
    } else {
      setSkill(skill.filter((item) => item !== value))
    }
  }

  return (
    <div>
      <h2>Skills</h2>

      <input
        type="checkbox"
        value="HTML"
        onChange={handleCheckbox}
        checked={skill.includes("HTML")}
      />
      <label>HTML</label>

      <input
        type="checkbox"
        value="CSS"
        onChange={handleCheckbox}
        checked={skill.includes("CSS")}
      />
      <label>CSS</label>

      <input
        type="checkbox"
        value="JavaScript"
        onChange={handleCheckbox}
        checked={skill.includes("JavaScript")}
      />
      <label>JavaScript</label>

      <h3>Selected Skills: {skill.join(", ")}</h3>
    </div>
  )
}

export default CheckboxExample