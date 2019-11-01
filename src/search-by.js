import Component from '../Component.js';

class SearchBy extends Component {

    renderHTML() {
        return /*html*/`
        <h3>Search by:</h3>
        <section class='search-section'>
            <div class='name-search'>
                <h4>Name:</h4>
                <input type="search" name="search-by-name" id="search-by-name">
            </div>
            <div class='type-search'>
                <h4>Type:</h4>
                <select name="search-by-type" id="search-by-type">

                </select>
            </div>
            <div class='speed-search'>
                <h4>Speed:</h4>
                <input type="number" name="speed-number" id="speed-number" min='5' max='180' step='5' placeholder='50'>
            </div>
        </section>`;
    }
}

export default SearchBy;