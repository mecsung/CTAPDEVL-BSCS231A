import { useNotesContext } from "../hooks/useNotesContext";

const SearchNote = () => {
    const { dispatch, search } = useNotesContext();

    const handleSearch = async (e) => {
        dispatch({ type: 'SET_SEARCH', payload: e.target.value });
    };

    return (
        <div className="search-note">
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search notes..."
            />
        </div>
    );
}

export default SearchNote;