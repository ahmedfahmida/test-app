import React, { useState } from 'react';

import style from './NewTodo.module.css'

const NewTodos = () => {
  const [todo,setTodo]=useState({title:" ",  description:" "});
  const handleSubmit=(event)=>
  {
        event.preventDefault();
  }
  const {title, description}=todo;
  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label>Title</label>
            <input type='text'id='title' name='title' value={title} onChange={handleChange}/>
        </div>

        <div className={style["form-field"]}>
            <label>Description</label>
            <input type='text'id='description' name='description' value={description} onChange={handleChange}/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodos