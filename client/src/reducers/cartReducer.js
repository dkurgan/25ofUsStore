import hoodieOne from '../images/hoodie_1.jpeg';
import hoodieTwo from '../images/hoodie_2.jpeg';
import pantsOne from '../images/pants_1.jpeg';
import { ITEM_DELETE, ITEM_SELECTED } from '../action/types';

const initState= {
    items: [
        {id: 1, title: "Black hoodie", desc: "Top hoodie for everyone", price: 3200, img: hoodieOne},
        {id: 2, title: "White hoodie", desc: "Top hoodie for everyone", price: 3200, img: hoodieTwo},
        {id: 3, title: "Black pants", desc: "Top pants for everyone", price: 2400, img: pantsOne},
        {id: 4, title: "White pants", desc: "Top pants for everyone", price: 2400, img: pantsOne},
    ],
    addedItems: [],
    total: null,
}



const cartReducer = (state = initState, action) => {
    console.log(state)
    if (action.type === ITEM_SELECTED) {
        let addedItem = state.items.find(item => item.id === action.payload.id)
          //Check if item already in cart
         let itemInCart = state.addedItems.find(item=> action.id === item.id)
         if(itemInCart){
             addedItem.quantity += 1;
             return {
                 ...state,
                 total: state.total + addedItem.price,

             }
         }
         else{
            addedItem.quantity = 1;
            //calculating the total
             const newTotal = state.total + addedItem.price;
            return { 
                ...state, 
                addedItems: [...state.addedItems, {
                    id: action.payload.id,
                    size: action.payload.size,
                    img: addedItem.img,
                    price: addedItem.price
                }], 
                total: newTotal,
            }
        }
    }
    else if (action.type === ITEM_DELETE) {
        let itemInCart = state.addedItems.find(item => action.payload.index=== item.id)
        if (itemInCart) {
          return  state.addedItems.filter(item => item.id !== action.payload.index);
        }
    }
        return state;
  }

  export default cartReducer