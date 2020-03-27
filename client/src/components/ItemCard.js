import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../action'
import Alert from './layouts/Alert';

class ItemCard extends React.Component{
    render() {
        const {items, alert} = this.props
        const itemList = items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.desc}/>
                        <span to="/" className="btn-floating halfway-fab red" onClick={() => {
                            this.props.addToCart(item.id, "Товар добавлен", 'success');
                        }}>
                                <i className="fas fa-shopping-cart"></i></span>
                        </div>
    
                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Прайс: {item.price} rub</b></p>
                    </div>
                    {alert ? <Alert/> : null}
                 </div>
            )
        })
    return (
        <div className="container">
            <div className="box center-align" style={{ marginTop: 80 }}>
                {itemList}
            </div>
        </div>
    )
}
}

const mapStateToProps = state => {
    console.log(state, 'UPDAT EBITCH')
    return {
        items: state.items,
        alert: state.alert
    }
}
export default connect(mapStateToProps, {addToCart})(ItemCard)