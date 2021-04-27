import { StockInfo } from './StockInfo';
import React from 'react';

type Props = {
  readonly stock: StockInfo,
  readonly callback: React.Dispatch<React.SetStateAction<StockInfo>>;
}

const AddStock = ({ stock, callback }: Props) => {
  const addStock = ({ name, price, favorite, num_shares }: StockInfo) => {
    callback({ name: name, price: price, favorite: favorite, num_shares: num_shares + 1 })
  }
  return (
    <button onClick={() => addStock(stock)} > Add one share </button >
  )
}

export default AddStock;

