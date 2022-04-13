import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store";

function Home() {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const { addToDo, deleteToDo } = actionCreators;

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
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
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

export default Home;
