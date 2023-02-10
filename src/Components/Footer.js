// rfc shortcut
import React from 'react'

export default function footer() {
    let footstyle = {
        position: "relative",
        top: "30vh",
        width: "100%"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footstyle} >
            <p className='text-center' >Copyright @Mytodolist-SJ</p>
        </footer>
    )
}

