import React from 'react';
import StockScreen from './StockScreen';

export type StockInfo = {
    readonly name: string,
    readonly price: number,
    readonly favorite: boolean,
    readonly num_shares: number
}

const StockData = () => {
    return (
        <div>
            Stock Information
            {/* <StockScreen stock={} /> need backend */}

        </div>
    )
}

export default StockData;