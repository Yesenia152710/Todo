import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import TodoList from "./components/todoList";
import "./App.css";
import Switch from "react-bootstrap/esm/Switch";
import { addTodo, clearCompleted } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  addTask = (event) => {
    if (event.keyCode === 13) {
      this.props.addTodo(this.state.input);
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input
            className="new-todo"
            name="input"
            value={this.state.input}
            onChange={(e) => this.updateInput(e.target.value)}
            onKeyDown={this.addTask}
            placeholder="Add to Todo list"
            autoFocus
          />
        </header>

        <Switch>
          <Route exact path="/" render={(props) => <TodoList {...props} todo={this.props.todo.todo} />} />

          <Route
            path="/active"
            render={(props) => <TodoList {...props} todo={this.props.todo.todo.filter((todo) => !todo.completed)} />}
          />
          <Route
            path="/completed"
            render={(props) => <TodoList {...props} todo={this.props.todo.todo.filter((todo) => todo.completed)} />}
          />
        </Switch>

        <footer className="footer">
          <span className="todo-count">
            <strong>{this.props.todo.todo.filter((todo) => !todo.completed).length}</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>

          <button className="clear-completed" onClick={this.props.clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  clearCompleted: () => dispatch(clearCompleted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
