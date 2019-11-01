
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=char&speed=50';

export async function getPokemon() {  
    const response = await fetch(URL);
    return await response.json();
}