import { createContext, useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    const [todos , setTodos] = useState([])
    const [edit , setEdit] = useState({
        todo : {} ,
        isEdit : false
    })

      //Delete Todo
      const deleteTodo = (id) => {
        setTodos(todos.filter((todo)=>{
            if(todo.id != id){
                return todo
            }
        }))
      }

      //Add Todo
      const addTodo = (title , description) => {
        const newTodo = {
            id : crypto.randomUUID() ,
            title : title , 
            description : description
        }

        setTodos([...todos , newTodo])
      }

      //Edit todo
      const editTodo = (todo) => {
        setEdit({
            todo : todo , 
            isEdit : true
        })
      }

      //Update Todo
      const updateTodo = (oldId , newTitle , newDescription) => {
        setTodos(todos.map ((todo) => {
            if (todo.id == oldId){
                return {id : oldId , title :newTitle , description :newDescription}

            }
            else {return todo}
        }))
        setEdit({
            todo : {} ,
            isEdit : false
        })
      }
      



    return(
        <TodoContext.Provider value={{todos , deleteTodo , addTodo , editTodo , edit , updateTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext