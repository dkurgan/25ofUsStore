import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class CartList extends React.Component{
    EmptyCart = () =>{
        return(
            <div className="container center-align">
              <h3>  К сожалению ваша корзина пуста:(</h3>
            </div>
        )
    }
    render(){
        let addedItems = this.props.items.length;
        let ItemList = 
            (  
                this.props.items.map(item=>{
                    return(
                        < div key={item.id} className = "col-sm-6 mt-3 card" >
                <img className="card-img-top" src={item.img} alt="hoodie" />
                <div className="card-body">
                    <p>Количество: {item.quantity}</p>
                </div>
                </div>
                    )
                })
            )
            console.log(this.props.total)
           const returnValue = (
               <div>
                <div className="text-center row m-1">
            {ItemList}
            </div>
            <div className="center-align">
            <p>Total: {this.props.total} рублей</p>
            <Link to='/' className="btn btn-danger mt-2 mb-2"><i className="fas fa-shopping-cart"></i>Оформить</Link>
            </div>
            </div>
        )
       return(
           <div>
            {addedItems ? returnValue : this.EmptyCart()}
            </div>
       )
    }
}

const mapStateToProps = state =>{
    return {
        items: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(CartList)