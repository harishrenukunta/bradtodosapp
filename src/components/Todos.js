import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const Todos = ({todos, changeTaskStatus, removeTask}) => {
    return (
        <Fragment>
            <ul className='todos'>
            {
                todos && todos.map( todo => <TodoItem key={todo.id} todo={todo} changeTaskStatus={changeTaskStatus} removeTask={ removeTask }/>)
            }
            </ul>
        </Fragment>
    )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    changeTaskStatus: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
}

export default Todos;
