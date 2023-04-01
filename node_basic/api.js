
const printFiveMoves = async (pokemonName) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json();
    const moves  = pokemon.moves.map(({ move }) => move.name);
    console.log(moves.slice(0,5));
}
var arg = process.argv.slice(2);
console.log(arg[0]);
printFiveMoves(arg[0]);
