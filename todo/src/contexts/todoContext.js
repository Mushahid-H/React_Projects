import { createContext, useContext } from 'react'

export const TodoContext = createContext({
  todos: [{ id: 1, title: 'todo1', completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  compeletionToggle: (id) => {},
})

export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider
