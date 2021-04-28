import React from 'react';
import HomeTable from './HomeTable'

const STOCKS = [
    {
        name: 'stock1',
        price: 3.28,
        favorite: false,
        num_shares: 0
    },
    {
        name: 'stock2',
        price: 5.63,
        favorite: true,
        num_shares: 10
    },
    {
        name: 'stock3',
        price: 1,
        favorite: false,
        num_shares: 0
    },
    {
        name: 'stock4',
        price: 100,
        favorite: true,
        num_shares: 5
    }
]

const Home = () => {
    return (
        <div>
            Home
            <br />
            <HomeTable stocks={STOCKS} />
        </div>
    )
}

export default Home;