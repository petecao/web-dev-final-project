import React from 'react';
import StockScreen from './StockScreen';

export type StockInfo = {
    readonly name: string,
    readonly price: number,
    readonly favorite: boolean,
    readonly num_shares: number
}

const StockInfo = () => {
    return (
        <div>
            Stock Information
            {/* <StockScreen stock={} /> need backend */}

        </div>
    )
}

export default StockInfo;