import React,{Component} from 'react';

export default class TodoItem extends Component{
    render(){
        const {title, handleEdit, handleDelete} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{title}</h6>
            <div className="todo-icon">
            <span className="mx-2 text-sucess" onClick={handleEdit}>
            <button className="btn btn-info">Edit</button>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
            <button className="btn btn-danger">Delete</button>
            </span>
            </div>
            </li>
            )
    }
}
