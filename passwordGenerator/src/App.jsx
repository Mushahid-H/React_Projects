import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)

  const passGenerator = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let pass = ''

    if (includeNumbers) str += '0123456789'
    if (includeSymbols) str += '!@#$%^&*()_+-={}[]`?/.,<>'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, includeSymbols, includeNumbers, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800'>
        <h1 className='text-white text-center font-serif my-3'>
          Password Generator
        </h1>
        <div className='flex shadow overflow-hidden mb-4 rounded-lg '>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 justify-around'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-orange-500'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={includeNumbers}
              id='inputNumber'
              onChange={(e) => setIncludeNumbers((prev) => !prev)}
            />{' '}
            <label htmlFor='inputNumber' className='text-orange-500'>
              Numbers
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={includeSymbols}
              id='symbolsInput'
              onChange={(e) => setIncludeSymbols((prev) => !prev)}
            />{' '}
            <label htmlFor='symbolsInput' className='text-orange-500'>
              Symbols
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
