import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const { addToDo } = actionCreators;

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch(addToDo({ text, id: Date.now() }));
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

export default Home;
