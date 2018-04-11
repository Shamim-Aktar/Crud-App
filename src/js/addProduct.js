import React from 'react'
import ReactDOM from 'react-dom'

import  '../css/style.css'
class  AddItem  extends React.Component
{
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault();
        //console.log(this.nameInput.value, this.priceInput.value)
        this.props.onAdd(this.nameInput.value, this.priceInput.value);
        this.nameInput.value= '';
        this.priceInput.value='';
    }

    render(){
       
             return(
                <div>
                    <form onSubmit={this.onSubmit}>
                    <h3>Add Mobile Brands</h3>
                    <input placeholder="product name" ref={nameInput=>
                        this.nameInput=nameInput}/>
                    <input placeholder="price" ref={priceInput=>
                        this.priceInput=priceInput}/>
                    <button>Add product</button>
                    <hr/>
                    </form>
                </div>
             )
               
            }
        }
        export default AddItem   
