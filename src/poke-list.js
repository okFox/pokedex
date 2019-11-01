import Component from '../Component.js';
import PokeCard from '../src/poke-card.js';

class PokeList extends Component {
    
    onRender(dom) {
        const pokemon = this.props.pokemon;

        pokemon.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokecard = new PokeCard(props);
            const pokeCardDOM = pokecard.renderDOM();
            dom.appendChild(pokeCardDOM);
        });

    }

    renderHTML() {
        
        return /*html*/`
            <ul class="pokemon"></ul>
        `;
    }
}

export default PokeList;