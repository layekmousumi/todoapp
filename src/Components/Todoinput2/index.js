import React, { useState } from 'react'
import styles from './TodoInput2.module.css'
const TodoInput = (props) => {
  const [inputtext, setInputtext] = useState('')
  const handleclick = () =>{

    props.hi(inputtext)
    setInputtext('')
    console.log(inputtext);
  }
  console.log(props);
  return (
    <div className={styles.todoinput}>
       <input type="text" onChange={e => setInputtext(e.target.value)} value ={inputtext} className= {styles.input} />
        <button className= {styles.addtext} onClick = {handleclick}>Add Text</button>
      </div>
  )
}

export default TodoInput
