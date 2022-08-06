import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter({name, setName}) {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter">🛒 Hola {name} has encontrado {completedTodos} de {totalTodos} {totalTodos === 1 ? "producto en el Supermercado🛒": "productos en el Supermercado🛒"}</h2>
  );
}

export { TodoCounter };
