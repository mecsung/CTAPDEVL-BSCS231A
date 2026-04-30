import { useNotesContext } from '../hooks/useNotesContext';
import './SearchNote.css';

const SearchNote = () => {
  const { dispatch, search } = useNotesContext();

  const handleSearch = (e) => {
    dispatch({ type: 'SET_SEARCH', payload: e.target.value });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchNote;
