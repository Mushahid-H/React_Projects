import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App
