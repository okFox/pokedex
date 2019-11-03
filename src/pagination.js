import Component from '../Component.js';

class Pagination extends Component {
    
    onRender(dom) {
        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');

        if (!prevButton){
            return;
        } 
        
        let page = 1; 

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            }
            else {
                page = parsedPage;
            }
        }    
        updateControls(); 

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
        
    }

    renderHTML() {
        const perPage = 20;
        const totalCount = this.props.totalCount;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1;
        const parsedPage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            page = 1;
        }
        else {
            page = parsedPage;
        }
    
        if (!totalCount) {
            return /*html*/`
            <p class="paging">No results, try another search</p>
        `;
        }
        const lastPage = Math.ceil(totalCount / perPage);

        return /*html*/`
    <p class="paging">
        <button class="prev" disabled>◀</button>
        <span>Page ${page} of ${lastPage}</span>
        <button class="next">▶</button>
    </p>`;
    }
}

export default Pagination;