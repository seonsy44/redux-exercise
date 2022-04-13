import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const { deleteToDo } = actionCreators;

  const handleDelete = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>&nbsp;&nbsp;&nbsp;
      <span onClick={handleDelete}>×</span>
    </li>
  );
}

export default ToDo;
