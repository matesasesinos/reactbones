import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
/* componentes */
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import Footer from '../components/Footer';
/* hooks */
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
    const initialState = useInitialState(API);
    
    return initialState.length === 0 ? <h1>Cargando...</h1> : (
        <div className="app">
            <Header />
            <Search />
            {initialState.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                    {initialState.mylist.map(item =>
                        <Carouselitem key={item.id} {...item} />
                    )}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <Carouselitem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel>
                {initialState.originals.map(item =>
                        <Carouselitem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
}

export default App;