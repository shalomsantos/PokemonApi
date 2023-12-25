// MINHAS VARIAVEIS
let pokemon = Math.floor(Math.random() * 300);
let pokemonName = document.querySelector('.pokemonName');
let pokemonId = document.querySelector('.pokemonId');
let pokemonImg = document.querySelector('.pokemonImg');
let pokemonList = document.getElementById("pokemonList");
let atribut = document.getElementById("atribut");
//ATRIBUTOS
let pokemonHabText = document.querySelector('.pokemonHabText');
let pokemonHp = document.querySelector('.pokemonHp');
let pokemonAttack = document.querySelector('.pokemonAttack');
let pokemonDefense = document.querySelector('.pokemonDefense');
let pokemonSpecialAttack = document.querySelector('.pokemonSpecialAttack');
let pokemonSpecialDefense = document.querySelector('.pokemonSpecialDefense');
let pokemonSpeed = document.querySelector('.pokemonSpeed');
// BASE DA URL
baseUrl = "https://pokeapi.co/api/v2/pokemon/";

async function montaPokemon(data){
    let pokeDados = await fetchPokemon(data);

    pokemonName.innerHTML = pokeDados.name;
    pokemonImg.src = pokeDados['sprites']['versions']['generation-v']['black-white']['animated'].front_default;
    pokemonId.innerHTML = pokeDados.id;
    pokeDados.abilities.forEach((item) => {
        let itemAbility = document.createElement("li");
        itemAbility.innerHTML = item.ability.name;
        pokemonList.appendChild(itemAbility);
    })
    pokeDados.stats.forEach((item) => {
        let itemAtributs = document.createElement("div");

        itemAtributs.innerHTML = `
        <p>${item.stat.name}</p>
        <div class='progress' role='progressbar' aria-label='Example with label' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>
            <div class='progress-bar' style='width: ${item.base_stat}%;'>${item.base_stat} Pts</div>
        </div>`
        
        atribut.appendChild(itemAtributs);  
    })
}

async function fetchPokemon(pokemon) {
    let response = await fetch(`${baseUrl}${pokemon}`);
    let movies = await response.json();
    
    console.log(movies);
    return movies;
}

montaPokemon(pokemon);