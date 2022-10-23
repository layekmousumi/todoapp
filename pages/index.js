
import react, { useState } from "react";
import TodoInput2 from '../src/Components/Todoinput2';
import TodoItem2 from "../src/Components/TodoItem2";
import style from '../styles/Home.module.css'
const Home = () => {
  const [todoItem, setTodoItem] = useState([ 'Javascript','Todo List','Project'])
  console.log(todoItem);
  const handleDelete = (deleteItem) => {//filter todo item only keeps the items that does not match with deleteItem.
    //set the filter data to todoitem.
     const filtertodoItem = todoItem.filter(item =>item !== deleteItem )
     setTodoItem(filtertodoItem)
  }
  const addTodo = (newTodo) => {
    setTodoItem(oldtodos => [...oldtodos,newTodo])

  }
  return(
    <div className={style.container}>
      <h1>Todo List</h1>
      <div className="todolist">
       <TodoInput2 hi = {addTodo} />
        <div className= {style.todoitemlist}>

            {todoItem.map(item =><TodoItem2 key ={item} text = {item}  delete = {handleDelete}/>)}
        </div>

      </div>
    </div>
  )
}

export default Home
