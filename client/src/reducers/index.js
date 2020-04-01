import { combineReducers } from 'redux';
import items from './itemReducer';
import cart from './cartReducer';
import alert from './alertReducer';

export default combineReducers({
    items,
    cart,
    alert
})