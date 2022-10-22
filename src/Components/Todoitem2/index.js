import React from 'react'
import styles from './TodoItem2.module.css'

const TodoItem2 = (props) => {
  console.log(props);
  const handleDelete = () => {
    props.delete (props.text)
    console.log(props.text);
  }
  return (
    <div  className= {styles.TodoItem2}>
          <p>{props.text}</p>
          <button className={styles.deletebutton} onClick= {handleDelete}>delete</button>
         </div>
  )
}

export default TodoItem2
