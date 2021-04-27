import { ChangeEvent, useEffect, useState } from 'react';
import { StockInfo } from './StockInfo';
import StockTable from './STable';

type SearchProps = {
  readonly filterText: string;
  readonly favoriteOnly: boolean;
  readonly descending: boolean;
  readonly handleFilterTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly handleCheckBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly handleCheckBoxChange2: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({
  filterText,
  favoriteOnly,
  handleFilterTextChange,
  handleCheckBoxChange,
  descending,
  handleCheckBoxChange2,
}: SearchProps) => (
  <form>
    <input
      type="text"
      placeholder="search here"
      value={filterText}
      onChange={handleFilterTextChange}
    />
    <p>
      <input
        type="checkbox"
        checked={favoriteOnly}
        onChange={handleCheckBoxChange}
      />
      Only show watching stocks
    </p>
    <p>
      <input
        type="checkbox"
        checked={descending}
        onChange={handleCheckBoxChange2}
      />
      Sort by descending holdings in $
    </p>
  </form>
);

type TableProps = {
  readonly stocks: StockInfo[];
};

const FilterableStockTable = ({ stocks }: TableProps) => {
  const [filterText, setFilterText] = useState('');
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [descending, setDescending] = useState(false);

  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFilterText(e.target.value);
  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFavoriteOnly(e.target.checked);
  const handleCheckBoxChange2 = (e: ChangeEvent<HTMLInputElement>) =>
    setDescending(e.target.checked);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, [favoriteOnly]);

  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <SearchBar
        filterText={filterText} // states passed as prop to SearchBar
        favoriteOnly={favoriteOnly} // states passed as prop to SearchBar
        handleFilterTextChange={handleFilterTextChange} // pass down callbacks to update search state
        handleCheckBoxChange={handleCheckBoxChange}
        descending={descending}
        handleCheckBoxChange2={handleCheckBoxChange2}
      />
      <StockTable
        stocks={stocks} // JSON API model
        filterText={filterText} // states passed as prop to SearchBar
        favoriteOnly={favoriteOnly} // states passed as prop to SearchBar
        descending={descending}
      />
    </div>
  );
};

export default FilterableStockTable;