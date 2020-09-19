import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';


const AddTodoForm = ({ addTask }) => {
    const [ task, setTask ] = useState('');

    const onChange = ( e ) => {
        setTask(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( task.trim() !== ''){
            addTask({
                id: uuid(),
                title: task,
                completed: false
            });   
        }
        setTask('');
    }
    return (
            <form style={{display: 'flex'}} onSubmit={onSubmit}>
                <input 
                    type='text' 
                    value={task} 
                    onChange={onChange} 
                    placeholder='Task desc. here...' 
                    style={{lineHeight: '1.5rem', flex:'10', borderRadius: '60px'}}/>
                <input type='submit' style={{padding:'5px', backgroundColor:'black', color: 'white' , flex: '1'}}/>    

            </form>
                
    )
}

AddTodoForm.propTypes = {
    addTask: PropTypes.func.isRequired,
}

export default AddTodoForm;
