import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

export default Detail;
