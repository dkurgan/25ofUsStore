import hoodieOne from '../images/hoodie25.JPG';
import tshirt from '../images/t-shirt.JPG';
import bluzka from '../images/wtf.JPG';
import hoodie from '../images/hoodie_1.jpeg'

const initState= {
    items: [
        {id: 1, title: "Black hoodie", desc: "Top hoodie for everyone", price: 3200, src: hoodieOne},
        {id: 2, title: "White hoodie", desc: "Top hoodie for everyone", price: 3200, src: tshirt},
        {id: 3, title: "Black pants", desc: "Top pants for everyone", price: 2400, src: bluzka},
        {id: 4, title: "White pants", desc: "Top pants for everyone", price: 2400, src: hoodie},
    ]
}

const itemReducer = (state = initState) => {
            return state;
}

export default itemReducer;