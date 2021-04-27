// import { useState } from 'react';
// import { StockInfo } from './StockInfo';
// import { StockList } from './StockList';
// import FavoriteStock from './FavoriteStock';
// import AddStock from './AddStock';

// type Props = {
//   readonly stock: StockInfo,
//   readonly callback: React.Dispatch<React.SetStateAction<StockInfo>>;
// }

// const BuyStocks = ({ stock, callback }: Props) => {
//   const [stockToBuy, setStockToBuy] = useState<StockInfo>(stock)

//   const updateStock = (stock: StockInfo) => {
//     setStockToBuy(stock);
//     callback({ stock });
//   }

//   const DisplayStock = ({ name, price, favorite, num_shares }: StockInfo) => (
//     <div>
//       <li>{name}  {price}  {num_shares}</li>
//     </div>
//   )

//   return (
//     <div>
//       <DisplayStock {...stockToBuy} />
//       <FavoriteStock stock={stockToBuy} callback={updateStock} />
//       <AddStock stock={stockToBuy} callback={setStockToBuy} />
//     </div>
//   )
// }

// export default BuyStocks;

export { };