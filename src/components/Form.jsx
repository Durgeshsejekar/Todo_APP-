import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/todoContext'
import ThemeContext from '../context/ThemeContext'

const Form = () => {
  const {addTodo , edit , updateTodo} = useContext(TodoContext)
  const {dark} = useContext(ThemeContext)

  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    edit.isEdit ? updateTodo(edit.todo.id , title , description) : addTodo(title , description)
    setTitle("")
    setDescription("")
  }

  useEffect(()=>{
    setTitle(edit.todo.title)
    setDescription(edit.todo.description)
  } , [edit])


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input required  onChange={(e)=> setTitle(e.target.value)} value={title} type="text" className='border text-black w-full px-5 py-2 rounded my-5' placeholder='Enter Title...'/>
        <textarea required onChange={(e)=> setDescription(e.target.value)} value={description} type="text" className='border text-black w-full px-5 py-4 rounded' placeholder='Enter Description...'/>
        <button className={dark ? 'bg-gray-800 text-xl font-semibold w-full p-2 rounded-3xl my-8 hover:bg-gray-700 duration-200' : 'bg-sky-900 text-xl font-semibold w-full p-2 rounded-3xl my-8 hover:bg-sky-800 duration-200 text-white'}>Submit</button>
    </form>
  )
}

export default Form
