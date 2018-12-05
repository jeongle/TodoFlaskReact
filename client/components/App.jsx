import React from 'react';
import axios from 'axios';
import TodoForm from './TodoForm.jsx';
import Todo from './Todo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currTodo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({currTodo: e.target.value})
  }

  handleSubmit(e) {
    if (!!this.state.currTodo) {
      axios.post('/Todos', {
        'task': this.state.currTodo,
      })
      .then(axios.get('/Todos')
        .then(res => this.setState({todos: res.data}))
      )
      .catch(err => console.log(err))
    }
    e.preventDefault();
  }

  render() {
    let todos;
    if (this.state.todos.length > 0) {
      todos = this.state.todos.map(todo => {
        return <Todo
          task={todo.task}
        />
      })
    }
    return(
      <div>
        <TodoForm
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
        />
        {todos}
      </div>
    )
  }
}

export default App;