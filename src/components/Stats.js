import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Stats = ({ todos }) => {

    let completed = 0;
    let pending = 0;
    const totalTasks = todos.length;
    todos.forEach( todo => todo.completed ? completed++ : pending++);

    return (
        <div style={divStyle}>
            <ul className='stats' style={uiStyle}>
                <li style={liStyle}>
                    <span>Tasks</span>
                    &nbsp;
                    <span style={{backgroundColor:'black', color: 'white', borderRadius: '35%', padding: '5px 10px'}}>{totalTasks}</span>
                </li>
                <li  style={liStyle}>
                    <span>Completed</span>
                    &nbsp;
                    <span style={{backgroundColor:'green', color: 'white', borderRadius: '35%', padding: '5px 10px'}}>{completed}</span>
                </li>
                <li  style={liStyle}>
                    <span>Pending</span>
                    &nbsp;
                    <span style={{backgroundColor:'red', color: 'white', borderRadius: '35%', padding: '5px 10px'}}>{pending}</span>
                </li>
            </ul>
        </div>
    )
}

const divStyle = {
    padding: '10px',
    backgroundColor: '#D6D1C2',
    borderRadius: '0 0 15px 15px'
}

const uiStyle = {
    display: 'flex',
    justifyContent: 'space-between',

}
const liStyle = {
    flex: '1',
    borderStyle: 'none',
    listStyle: 'none',
    backgroundColor: '#D6D1C2',
    height: '2rem',
}
Stats.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default Stats;
