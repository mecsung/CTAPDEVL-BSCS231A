import { useNotesContext } from "../hooks/useNotesContext";

const SearchNote = () => {

    const { dispatch, search } = useNotesContext();

    const handleSearch = (e) => {

        dispatch({
            type: "SET_SEARCH",
            payload: e.target.value
        });
    };

    return (
        <div style={{ marginBottom: "20px" }}>

            <input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={handleSearch}
                style={{
                    width: "100%",
                    padding: "10px"
                }}
            />

        </div>
    );
};

export default SearchNote;