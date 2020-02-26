import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import ItemCard from './ItemCard';
import { Footer } from './Footer';

import About from './layouts/About';
import CartList from './layouts/CartList';
import Delivery from './layouts/Delivery';

import './Style.css';

class App extends React.Component{
    render() {
        return (
            <HashRouter basename='/'>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={ItemCard} />
                        <Route exact path='/cart' component={CartList} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/delivery' component={Delivery} />
                    </Switch> 
                </div>
                <Footer />
            </HashRouter>
        );
    }
}

export default App