import React, { useContext } from 'react'
import ListGroupItem from './ListGroupItem'
import TodoContext from '../context/todoContext'

const ListGroup = () => {

  const {todos} = useContext(TodoContext);

  return (
        <ul>
          {
            todos.map((todo) => {
                return(
                    <ListGroupItem key={todo.id} todo = {todo}/>  
                )
            })
          }
          
        </ul>
  )
}

export default ListGroup
