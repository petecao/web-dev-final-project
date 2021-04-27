import React from 'react';

export type StockInfo = {
    readonly name: string,
    readonly price: number,
    readonly favorite: boolean,
    readonly num_shares: number
  }
  
const StockInfo = () => {
    return(
        <div>
            StockInfo
        </div>
    )
}

export default StockInfo;