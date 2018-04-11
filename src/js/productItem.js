import React from 'react'
import  '../css/style.css'
class  ProductItems  extends React.Component
 {
    constructor(props){
        super(props);
        this.state={isEdit:false}
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);
        this.onDelete=this.onDelete.bind(this);
    }
    onDelete(){
        const {onDelete,name}=this.props;
        this.props.onDelete(name);
    }
    onEdit(){
        this.setState({isEdit:true})
       
    }

    onEditSubmit(e){
        e.preventDefault();
        this.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name)
        this.setState({isEdit:false})
    }
    render(){
        const {name, price}=this.props;
             return(
                <div>
                    {
                        this.state.isEdit ?
                        (
                            <form onSubmit={this.onEditSubmit}>
                    <input placeholder="product name" ref={nameInput=>
                        this.nameInput=nameInput} defaultValue={name}/>
                    <input placeholder="price" ref={priceInput=>
                        this.priceInput=priceInput} defaultValue={price}/>
                    <button>Save</button>
                            </form>
                        ):
                        (
                            <div>
                            <span>{name}</span>
                            <span>{price}</span>
                            <button className="editButton" onClick={this.onEdit}>Edit</button>
                            <button className="deleteButton" onClick={this.onDelete}>Delete</button>
                        </div>
                        )
                    }
                   
                </div>
             )
               
            }
        }
        export default ProductItems   
