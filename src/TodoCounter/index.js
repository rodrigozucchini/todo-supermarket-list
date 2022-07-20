import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter">🛒 Has encontrado {completedTodos} de {totalTodos} {totalTodos === 1 ? "producto en el Supermercado🛒": "productos en el Supermercado🛒"}</h2>
  );
}

export { TodoCounter };
