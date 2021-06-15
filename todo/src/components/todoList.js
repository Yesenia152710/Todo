import React, { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todo.map((todo) => (
            <TodoItem title={todo.title} completed={todo.completed} todoId={todo.id} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
