import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../action'


const ItemCard = props =>{
    const itemList = props.items.map(item=>{
        return(
            <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.desc}/>
                        <span to="/" className="btn-floating halfway-fab red" onClick={()=>{ props.addToCart(item.id); 
                        alert("item aded")}}><i className="fas fa-shopping-cart"></i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Прайс: {item.price} rub</b></p>
                    </div>
             </div>
        )
    })
    return(
        <div className="container">
            <div className="box center-align" style={{marginTop: 80}}>
                {itemList}
            </div>
        </div>
    )
}

const mapPropToState = (state) =>{
    console.log(state)
    return {
        items: state.items
    }
}
export default connect(mapPropToState, {addToCart: addToCart})(ItemCard)