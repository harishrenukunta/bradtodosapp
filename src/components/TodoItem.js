import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ todo, changeTaskStatus, removeTask }) => {
    const {id, title, completed} = todo;

    const onChange = e => {
        changeTaskStatus(id, !completed ); 
    }

    const deleteTask = () => removeTask( id );

    return (
        <li>
            <input 
                type='checkbox' 
                name='taskStatus' 
                onChange={onChange}/>
            <span>{ title }</span>
            <button onClick={ deleteTask }>X</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    changeTaskStatus: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
}

export default TodoItem
