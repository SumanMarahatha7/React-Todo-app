import React,{Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
    render(){
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return(
            <section>
            <ul className="list-group" style={{marginTop: "80px"}}>
            <h3 className="text-capitalize text-center">todo list</h3>
            {items.map(item => {
                return(
                <TodoItem
                key = {item.id}
                title = {item.title}
                handleDelete = {() => handleDelete(item.id)}
                handleEdit = {() => handleEdit(item.id)}
                />
                )
            } )}

            </ul>
            <center><button style={{marginTop:"40px"}} type = "button" className="btn btn-danger" onClick={clearList}>Clear List</button></center>

            </section>
            )
    }
}
