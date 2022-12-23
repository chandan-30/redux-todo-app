import React from 'react'
import '../styles/Footer.css';

//  redux imports for dispatching the actions
import { useDispatch } from "react-redux";

// reference hook to refer input element
import { useRef } from "react";

// reducer action logic to add a todo
import { addToList } from "../../app/todoList";

// Footer section component with text input and add button

function Footer() {
    const ref = useRef(null);
    const dispatch = useDispatch();

    // click handler when add button is clicked
    const clickH = () => {
        let val = ref.current.value;
        if (val){
            sessionStorage.setItem(val, false);
            dispatch(addToList(val));
        }
        
      };
    return (
        <>
            <section className='footer' data-testid='Footer-id'>
                <input type="text" ref={ref} placeholder='New Todo'/>
                <button type="button" onClick={clickH}>
                    Add
                </button>
            </section>
        </>
    )
}

export default Footer