import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
  markTodo(isItDone, todoId) {
    if (isItDone) {
      this.props.markTodoDone(todoId);
    }
    else {
      this.props.markTodoUndone(todoId);
    }
  }

  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map((todo, index) =>
          <Todo name={todo.name} id={todo.id} done={todo.done} onTodoStateChanged={this.markTodo.bind(this)} key={index} />
        )}
      </div>
    );
  }
}

export default TodoList;
