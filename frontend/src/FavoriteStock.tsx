import { StockInfo } from './StockInfo';
import React from 'react';

type Props = {
  readonly stock: StockInfo,
  readonly callback: React.Dispatch<StockInfo>;
  // readonly callback: React.Dispatch<React.SetStateAction<StockInfo>>;
}

const FavoriteStock = ({ stock, callback }: Props) => {
  const favoriteStock = ({ name, price, favorite, num_shares }: StockInfo) => {
    callback({ name: name, price: price, favorite: !favorite, num_shares: num_shares })
  }
  return (
    <button onClick={() => favoriteStock(stock)} > Watch/Unwatch </button >
  )
}

export default FavoriteStock;
