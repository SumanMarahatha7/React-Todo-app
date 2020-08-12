import React from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
            <TodoInput />

            <TodoList />
            </React.Fragment>
        );
    }
}



export default App;
