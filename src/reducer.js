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
      return {
        ...state,
        completed: [
          ...state.completed,
          ...state.toDos.filter((toDo) => toDo.id === action.payload),
        ],
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case UNCOMPLETE:
      return {
        ...state,
        toDos: [
          ...state.toDos,
          ...state.completed.filter(
            (complete) => complete.id === action.payload
          ),
        ],
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    default:
      return;
  }
};

export default reducer;
