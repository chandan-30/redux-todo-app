import React from 'react'
import '../styles/List.css';

//  redux imports for dispatching the actions
import { useSelector, useDispatch } from "react-redux";

// reducer action logic to check and uncheck todo
import { change, removeFromList } from "../../app/todoList";

// closeicon from material UI library
import CloseIcon from '@mui/icons-material/Close';

// list of todos component

function List() {
    const { todo } = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();

    // checkbox change handler to strike out undo strike out on text
    const changeH = (e) => {
        dispatch(change(e.currentTarget.attributes["name"]));
    };
    
    // get list of todos
    const getList = (arr) => {
        let res = [];
        for (let item in arr) {
          res.push(
            <li key={item}>
              <input
                type="checkbox"
                checked={JSON.parse(String(todo[item]).toLowerCase())}
                onChange={(e) => changeH(e)}
                name={item}
              />
              <span className={
                String(todo[item]) === 'true'?'label strike':'label'
              }>{item}</span>
              <CloseIcon name={item} className='close' onClick={(e) => closeClick(e)}></CloseIcon>
            </li>
          );
        }
        return res;
      };

    // close button click handler to remove respective todo
    const closeClick = (e) => {
        let val = e.currentTarget.attributes["name"].nodeValue;
        sessionStorage.removeItem(val);
        dispatch(removeFromList(val));
    }
  return (
    <>
        <section className='list-cont' data-testid='List-id'>
            <ul>
            {getList(todo)}
            </ul>
        </section>
    </>
  )
}

export default List