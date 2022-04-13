import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const { deleteToDo } = actionCreators;

  const handleDelete = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      {text}&nbsp;&nbsp;&nbsp;<span onClick={handleDelete}>×</span>
    </li>
  );
}

export default ToDo;
