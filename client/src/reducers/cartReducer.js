import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";
import hoodieOne from '../images/hoodie25.JPG';
import tshirt from '../images/t-shirt.JPG';
import bluzka from '../images/wtf.JPG';

const initState = [];

 const itemsPool =[
    {id: 1, title: "Black hoodie", desc: "Top hoodie for everyone", price: 3200, src: hoodieOne},
    {id: 2, title: "White hoodie", desc: "Top hoodie for everyone", price: 3200, src: tshirt},
    {id: 3, title: "Black pants", desc: "Top pants for everyone", price: 2400, src: bluzka},
    {id: 4, title: "White pants", desc: "Top pants for everyone", price: 2400, src: bluzka},
]

const cartReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_ITEM:
            let item = itemsPool.find(item => item.id === payload.id);
            item.size = payload.size;
            item.uid = payload.uid;
            return [...state, item];
        case REMOVE_ITEM:
            console.log(state, payload.uid)
            return state.filter(item => 
             item.uid
             !== payload.uid);
        default:
            return state;
    }
}

export default cartReducer