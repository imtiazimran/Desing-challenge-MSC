import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import WantToJoin from '../WantToJoin/WantToJoin';
import Promote from '../Promotion/Promote';

const Home = () => {
    return (
        <div>
            <Header/>
            <WantToJoin/>
            <Promote/>
        </div>
    );
};

export default Home;