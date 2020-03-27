import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NavBar extends React.Component{
    render() {
        const {counter} = this.props
        return (
            <nav className="navbar navbar-expand bg-dark navbar-dark font-header navPos">
                <Link to='/' className="navbar-brand">TwentyFiveOfUs</Link>
                    <div className="navbar-nav ml-auto">
                        <Link to='/about' className="nav-link">О нас</Link>
                        <Link to='/delivery' className="nav-link">Доставка</Link>
                        <Link to='/cart' className="center-align mt-2 tomato"><i className="fas fa-shopping-cart"></i></Link>
                        <Link to='/cart' className="nav-link counter">{counter}</Link>
                    </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    console.log(state, "Sahdfkalsdfhj");
    return {
        counter: state.addedItems.length
    }
}

export default connect(mapStateToProps)(NavBar)