import React from 'react';

const TodoForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <label>
        ENTER TODO
        <input type="text" onChange={props.onChange}></input>
      </label>
      <input type="submit" value="submit"/>
    </form>
  )
}

export default TodoForm;