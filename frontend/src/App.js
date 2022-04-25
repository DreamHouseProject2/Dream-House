import React from 'react';
import Router from './Router';
import './assets/style.css';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';

function App() {
    return (
        <>
            <Header />
            <Router />
            <Footer />;
        </>
    );
}

export default App;
