import React,{Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
    render(){
        return(
            <section>
            <h1>Hello from Todo List</h1>
            <TodoItem />
            </section>
            )
    }
}
