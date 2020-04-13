import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import './Styles.css';
import ItemCart from './layouts/ItemCart';
import {Footer} from './Footer.jsx';
import About from './About';
import Delivery from './Delivery'
import ShopingCart from './ShopingCart';

class App extends React.Component{
    render() {
        return (
            <HashRouter>
                <NavBar />
                <div className="container">
                    <Switch>
                         <Route exact path='/' component={ItemCart} />
                         <Route exact path='/cart' component={ShopingCart} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/delivery' component={Delivery} />
                    </Switch> 
                </div>
              <Footer/>
            </HashRouter>
        )
    }
}

export default App