import React, {useState} from 'react';
import {TodoContext} from '../TodoContext/index';
import './TodoForm.css';

export const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState("")


    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

  return (
    <form onSubmit={onSubmit}>
        <label className="form-control">Añade un producto a tu lista</label>
        <textarea 
            className='form-textarea'
            value={newTodoValue}
            placeholder="Ingrese un producto de supermercado a la lista" 
            onChange={onChange}
            />
        <div className="TodoForm-buttonContainer">
        <button
            className="TodoForm-button TodoForm-button--cancel"
            type="button"
            onClick={onCancel}
        >
            Cancelar
        </button>
        <button
            className="TodoForm-button TodoForm-button--add"
            type="submit"
        >
            Añadir
        </button>
        </div>
    </form>
  )
}
