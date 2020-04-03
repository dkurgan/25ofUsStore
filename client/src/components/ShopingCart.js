import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cart';
import { setAlert } from '../actions/alert';
import Alert from './Alert';
import SubmitForm from './layouts/SubmitForm';

class ShopingCart extends React.Component{
    state = {clicked: false}
    EmptyCart(){
        return (
            <div style={{marginTop: 50}} className="ui center aligned header">
                <h3>  К сожалению ваша корзина пуста:(</h3>
            </div>
        )
    }
    handeleSize = event => {
        event.preventDefault();
        // this.setState({ size: event.target.value });
    }
    handeleDelivery = e => {
        this.setState({clicked: !this.state.clicked})
    }
    removeCart = uid => {
        this.props.removeFromCart(uid);
        this.props.setAlert('Товар удален из корзины', 'green');
    }
    render() {
        let cartList = [];
       this.newTotal = 0;
        if (this.props.addItems) {
            cartList = this.props.addItems.map(item => {
                this.newTotal += item.price;
                let size = "";
                if (item.size === "M") {
                    size = "L";
                } else
                    size = "M";
                return (
                    <div className="item ui centered grid" key={item.uid}>
                        <div className="eight wide column">
                    <img className="List"
                                src={item.src} />
                            </div>
                        <div className="five wide column itemDesc">
                            <h3>Item Name here</h3>
                            <p className=""> Размер:
                        <select onChange={(e) => this.handeleSize(e)} className="ui dropdown">
                                <option value={item.size}>{item.size}</option>
                                <option value={size}>{size}</option>
                        </select> </p> 
                            <p className="">Цена {item.price}</p>
                            <button onClick={(e) => this.removeCart(item.uid)}
                            type="button" className="ui button red">Удалить</button>
                            </div>
                        
                    </div>
                )
            })
        }
        this.clicked = false;
        return (this.props.addItems.length > 0 ?
            <div>
                <div style={{ marginTop: 40 }} className="ui middle aligned divided list">
                {this.props.alert ? <Alert /> : null}
                    {cartList}
                </div>
                <div className="content">
                    <h4> Total: {this.newTotal} денег</h4>
                </div>
                <div className="ui attached message centered grid">
                <div onClick={this.handeleDelivery} className="ui header">
                        Доставка
                </div>
                    {this.state.clicked ? <SubmitForm total={this.newTotal}/> : null}
                </div>
            </div>
             : this.EmptyCart()
        )
    }
}

const mapStateToProps = state => {
    return {
        addItems: state.cart,
        alert: state.alert
    }
}

export default connect(mapStateToProps, {removeFromCart, setAlert})(ShopingCart);