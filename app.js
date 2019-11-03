import Component from './Component.js';
import Header from './src/Header.js';
import SearchBy from './src/search-by.js';
import SortBy from './src/sort-by.js';
import Pagination from './src/Pagination.js';
import PokeList from './src/poke-list.js';
import { getPokemon } from './services/pokemon-api.js';

class App extends Component {

    async onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const searchHeader = dom.querySelector('.search-header');
        const searchBySection = new SearchBy();
        searchHeader.appendChild(searchBySection.renderDOM());

        const sortHeader = dom.querySelector('.sort-header');
        const sortBySection = new SortBy();
        sortHeader.appendChild(sortBySection.renderDOM());

        const pageSection = dom.querySelector('.pagination');
        const pageP = new Pagination({ totalCount: 0 });
        pageSection.appendChild(pageP.renderDOM());

        const pokeCardSection = dom.querySelector('.card-wrapper');

        const pokeListArray = new PokeList({ pokemon: [] });
        pokeCardSection.appendChild(pokeListArray.renderDOM());

        async function loadPokemon() {
            let response = await getPokemon();     
            let filteredPokemonArr = response.results;
            const totalCount = response.count;
            pokeListArray.update({ pokemon: filteredPokemonArr });
            pageP.update({ totalCount: totalCount });
            
        }
        loadPokemon();
        

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                    <h3 class='search-header'>Search by:</h3>
                     <!-- .search-section goes here -->   

                    <h3 class='sort-header'>Sort by:</h3>
                    <!-- .sort-section goes here -->

                    <section class='pagination'>
                        <!-- paging goes here -->
                    </section>
                     
                    <div class='card-wrapper'>
 
                        <!-- cards list goes here -->        
                    </div>
                </main>
            </div>
        `;
    }

}

export default App;