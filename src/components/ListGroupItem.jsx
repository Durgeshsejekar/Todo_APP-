import React, { useContext } from 'react'
import { FaEdit , FaTrash } from "react-icons/fa";
import TodoContext from '../context/todoContext';
import ThemeContext from '../context/ThemeContext';

const ListGroupItem = ({todo}) => {

  const {deleteTodo , editTodo} = useContext(TodoContext)
  const {dark} = useContext(ThemeContext)

  const handleEdit = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    editTodo(todo)
  }

  return (
        <li className={dark ? 'relative bg-gray-900 my-5 p-5 border border-gray-700 rounded  duration-200 shadow-2xl' : 'relative bg-gray-200 my-5 p-5  rounded  duration-200 shadow-2xl'}>
                    <h1 className='text-3xl font-semibold my-1'>{todo.title}</h1>
                    <p className='text-lg'>{todo.description}</p>

                    <div className='absolute top-3 right-5 flex space-x-5'>
                        <p onClick={(e)=>{handleEdit()}} className='text-yellow-500 text-xl hover:text-yellow-700 duration-200'><FaEdit/></p>
                        <p onClick={(e)=> deleteTodo(todo.id)} className='text-red-500 text-xl hover:text-red-800 duration-200'><FaTrash/></p>
                    </div>
        </li>
  )
}

export default ListGroupItem
