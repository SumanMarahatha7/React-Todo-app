import React from 'react';
import {v1 as uuid} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends React.Component{
    state = {
        items  : [],
        id : uuid(),
        item : '',
        editItem : false
    }

    handleChange = (e) => {
        this.setState({
            item : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id : this.state.id,
            title : this.state.item
        }
        const updatedItems = [...this.state.items,newItem] // mapping into array

    this.setState({
        items : updatedItems,
        item : '',
        id : uuid(),
        editItem : false,
    }, () => {
        console.log(this.state)
    }
    )
    }

    clearList = () => {
        this.setState({
            items : [],
        })
    }

    handleDelete = (id) => {
        const bakiKaam = this.state.items.filter(kaam => kaam.id !== id);
            this.setState({
                items : bakiKaam
            })
    }

    handleEdit = (id) => {
        const bakiKaam = this.state.items.filter(kaam => kaam.id !== id);
        const selectedKaam = this.state.items.find(kaam => kaam.id === id);
        this.setState({
            items : bakiKaam,
            item : selectedKaam.title,
            id : id,
            editItem : true,
        })
    }

    render(){
        return(
            <React.Fragment>
            <div className= "container">
            <div className= "row">
            <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem} />
             <hr />

            <TodoList items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit } />
            </div>
            </div>
            </div>
            </React.Fragment>
        );
    }
}



export default App;
