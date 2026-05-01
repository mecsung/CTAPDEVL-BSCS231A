import { useNotesContext } from '../context/NotesContext';

const SearchNote = () => {
    const { search, dispatch } = useNotesContext();

    const handleSearch = async (e) => {
        dispatch({ type: 'SET_SEARCH', payload: e.target.value });
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={handleSearch}
                className='search-input'
            />
        </div>
    );
};

export default SearchNote;