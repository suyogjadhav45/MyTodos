import React from 'react'

export default function Todoitem(props) {
    return (
        <div className='container m-5'>
            <div class="card" style={{ alignContent: "center" }}>
                <div class="card-body">
                    <h5 class="card-title">{props.todo.title}</h5>
                    <p class="card-text">{props.todo.desc}</p>
                    <button href="#" class="btn btn-sm btn-dark" onClick={() => { props.onDelete(props.todo) }}>DELETE</button>
                </div>
            </div>
        </div>
    )
}
