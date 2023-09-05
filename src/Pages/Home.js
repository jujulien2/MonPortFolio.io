import React from 'react';
import Loader from '../Components/Loader/Loader';
import MyName from '../Components/MyName/MyName';
import '../styles/Home/Home.css'
import Header from '../Components/Header/Header';

const Home = () => {
    return (
        <div className='homeWrapper'>
            <Header />
            <Loader />
            <MyName />
        </div>


    );
};

export default Home;