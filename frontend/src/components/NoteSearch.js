const NoteSearch = ({ searchTerm, onSearch }) => {
  return (
    <div className="note-search-wrapper">
      <input
        type="search"
        className="note-search-input"
        placeholder="Search notes by title or content..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default NoteSearch;
