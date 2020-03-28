import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem } from '../../action/index'
class CartList extends React.Component {
    EmptyCart = () => {
        return (
            <div className="container center-align">
                <h3>  К сожалению ваша корзина пуста:(</h3>
            </div>
        )
    }
    deleteItem = index => {
        console.log(index);
        this.props.removeItem(index);
    }
    render() {
        let addedItems = null;
        if (this.props.items) {
            addedItems = this.props.items.length;
            console.log(this.props.items, "Puhovik")
            let ItemList =
                (
                    this.props.items.map((item, index) => {
                        console.log(item)
                        return (
                            <div className="card">
                                <div className="ui huge horizontal divided list">
                                    <div key={item.id} className="item" >
                                        <img className="ui image" src={item.img} alt="hoodie" />
                                    </div>
                                    <div className="item">
                                        <p>Размер: {item.size}</p>
                                    </div>
                                    <div className="item">
                                        <p>Бабки: {item.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => this.deleteItem(item.id)}
                                    style={{ flex: 1, marginLeft: 3, marginBottom: 3 }}
                                    className="ui negative basic button">Удалить</button>
                            </div>
                        )
                    })
                )
             this.returnValue = (
                <div>
                    <div className="container">
                        <div className="">
                            {ItemList}
                        </div>
                    </div>
                    <div className="center-align">
                        <p>Total: {this.props.total} рублей</p>
                        <Link to='/' className="btn btn-danger mt-2 mb-2"><i className="fas fa-shopping-cart"></i>Оформить</Link>
                    </div>
                </div>
            )
        }
        else {
            this.EmptyCart();
        }
        return (
            <div>
                {addedItems ? this.returnValue : this.EmptyCart()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.addedItems,
        total: state.cart.total,
    }
}

export default connect(mapStateToProps, {removeItem})(CartList)