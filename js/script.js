let elPokemonList = document.querySelector(".js-pokemon-list");



pokemons.forEach(pokemon => {
    let newPokemonItem = document.createElement("li");
    newPokemonItem.classList.add("card", "w-25", "bg-dark", "m-3");

    let newPokemonImg =document.createElement("img");
    newPokemonImg.src = pokemon.img;
    newPokemonImg.alt = pokemon.name;
    newPokemonImg.classList.add("card-img", "list-item");
    newPokemonImg.width = 50;

    let newIntro = document.createElement("div");
    newIntro.classList.add("card-box", "w-100", "bg-danger", "rounded-bottom");

    let newPokemonTitle = document.createElement("h4");
    newPokemonTitle.textContent = pokemon.name;
    newPokemonTitle.classList.add("card-title", "text-center");

    let newPokemonText = document.createElement("p");
    newPokemonText.textContent = pokemon.weaknesses.join(` + `);
    newPokemonText.classList.add("card-text", "text-center");


    newIntro.append(newPokemonTitle, newPokemonText);
    elPokemonList.appendChild(newPokemonItem);
    newPokemonItem.append(newPokemonImg, newIntro); 
});
