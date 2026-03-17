import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center', gap: '1rem' }}>
        <h1>Toggle Example in React</h1>
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </button>

        {show &&(
          <div>
            <h2>Toggle Content</h2>
            <p>This is a toggle example in React. Click the button to hide or show this text.</p>
        </div>
        )}

      </div>
    </>
  )
}

export default App
