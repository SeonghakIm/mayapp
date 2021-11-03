import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
const ADD = "add";
const DEL = "del";

const initialState = {
  toDos: [],
};

const potato = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DEL:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(potato, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Add to Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        ></input>
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
