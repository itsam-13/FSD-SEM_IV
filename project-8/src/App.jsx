import { useState } from 'react'

function App() {
  const [name, setName] = useState("Verma")
  const [age, setAge] = useState(22)

  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>Age: {age}</h2>

        <button onClick={() => setName("Feng")}>Change Name</button>
        <button onClick={() => setAge(age + 1)}>Increase Age</button>
      </div>
    </>
  )
}

export default App
