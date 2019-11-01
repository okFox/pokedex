import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
        <li class='pokecard'>
        <div class='poke-image'><img src="${pokemon.url_image}" alt="${pokemon.pokemon}"></div>
        <div class='poke-name'>
            <h2>${pokemon.pokemon}</h2>
        </div>
        <div class='poke-type'>${pokemon.type_1}</div>
        <div class='poke-speed'>${pokemon.speed}</div>
    </li>`;
    }
}

export default PokeCard;