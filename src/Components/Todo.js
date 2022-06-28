import React from 'react'

import style from './todo.module.css'

const Todo = (props) => {
const {title, desc, id}=props.todo;
  return (
    <article className={style.todo}>
       <div>
          <h1>{title}</h1>
          <p>{desc}</p>
          <p>{id}</p>
          <div>
              <button className={style.btn}>
                  <i className=" fa fa-trash fa-2x"></i>
              </button>
          </div>
       </div>
    </article>
  )
}

export default Todo
