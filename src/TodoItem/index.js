import React, { useEffect, useState } from 'react';
import './TodoItem.css';
import Skeleton from 'react-loading-skeleton';

import { BiBadgeCheck, BiXCircle } from "react-icons/bi";

function TodoItem(props) {

  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 1000);
  }, [])
  

  if(load === true) {
    return (
      <li className="TodoItem">
        <BiBadgeCheck
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        >
          √
        </BiBadgeCheck>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <BiXCircle
          className="Icon Icon-delete"
          onClick={props.onDelete}
        >
          X
        </BiXCircle>
      </li>
    );
  } else {
    return (
      <li className="TodoItem-skeleton" animation="wave" duration={0.1} >
        <Skeleton
          duration={0.1}
          className="Icon Icon-check"
        >
        </Skeleton>
        <p className="TodoItem-p-skeleton">
          
        </p>
        <Skeleton duration={0.1}
          className="Icon Icon-delete"
        >
        </Skeleton>
      </li>
    );
  }
}

export { TodoItem };
