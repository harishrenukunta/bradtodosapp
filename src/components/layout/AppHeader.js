import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header>
          <h1>TodoList</h1>  
              <div className='menu'>
              <Link to='/' style={linkStyle}>Home</Link> |
              <Link to='/about' style={linkStyle}>About</Link>
              </div>  
          
          
        </header>
    )
}
const linkStyle = {
    color: '#fff',
    fontSize: '1rem',
    padding: '0 10px',
}
export default AppHeader;
