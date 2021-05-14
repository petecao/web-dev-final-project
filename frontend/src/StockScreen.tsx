import { useEffect, useState } from 'react';
import { StockInfo, Stock } from './StockInfo';
import FavoriteStock from './FavoriteStock';
import firebase from 'firebase';

type Props = {
  readonly stock: Stock,
}

const StockScreen = ({ stock }: Props) => {
  // const [currstock, setCurrstock] = useState<StockInfo>(stock);

  // const changeStock = (s: StockInfo) => {
  //   setCurrstock(s);
  // }

  // const name = stock.favorite ? (
  //   stock.name
  // ) : (
  //   <span style={{ color: 'red' }}>{stock.name}</span>
  // );

  const addStock = (stock: Stock) => {
    fetch(`/userstocks/${firebase.auth().currentUser?.getIdToken}?name=${stock.name}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    })
  }


  return (
    <div>
      Name: {stock.name}
      Price: {stock.price}
      <button onClick={() => addStock(stock)} > Add to Profile </button >
    </div>
  )
}

export default StockScreen
