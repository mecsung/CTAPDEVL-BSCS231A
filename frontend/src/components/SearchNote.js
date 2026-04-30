import { useNotesContext } from "../hooks/useNotesContext";

const SearchNote = ({ note }) => {
    const { dispatch, search } = useNotesContext();

    const HandleSearch = async (e) => {
        dispatch({ type: 'SET_SEARCH', payload: e.target.value });
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search notes..." 
                value={search} 
                onChange={HandleSearch}
                className="search-input" 
            />
        </div>
    )

};

export default SearchNote;