import { StockInfo } from './StockInfo';
import React from 'react';

type Props = {
  readonly stock: StockInfo,
  readonly callback: React.Dispatch<StockInfo>;
  // readonly callback: React.Dispatch<React.SetStateAction<StockInfo>>;
}

const SellStock = ({ stock, callback }: Props) => {
  const sellStock = ({ name, price, favorite, num_shares }: StockInfo) => {
    if (num_shares - 1 === -1) {
      return;
    }
    else {
      callback({ name: name, price: price, favorite: favorite, num_shares: num_shares - 1 })
    }

  }
  return (
    <button onClick={() => sellStock(stock)} > Sell one share </button >
  )
}

export default SellStock;
