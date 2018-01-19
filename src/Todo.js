import React, { Component } from 'react';

class Todo extends Component {
  checkboxChanged(e) {
    this.props.onTodoStateChanged(e.target.checked, this.props.id);
  }

  render() {
    return (
      <div className="todo">
        <input type="checkbox" checked={this.props.done} onChange={this.checkboxChanged.bind(this)} />
        {this.props.name}
      </div>
    );
  }
}

export default Todo;
