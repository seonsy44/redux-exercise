import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo, deleteToDo }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    addToDo(text);
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

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
