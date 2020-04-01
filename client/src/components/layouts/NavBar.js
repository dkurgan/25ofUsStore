import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends React.Component{
    render(){
        return (
            <nav className="ui menu navPos">
                <Link to='/' className="header item fonts-header">TwentyFiveOfUs</Link>
                <div className="right menu fonts-body">
                        <Link to='/about' className="item">О нас</Link>
                        <Link to='/delivery' className="item">Доставка</Link>
                        <Link to='/cart' className="item basket"><i className="large shopping basket icon"></i></Link>
                    {/* <Link to='/cart' className="nav-link counter">{counter}</Link> */}
                    </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: null
    }
}

export default connect(mapStateToProps)(NavBar);