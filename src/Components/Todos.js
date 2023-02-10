import React from 'react'
import Todoitem from './Todoitem'



export default function (props) {
    return (
        <div className='Container m-5'>

            <h3>Todo Items</h3>
            {props.todoarray.length !== 0 ? props.todoarray.map((todo) => {
                return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            }) : "No Todos to display"}
        </div>
    )
}
