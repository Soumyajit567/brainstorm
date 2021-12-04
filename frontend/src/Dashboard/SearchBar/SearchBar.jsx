import './SearchBar.css'
const SearchBar = (props) => {
    return (
        <form className={"searchForm"}>
            <input
                type="text"
                id="search"
                placeholder="Search"
            />
            <button type="text">Search</button>
        </form>
    );
}

export default SearchBar;