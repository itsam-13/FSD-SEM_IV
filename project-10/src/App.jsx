import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(0)

  return (
    <>
      <div style = {{textAlign: 'center', marginTop: '2rem' }}>
        <h1>Multiple conditional Rendering</h1>
        <button onClick = {() => setStatus(1)}>Show Student</button>
        <button onClick = {() => setStatus(2)}>Show Teacher</button>
        <button onClick = {() => setStatus(3)}>Show Admin</button>

        <hr />
        {status === 1 && (
          <div>
            <h2>Student</h2>
            <p>This is the student section. Here you can find information related to students.</p>
          </div>
        )}

        {status === 2 && (
          <div>
            <h2>Teacher</h2>
            <p>This is the teacher section. Here you can find information related to teachers.</p>
          </div>
        )}

        {status === 3 && (
          <div>
            <h2>Admin</h2>
            <p>This is the admin section. Here you can find information related to admins.</p>
          </div>
        )}
      </div>
      
    </>
  )
}

export default App
