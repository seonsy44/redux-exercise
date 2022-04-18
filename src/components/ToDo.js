import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remove(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>&nbsp;&nbsp;&nbsp;
      <span onClick={handleDelete}>×</span>
    </li>
  );
}

export default ToDo;
