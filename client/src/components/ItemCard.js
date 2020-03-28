import React from 'react';
import { connect } from 'react-redux';
import {addToCart, setAlert} from '../action'
import Alert from './layouts/Alert';

class ItemCard extends React.Component{
    state = { size: null }
    handleClick = id => {
        if (this.state.size) {
            this.props.addToCart(id, this.state.size);
            this.props.setAlert("Товар добавлен", 'success');
        }
        else {
            this.props.setAlert("Выберете размер", 'danger');
        }
    }
    handleItem = e => {
        this.setState({size: e.target.value})
        console.log(this.state);
    }
    render() {
        const {items, alert} = this.props
        const itemList = items.map(item=>{
            return (
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.desc}/>
                        <span to="/" className="btn-floating halfway-fab red" onClick={() => {
                            this.handleClick(item.id);
                        }}>
                                <i className="fas fa-shopping-cart"></i></span>
                    </div>
                    <div className="extra-content">
                            <select onChange={(e)=> this.handleItem(e)} className="ui dropdown">
                                <option value="">Size</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                            </div>
                    <div className="card-content">
                        <p>{item.desc}</p>
                            <h4>Прайс: {item.price} rub</h4>
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
        items: state.cart.items,
        alert: state.alert
    }
}
export default connect(mapStateToProps, {addToCart,setAlert})(ItemCard)