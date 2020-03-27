import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CartList extends React.Component {
    EmptyCart = () => {
        return (
            <div className="container center-align">
                <h3>  К сожалению ваша корзина пуста:(</h3>
            </div>
        )
    }
    render() {
        let addedItems = this.props.items.length;
        let ItemList =
            (
                this.props.items.map(item => {
                    return (
                        <div key={item.id} className="item" >
                            <img className="ui image avatar" src={item.img} alt="hoodie" />
                            <div className="content">
                                <div className="descriprtion">
                                    <p>Количество: {item.quantity}</p>
                                </div>
                                </div>
                                <div className="extra-content">
                            <select className="ui dropdown">
                                <option value="">Size</option>
                                <option value="1">M</option>
                                <option value="0">L</option>
                            </select>
                            </div>
                        </div>
                    )
                })
            )
        console.log(this.props.total)
        const returnValue = (
            <div>
                <div className="text-center row m-1">
                    <div className="ui huge list">
                        {ItemList}
                    </div>
                </div>
                <div className="center-align">
                    <p>Total: {this.props.total} рублей</p>
                    <Link to='/' className="btn btn-danger mt-2 mb-2"><i className="fas fa-shopping-cart"></i>Оформить</Link>
                </div>
            </div>
        )
        return (
            <div>
                {addedItems ? returnValue : this.EmptyCart()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.addedItems,
        total: state.total,
    }
}

export default connect(mapStateToProps)(CartList)