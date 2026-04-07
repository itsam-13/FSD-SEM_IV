import React from 'react'
import User from './user'

function App() {
    
        const user = {
          name: "John Doe",
          city: "New York",
          
        };
        const skill = ["HTML", "CSS", "JavaScript"];
        
  return (
    <>
      <div style={{textAlign: 'center'}}>
        data = object
        skill = array
        <User name={user.name} city={user.city} skill={skill} />
      </div>
    </>
    
  )
}

export default App
