import React from 'react'
import Todos from './Todos'; 

import style from "./home.module.css";
import NewTodos from './NewTodos';
const dummyTodos=[
    {
        id:1,
        title:"todo1",
        desc: "Onek ghumate hobe"
    },
    {
        id:2,
        title:"todo2",
        desc: "Onek chill korte hobe"
    }
];

function Home() {
  return (
    <div className={style.container}>
      <h1 style={{color:"white"}}>Todo App</h1>
      <NewTodos/>
      <Todos todos={dummyTodos}/>
    </div>
  )
}

export default Home
