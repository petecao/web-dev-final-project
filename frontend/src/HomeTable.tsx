import { ReactElement, useState } from "react"
import { StockInfo } from './StockInfo';

type StockRowProps = {
  readonly stock: StockInfo;
};

const StockRow = ({ stock }: StockRowProps) => {

  return (
    <tr>
      <td>{stock.name}</td>
      <td>{stock.price}</td>
    </tr>
  );
};

type Props = {
  readonly stocks: StockInfo[];
}

const HomeTable = ({ stocks }: Props) => {
  const rows: ReactElement[] = [];
  stocks.forEach((stock) => {
    rows.push(<StockRow key={stock.name} stock={stock} />);
  })

  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>

  )
};

export default HomeTable;