import Component from '../Component.js';

class SortBy extends Component {

    renderHTML() {
        return /*html*/`
        <section class='sort-section'>

        <div>
            <input type="radio" id="sort-by-name" name="sort" value="radio-sort" checked>
            <label for="sort-by-name">Name</label>
        </div>
        <div>
            <input type="radio" id="sort-by-type" name="sort" value="radio-sort">
            <label for="sort-by-type">Type</label>
        </div>
        <div>
            <input type="radio" id="sort-by-speed" name="sort" value="radio-sort">
            <label for="sort-by-speed">Speed</label>
        </div>
    </section>`;
    }
}

export default SortBy;