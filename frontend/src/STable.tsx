import { ReactElement, useState } from "react"
import { StockInfo } from './StockInfo';
import AddStock from './AddStock';
import FavoriteStock from './FavoriteStock';
import SellStock from "./SellStock";

type StockRowProps = {
  stock: StockInfo;
  stocks: StockInfo[]
};

const StockRow = ({ stock, stocks }: StockRowProps) => {
  const [currstock, setCurrstock] = useState<StockInfo>(stock);
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
      <td>{currstock.price * currstock.num_shares}</td>
      <td><AddStock stock={currstock} callback={setCurrstock} /></td>
      <td><SellStock stock={currstock} callback={setCurrstock} /></td>
      <td><FavoriteStock stock={currstock} callback={setCurrstock} /></td>
    </tr>
  );
};

type Props = {
  readonly stocks: StockInfo[];
  readonly filterText: string;
  readonly favoriteOnly: boolean;
  readonly descending: boolean;
}

const StockTable = ({ stocks, filterText, favoriteOnly, descending }: Props) => {
  const rows: ReactElement[] = [];

  if (descending === false) {
    let asc_stocks: StockInfo[] =
      stocks.sort((a, b) => (a.price * a.num_shares) - (b.price * b.num_shares));
    asc_stocks.forEach((stock) => {
      if (stock.name.indexOf(filterText) === -1) return;
      if (favoriteOnly && !stock.favorite) return;
      rows.push(<StockRow key={stock.name} stock={stock} stocks={stocks} />);
    })
  } else {
    let desc_stocks: StockInfo[] =
      stocks.sort((a, b) => (b.price * b.num_shares) - (a.price * a.num_shares));
    desc_stocks.forEach((stock) => {
      if (stock.name.indexOf(filterText) === -1) return;
      if (favoriteOnly && !stock.favorite) return;
      rows.push(<StockRow key={stock.name} stock={stock} stocks={stocks} />);
    })
  }

  // let sum: number = 0;

  // let sumFunct = function (a: number, b: number) {
  //   return a + b;
  // }

  // stocks.forEach(function (stock) {
  //   sum = sumFunct(sum, stock.price * stock.num_shares);
  // })


  return (
    <div>
      {/* <label > Total Holdings = {sum} </label> */}
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