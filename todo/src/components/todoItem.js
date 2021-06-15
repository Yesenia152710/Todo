import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions";

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onClick={(e) => this.props.toggleTodo(this.props.todoId)}
          />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={(e) => this.props.deleteTodo(this.props.todoId)} />
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
