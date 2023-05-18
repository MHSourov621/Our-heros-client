import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import IconicHero from './IconicHero';
import WomanHeros from './WomanHeros';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <IconicHero></IconicHero>
            <Gallery></Gallery>
            <WomanHeros></WomanHeros>
        </>

    );
};

export default Home;