import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand bg-dark navbar-dark font-header">
                <Link to='/' className="navbar-brand">TwentyFiveOfUs</Link>
                    <div className="navbar-nav ml-auto">
                        <Link to='/about' className="nav-link">О нас</Link>
                        <Link to='/delivery' className="nav-link">Доставка</Link>
                        <Link to='/cart' className="nav-lin center-align mt-2 tomato"><i className="fas fa-shopping-cart "></i></Link>
                    </div>
            </nav>
        )
    }
}
export default NavBar