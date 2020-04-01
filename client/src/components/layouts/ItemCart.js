import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';
import Alert from '../Alert';
import { setAlert } from '../../actions/alert';

class ItemCard extends React.Component{
    state = {size: null}
    handeleSize = event => {
        event.preventDefault();
        this.setState({ size: event.target.value });
    }
    addCart = id => {
        if (this.state.size != null) {
            this.props.addToCart(id, this.state.size);
            this.props.setAlert(`Размер: ${this.state.size} был добавлен в корзину`
                , "green");
            this.setState({ size: null });
            setTimeout(()=> document.getElementById(id).value = "", 500)
        }
        else
            this.props.setAlert("Выберите размер!", "red");
    }
    render() {
        let ItemList = this.props.items.map((item) => {
            return (
                <div key={item.id} className="ui centered card">
                    <div className="image">
                        <img alt={item.desc} src={item.src} />
                    </div>
                    <div className='ui grid'>
                        <div className="nine wide column">
                            <select id={item.id} onChange={(e) => this.handeleSize(e)} className="ui dropdown">
                                <option value="">Size</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </div>
                        <div className="six wide column">
                            <button onClick={(e) => this.addCart(item.id)} className="ui positive basic button cartBtn">
                                Купить <i className="shopping cart icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        {item.desc}
                        <h5>Price: {item.price} рубляу</h5>
                    </div>
                    {this.props.alert ? <Alert /> : null}
                </div>
            )
        })
        return (
            <div className="container">
                {ItemList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items,
        alert: state.alert
    }
}

export default connect(mapStateToProps, {addToCart, setAlert})(ItemCard);