


export async function getPokemon() {  
    let url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    let queryString = window.location.hash.slice(1);
    url = `${url}?${queryString}`;
    const response = await fetch(url);
    let responseData = await response.json();    
    return responseData;
}

