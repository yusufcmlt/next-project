import { FC } from "react";

type SearchProps = {
  onSearch: (searchText: string) => void;
};

const Search: FC<SearchProps> = ({ onSearch }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Arama"
      onChange={(e) => {
        onSearch(e.target.value);
      }}
    />
  );
};
export default Search;
