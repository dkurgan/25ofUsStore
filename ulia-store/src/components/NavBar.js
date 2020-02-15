import React from 'react';

class NavBar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand fonts">TwentyFiveOfUs</a>
                    <div className="navbar-nav ml-auto">
                        <div className="nav-link">О нас</div>
                        <div className="nav-link">Доставка</div>
                    </div>
            </nav>
        )
    }
}
export default NavBar