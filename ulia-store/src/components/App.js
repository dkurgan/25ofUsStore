import React from 'react';
import NavBar from './NavBar'
import ItemCard from './ItemCard';

class App extends React.Component{
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <ItemCard />
                    </div>
                </div>
        );
    }
}

export default App