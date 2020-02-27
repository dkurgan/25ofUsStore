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
    total: null
}

const cartReducer= (state = initState,action)=>{
   
    if(action.type === 'ITEM_SELECTED'){
          let addedItem = state.items.find(item=> item.id === action.id)

          //Check if item already in cart

         let itemInCart = state.addedItems.find(item=> action.id === item.id)
         if(itemInCart){
            addedItem.quantity += 1 
             return{ ...state, total: state.total + addedItem.price }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            const newTotal = state.total + addedItem.price
            return { 
                ...state, 
                addedItems: [...state.addedItems, addedItem], 
                total: newTotal
            }
        }
    }
        return state;
  }

  export default cartReducer