import React from 'react'
import ReactDOM from 'react-dom'
import ProductItems from './productItem'
import AddItem from './addProduct'

import  '../css/style.css'

const products=[
    {name:"Samsung", price:3000},
    {name:"Micromax",price:2000},
    {name:"Nokia",price:6000 }
    ]
        localStorage.setItem('products',JSON.stringify(products));               

        class App extends React.Component
             {
                constructor(props){
                    super(props);
                    this.state={
                        products:JSON.parse(localStorage.getItem('products'))
                    }
                    this.onAdd=this.onAdd.bind(this);
                    this.onEditSubmit=this.onEditSubmit.bind(this);
                    this.onDelete=this.onDelete.bind(this);
                }
            componentWillMount(){
                const product=this.getProducts();
                this.setState({products});
                }
                getProducts(){
                return this.state.products;
                //console.log(products);
                //this.setState({products})
                }

                onAdd(name, price){
                       // console.log("in add function",name, price);
                       const products=this.getProducts();
                       products.push({
                           name,
                           price
                       });
                       this.setState({products})
                }

                onEditSubmit(name, price, originalName){
                    let products=this.getProducts();
                     products=products.map(product=>{
                        if(product.name===originalName){
                            product.name=name;
                            product.price=price;
                        }
                        return product;
                    })
                    this.setState({products})
                   // console.log(name, price);
                }

                onDelete(name){
                    const products=this.getProducts();
                    const filteredProducts=products.filter(product=>{
                        return product.name!==name;
                    })
                    this.setState({products:filteredProducts})
                    //console.log(filterProducts);

                }
             

                render(){
                    return(
                        <div className="app">
                        <h1>Product Manager</h1>
                        <AddItem onAdd={this.onAdd}/>
                        {
                            this.state.products.map(product=>{
                                return (
                            <ProductItems key={product.name} {...product} 
                            onDelete={this.onDelete}
                            onEditSubmit={this.onEditSubmit}/>
                                );
                            })
                        }
                        </div>
                    )
                }
               
            }
            ReactDOM.render(<App/>,document.getElementById('root'))

