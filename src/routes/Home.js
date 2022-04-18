import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch(add(text));
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
