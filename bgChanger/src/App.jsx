import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('black')

  return (
    <div
      className='flex justify-center min-h-screen'
      style={{ backgroundColor: bgColor }}
    >
      <h2 className='text-2xl text-white'>
        Welcome to Background Color Changer
      </h2>
      <div className='bg-white rounded-xl px-2 w-9/12 flex justify-around h-10 mt-4 fixed bottom-12 py-1'>
        <button
          className='bg-blue-500 rounded-2xl px-3 '
          onClick={() => setBgColor('blue')}
        >
          Blue
        </button>
        <button
          className='bg-red-500 rounded-2xl px-3'
          onClick={() => setBgColor('red')}
        >
          Red
        </button>
        <button
          className='bg-black rounded-2xl px-3 text-white'
          onClick={() => setBgColor('black')}
        >
          Black
        </button>
        <button
          className='bg-gray-500 rounded-2xl px-3'
          onClick={() => setBgColor('gray')}
        >
          Gray
        </button>
        <button
          className='bg-pink-500 rounded-2xl px-3'
          onClick={() => setBgColor('pink')}
        >
          Pink
        </button>
        <button
          className='bg-purple-500 rounded-2xl px-3'
          onClick={() => setBgColor('purple')}
        >
          Purple
        </button>
        <button
          className='rounded-2xl px-3'
          style={{ backgroundColor: 'olive' }}
          onClick={() => setBgColor('olive')}
        >
          Olive
        </button>
        <button
          className='bg-indigo-500 rounded-2xl px-3'
          onClick={() => setBgColor('indigo')}
        >
          Indigo
        </button>
      </div>
    </div>
  )
}

export default App
