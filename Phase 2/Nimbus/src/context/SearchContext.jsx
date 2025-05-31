import { createContext, useContext, useState } from 'react';
import { fetchSearchResults } from '../utils/api'; // adjust path as needed

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async (searchTerm) => {
    setQuery(searchTerm);
    const data = await fetchSearchResults(searchTerm);
    setResults(data || []);
  };





  return (
    <SearchContext.Provider value={{ query, results, search }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
