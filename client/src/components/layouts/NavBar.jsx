import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return (
            <nav className="ui menu navPos">
                <Link to='/' className="header item fonts-header">TwentyFiveOfUs</Link>
                <div className="right menu fonts-body">
                        <Link style={{color: '#777'}} to='/about' className="item">О нас</Link>
                        <Link style={{color: '#777'}} to='/delivery' className="item">Доставка</Link>
                        <Link style={{color: '#777'}} to='/cart' className="item basket"><i className="large shopping basket icon"></i></Link>
                    </div>
            </nav>
        )
    }
}

export default NavBar;