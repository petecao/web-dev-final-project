import { useState } from 'react';
import { StockInfo } from './StockInfo';
import FavoriteStock from './FavoriteStock';

const StockScreen = (stock: StockInfo) => {
  const [currstock, setCurrstock] = useState<StockInfo>(stock);

  const changeStock = (s: StockInfo) => {
    setCurrstock(s);
  }

  const name = stock.favorite ? (
    stock.name
  ) : (
    <span style={{ color: 'red' }}>{stock.name}</span>
  );

  return (
    <div>
      Name: {name}
      Price: {stock.price}
      <FavoriteStock stock={currstock} callback={changeStock} />
    </div>
  )
}

export default StockScreen
