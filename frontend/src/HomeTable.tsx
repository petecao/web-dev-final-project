import { ReactElement, useEffect, useState } from "react"
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

const HomeTable = () => {
  const [stocks, setStocks] = useState<StockInfo[]>([]);

  useEffect(() => {
    fetch('/stocks/')
      .then(res => res.json())
      .then(data => {
        setStocks(data);
      })
  }, [stocks])

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