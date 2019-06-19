import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, update, deleteTodo }) => (
  <div>
    {
      todos.map( todo =>
          <Todo 
          key={todo.id}
          {...todo}
          update={update}
          deleteTodo={deleteTodo}
          />
        )
    }
  </div>
)

export default TodoList;