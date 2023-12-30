import React from 'react'
import { useTodoContext } from '../contexts/todoContext'
import { useState } from 'react'

const TodosForm = () => {
  const [todo, setTodo] = useState('')
  const { addTodo } = useTodoContext()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return alert('Please add a todo')

    addTodo({
      title: todo,
      completed: false,
    })
    setTodo('')
  }

  return (
    <form onSubmit={add} className='flex'>
      <input
        type='text'
        placeholder='Write Todo...'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type='submit'
        className='px-3 rounded-r-lg py-1 bg-green-600 text-white shrink-0'
      >
        Add
      </button>
    </form>
  )
}

export default TodosForm
