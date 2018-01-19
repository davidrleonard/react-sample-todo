import React, { Component } from 'react';
import TodoList from './TodoList.js';

/*
 * Used to create unique todo IDs. Read the current value for a new ID then
 * increment by 1.
 */
let todoCounter = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: 'Cool Todo App',
      newTodoName: '',
      todos: []
    };
  }

  newTodoNameChanged(e) {
    this.setState({ newTodoName: e.target.value });
  }

  saveNewTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: todoCounter,
      name: this.state.newTodoName,
      done: false
    };
    todoCounter++;
    const newTodos = this.state.todos.concat([newTodo]);
    this.setState({
      todos: newTodos,
      newTodoName: ''
    });
  }

  markTodoDone(todoId) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        return Object.assign({}, todo, {done: true});
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }

  markTodoUndone(todoId) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        return Object.assign({}, todo, {done: false});
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }

  render() {
    const unfinishedTodos = this.state.todos.filter(todo => !todo.done).length;
    return (
      <div className="App">
        <h1>{this.state.appName}</h1>
        <p>There are {unfinishedTodos} todos left unfinished.</p>
        <div className="new-todo">
          <form onSubmit={this.saveNewTodo.bind(this)}>
            <input type="text" value={this.state.newTodoName} onChange={this.newTodoNameChanged.bind(this)} />
            <input type="submit" value="Save New Todo" />
          </form>
        </div>
        <TodoList
          todos={this.state.todos}
          markTodoDone={this.markTodoDone.bind(this)}
          markTodoUndone={this.markTodoUndone.bind(this)} />
      </div>
    );
  }
}

export default App;
