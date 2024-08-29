import './SearchBox.css';

function SearchBox({ filteredText, setFilteredText }) {

    const handleChange = (e) => {
        setFilteredText(e.target.value);
    };

    return (
        <div className='searchbox-container'>
            <p>Find contact by name</p>
            <input
                type="text"
                placeholder="Search contacts..."
                value={filteredText}
                onChange={handleChange}
            />
      </div>
    );
};
export default SearchBox