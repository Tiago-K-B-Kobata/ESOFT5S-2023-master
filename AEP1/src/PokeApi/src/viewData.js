async function getPokemon(){
    const response = fetch('http://localhost:3000/pokedex');
    const pokemon = (await response).json();

    const container = document.getElementById("container");

    
}