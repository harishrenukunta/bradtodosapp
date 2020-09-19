import React, { useState, Fragment ,useEffect } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodoForm from './components/AddTodoForm';
import AppHeader from './components/layout/AppHeader';
import Stats from './components/Stats';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect (()=> {
    const fetchData= async () =>{
    try {
        const res = await axios.get('/todos');
        setTodos(res.data);
      } catch (err) {
        console.log('Error when fetching todos' + err.resposne.data);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  const changeTaskStatus = ( id, status) => {
    console.log(`status:${status}`);
    setTodos(todos.map( todo => {
      if(todo.id === id){
        todo.completed = status;
      }
      return todo; 
    }));
  }

  const removeTask =  async (id)  =>  {
    try {
      await axios.delete(`/todos/${id}`);
      setTodos( todos.filter( todo => todo.id !== id));
    } catch (err) {
      console.log('Error when deleting a task with id:', id, 'Error is:', err.response.data); 
    }
    
  }

  const addTask = async ( taskData ) => {
    try{
      const res = await axios.post('/todos', taskData);
      console.dir(res.data);
      setTodos( [ ...todos, res.data ]);
    }catch(err){
      console.log('Error when add task:' + err.response.data);
    }  
  }
  
  return (
    <div className="App">
      <div className='container'>
      <Router>
        <AppHeader />   
          <Switch>
            <Route exact path="/" render={props=>(
              <Fragment>
                 <AddTodoForm addTask={ addTask }/>
                <Todos todos={todos} changeTaskStatus={changeTaskStatus} removeTask={removeTask}/>
                <Stats todos={todos}/>
              </Fragment>
            )}/>
            <Route exact path='/about' component={About}/>
            </Switch>
        </Router>
       
      </div>
    </div>
  );
}

export default App;
