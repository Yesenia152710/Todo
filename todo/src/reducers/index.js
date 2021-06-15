import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from "../actions/index";
import todoList from "../components/todoList.json";

const todoReducer = (state = todoList, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newItem = {
        userId: 1,
        id: Math.random(),
        title: action.payload,
        completed: false,
      };
      return [...state, newItem];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : { ...todo }));
    case CLEAR_COMPLETED:
      return state.filter((todo) => todo.completed === false);

    default:
      return state;
  }
};

export default combineReducers({ todo: todoReducer });
