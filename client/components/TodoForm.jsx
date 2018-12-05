import React from 'react';
import '../styles/form.css';

const TodoForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <label className="label">
        <div className="label">ENTER TODO</div>
        <input type="text" onChange={props.onChange}></input>
      </label>
      <input type="submit" value="submit"/>
    </form>
  )
}

export default TodoForm;