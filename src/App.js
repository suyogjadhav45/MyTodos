import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import Addto from './Components/Addto';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  // localStorage
  let initTodo;
  if (localStorage.getItem("todoarray") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todoarray"));
  }


  function onDelete(todo) {
    // console.log("I am on delete of todo", todo);
    settodoarray(todoarray.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todoarray", JSON.stringify(todoarray));
  }

  function add(title, desc) {
    // console.log("I am adding this todo", title, desc);
    let sno;
    if (todoarray.length === 0) {
      sno = 0;
    }
    else {
      sno = todoarray[todoarray.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodoarray([...todoarray, mytodo]);
    localStorage.setItem("todoarray", JSON.stringify(todoarray));
  }

  // usestate
  const [todoarray, settodoarray] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todoarray", JSON.stringify(todoarray));
  }, [todoarray])





  return (
    <div>
      <Router>
        <Header title="My App" searchbar={true} />
        <Routes>
          <Route exact path="/" element={
            (<>
              <Addto add={add} />
              <Todos todoarray={todoarray} onDelete={onDelete} />
            </>)
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
