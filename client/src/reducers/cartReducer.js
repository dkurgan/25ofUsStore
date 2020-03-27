import hoodieOne from '../images/hoodie_1.jpeg';
import hoodieTwo from '../images/hoodie_2.jpeg';
import pantsOne from '../images/pants_1.jpeg';


const initState= {
    items: [
        {id: 1, title: "Black hoodie", desc: "Top hoodie for everyone", price: 3200, img: hoodieOne},
        {id: 2, title: "White hoodie", desc: "Top hoodie for everyone", price: 3200, img: hoodieTwo},
        {id: 3, title: "Black pants", desc: "Top pants for everyone", price: 2400, img: pantsOne},
        {id: 4, title: "White pants", desc: "Top pants for everyone", price: 2400, img: pantsOne},
    ],
    addedItems: [],
    total: null,
    alert: []
}

const cartReducer = (state = initState, action) => {
    console.log(state, action)
    if (action.type === 'REMOVE_ALERT') {
        console.log(action, "ebat")
        state.alert.splice(0, 1);
        return state
    }
    else if (action.type === 'ITEM_SELECTED') {
        let addedItem = state.items.find(item => item.id === action.id)
        console.log(addedItem, "suka")
          //Check if item already in cart
         let itemInCart = state.addedItems.find(item=> action.id === item.id)
         if(itemInCart){
             addedItem.quantity += 1;
             return {
                 ...state,
                 total: state.total + addedItem.price,
                 alert: [...state.alert, action.payload]
             }
         }
         else{
            addedItem.quantity = 1;
            //calculating the total
             const newTotal = state.total + addedItem.price;
            return { 
                ...state, 
                addedItems: [...state.addedItems, addedItem], 
                total: newTotal,
                alert: [...state.alert, action.payload]
            }
        }
    }
        return state;
  }

  export default cartReducer