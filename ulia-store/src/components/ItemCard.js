import React from 'react';
// import './NavBar.css';
import itemPhoto from '../hoodie_1.jpeg'

const ItemCard = () => {
    const fake = [0, 1, 2, 3];
    const item = fake.map((item) => {
        return (
            < div className = "col-sm-6 mt-3 card" >
                <img className="card-img-top" src={itemPhoto} alt="hoodie" />
                <div className="card-body">
                    <p>Топчик худи для всех</p>
                    <submit className="btn btn-light">S</submit>
                    <submit className="btn btn-light">M</submit>
                    <submit className="btn btn-light">L</submit>
                </div>
                <a href="#" className="btn btn-danger mt-2 mb-2"><i className="fas fa-shopping-cart"></i> В корзину</a>
                </div>
        )
    });
    return  < div className="text-center row m-1" style={{ padding: 30 }}>{item}</div>
}

export default ItemCard