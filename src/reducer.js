import { v4 as uuid } from "uuid";

export const ADD = "add";

export const DEL = "del";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";
export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        completed: [...state.completed, { ...target }],
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case UNCOMPLETE:
      const atarget = state.completed.find(
        (complete) => complete.id === action.payload
      );
      return {
        ...state,
        toDos: [...state.toDos, { ...atarget }],
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    default:
      return;
  }
};

export default reducer;
