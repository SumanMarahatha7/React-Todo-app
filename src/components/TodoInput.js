import React,{Component} from 'react';

export default class TodoInput extends Component{
    render(){
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return(
            <form onSubmit= {handleSubmit} style={{marginTop: "20px"}}>
            <div className="input-group input-group-lg">
            <div className="input-group-prepend">
            <span className="input-group-text" style={{color: "blue"}} id="inputGroup-sizing-lg"><i className="fa fa-address-book" aria-hidden="true" /></span>
            </div>
            <input type="text" placeholder="Enter your activity" onChange={handleChange} value={item} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            <button type="submit" disabled={item.length>0?false:true} className={editItem?"btn btn-success text-uppercase":"btn btn-primary text-uppercase"} style={{ marginLeft: "20px"}} onClick={handleSubmit}>{editItem?'edit item':'add item'}</button>
            </div>
            </form>
            )
    }
}
