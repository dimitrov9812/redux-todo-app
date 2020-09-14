import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/index';

const AddToDo = ({ dispatch }) => {
    let input;

    const formSubmit = (e) => {
        e.preventDefault();
        if(!input.value.trim()){
            return 
        }
        else{
            dispatch(addToDo(input.value));
            input.value='';
        }
    }
    return(
        <div>
            <form onSubmit={(e) => formSubmit(e)}>
                <input type="text" ref={el => (input = el)} />
                <button type="submit">Add ToDo</button>
            </form>
        </div>
    )
}   

export default connect()(AddToDo);