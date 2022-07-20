import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal, openModal}) {
  const onClickButton = () => {
    setOpenModal(!openModal);
  };
  
  return (
    <button
      className={openModal === true ? "CreateTodoButtonTrue" : "CreateTodoButtonFalse"}
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
