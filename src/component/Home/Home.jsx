import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import IconicHero from './IconicHero';
import WomanHeros from './WomanHeros';
import ReactTab from './ReactTab';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <>
            <Banner></Banner>
            <ReactTab></ReactTab>
            <IconicHero></IconicHero>
            <Gallery></Gallery>
            <WomanHeros></WomanHeros>
        </>

    );
};

export default Home;