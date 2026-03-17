import React from 'react'
import Student from './student'

function App() {
  

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <Student name="John Doe" age={20} />
        <Student name="Jane Smith" age={22} />
        <Student name="Alice Johnson" age={19} />
      </div>
    </>
  )
}

export default App
