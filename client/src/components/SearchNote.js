import { useNotesContext } from "../hooks/useNotesContext";

const SearchNote = () => {
  const { dispatch, search } = useNotesContext();

  const handleSearch = (e) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };

  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={search}
      onChange={handleSearch}
    />
  );
};

export default SearchNote;