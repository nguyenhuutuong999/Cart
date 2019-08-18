import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './container/ProductContainer';
import CartContainer from './container/CartContainer';
import MessageContainer from './container/MessageContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;
