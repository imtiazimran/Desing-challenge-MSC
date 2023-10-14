import React from 'react';
import Header from '../Header/Header';
import WantToJoin from '../WantToJoin/WantToJoin';
import Promote from '../Promotion/Promote';

const Home = () => {
    return (
        <div className='w-11/12 md:w-full mx-auto'>
            <Header/>
            <WantToJoin/>
            <Promote/>
        </div>
    );
};

export default Home;