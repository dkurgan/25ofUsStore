import { combineReducers } from 'redux';
import items from './itemReducer';
import cart from './cartReducer';
import alert from './alertReducer';
import delivery from './deliveryReducer';

export default combineReducers({
    items,
    cart,
    alert,
    delivery
})