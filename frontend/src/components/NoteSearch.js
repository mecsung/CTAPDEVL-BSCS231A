import { useNotesContext } from "../hooks/useNotesContext";

const NoteSearch = () => {
    const { dispatch, search } = useNotesContext();

    const handleSearch = (e) => {
        dispatch({ type: "SET_SEARCH", payload: e.target.value });
    };

    return (
        <div className="search-container">
            <input type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search notes..."
                className="search-field"
            />
        </div>
    );
};
export default NoteSearch