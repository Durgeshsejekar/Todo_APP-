import React, { useContext } from 'react'
import Form from './Form'
import ListGroup from './ListGroup'
import TodoContext from '../context/todoContext'
import ThemeContext from '../context/ThemeContext'

const Container = () => {
  const {todos } = useContext(TodoContext)
  const{changeTheme , dark} = useContext(ThemeContext)
  return (
    <div class="grid py-16 grid-cols-1 md:grid-cols-4 gap-5">
        <div className={dark ? 'col-span-full md:col-start-2 md:col-end-4 bg-gray-900 my-12 text-white py-10 px-5 md:px-16 shadow-2xl' : 'col-span-full md:col-start-2 md:col-end-4 bg-gray-200 my-12 text-black py-10 px-5 md:px-16 shadow-2xl'}>
          <h1 className='text-center text-xl  font-bold'>Todo APP</h1>
          <div className='flex items-center justify-between mb-5'>
            <h1 className='text-lg flex font-semibold items-center items-center justify-center'>Total Tasks : {todos.length}</h1>
            <button onClick={()=>changeTheme()} className={dark ? 'rounded-full text-lg font-semibold px-6 py-2 bg-gray-800 hover:bg-gray-700 duration-200' : 'rounded-full text-lg font-semibold px-6 py-2 text-white duration-200 bg-sky-500 hover:bg-sky-400'}>
              {dark? "Light" : "Dark"}
            </button>
          </div>
          <Form/>

          <ListGroup/>

        </div>
      </div>
  )
}

export default Container
