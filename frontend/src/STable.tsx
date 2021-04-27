import { ReactElement, useState } from "react"
import { StockInfo } from './StockInfo';
import AddStock from './AddStock';
import FavoriteStock from './FavoriteStock';
import SellStock from "./SellStock";

type StockRowProps = {
  readonly stock: StockInfo;
  readonly stocks: StockInfo[];
  readonly callback: React.Dispatch<StockInfo[]>;
};

const StockRow = ({ stock, stocks, callback }: StockRowProps) => {
  const [currstock, setCurrstock] = useState<StockInfo>(stock);
  const [currstocks, setCurrstocks] = useState<StockInfo[]>(stocks);

  const changeStock = (s: StockInfo) => {
    callback(currstocks);
    let indx: number = 0;
    for (let i = 0; i < currstocks.length; i++) {
      if (currstocks[i].name === s.name) {
        indx = i;
      }
    }
    // let filtered: StockInfo[] = [];
    // filtered[indx] = stock;
    let filtered: StockInfo[] = [...currstocks.slice(0, indx), s, ...currstocks.slice(indx + 1)];
    // let filtered: StockInfo[] = currstocks.filter(s => s.name !== stock.name);
    // const return_stocks: StockInfo[] = [...filtered, stock];
    setCurrstock(s);
    setCurrstocks(filtered);


    // set sum in here, so every time you add or subtract you know, then callback to 
    // stock table, where the sum resides and directly pass in a number



  }
  const name = currstock.favorite ? (
    currstock.name
  ) : (
    <span style={{ color: 'red' }}>{currstock.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{currstock.price}</td>
      <td>{currstock.num_shares}</td>
      <td>{parseFloat((currstock.price * currstock.num_shares).toFixed(2))}</td>
      <td><AddStock stock={currstock} callback={changeStock} /></td>
      <td><SellStock stock={currstock} callback={changeStock} /></td>
      <td><FavoriteStock stock={currstock} callback={changeStock} /></td>
    </tr>
  );
};

type Props = {
  readonly stocks: StockInfo[];
  readonly filterText: string;
  readonly favoriteOnly: boolean;
  readonly descending: boolean;
  readonly callback: React.Dispatch<StockInfo[]>;
}

const StockTable = ({ stocks, filterText, favoriteOnly, descending, callback }: Props) => {
  const rows: ReactElement[] = [];

  let [currstocks, setCurrstocks] = useState<StockInfo[]>(stocks);
  let return_stocks: StockInfo[] = stocks;

  const changeStocks = (ss: StockInfo[]) => {
    setCurrstocks(ss);
    callback(ss);
  }

  if (descending === false) {
    return_stocks = currstocks.sort((a, b) => (a.price * a.num_shares) - (b.price * b.num_shares));
    return_stocks.forEach((stock) => {
      if (stock.name.indexOf(filterText) === -1) return;
      if (favoriteOnly && !stock.favorite) return;
      rows.push(<StockRow key={stock.name} stock={stock} stocks={currstocks} callback={changeStocks} />);
    })
  } else {
    return_stocks = currstocks.sort((a, b) => (b.price * b.num_shares) - (a.price * a.num_shares));
    return_stocks.forEach((stock) => {
      if (stock.name.indexOf(filterText) === -1) return;
      if (favoriteOnly && !stock.favorite) return;
      rows.push(<StockRow key={stock.name} stock={stock} stocks={currstocks} callback={changeStocks} />);
    })
  }

  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Holdings (# shares)</th>
          <th>Holdings ($)</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>

  )
}

export default StockTable