export const baseURL = "http://api.giphy.com/v1/gifs/trending";
export const apiKey = "JW1PnqhdZsl2zUphwiUSzJrjJ6TYvXyz";

export async function getGifAPITrending() {
    const result = await fetch(`${baseURL}?limit=20&api_key=${apiKey}`);
    let baseData = await result.json();
    return baseData;
}
let trending = getGifAPITrending();
trending.then(baseData => {
    let arrayTrending = baseData.data;
    console.log(arrayTrending);
    let cardTrending = document.getElementById("trending");
    for (let value of arrayTrending) {
        const card = createTrendingCard(value);
        cardTrending.innerHTML += card;
    }
}).catch(error => console.log(error));
const createTrendingCard = (parameter) => {
    return `<li><img src="${
        parameter.images.original.url
    }"/><h6>${
        parameter.title
    }</h6></li>`;
}

export let searchValue = document.getElementById("search");
let searchURL="http://api.giphy.com/v1/gifs/search";
searchValue.addEventListener("keyup", event =>{
    let valueToSearch = event.target.value;
    let resultSearch = getSearchGifs(valueToSearch);
    resultSearch.then(baseData => {
    let arraySearch = baseData.data;
    console.log(arraySearch);
    let cardSearch = document.getElementById("resultsearch");
    for (let value of arraySearch) {
        const card = createSearchCard(value);
        cardSearch.innerHTML += card;
    }
}).catch(error => console.log(error));   
});

async function getSearchGifs(parameter){
    const result = await fetch(`${searchURL}?q=${parameter}&api_key=${apiKey}&limit=12`);
    let baseData = await result.json();
    return baseData
}
const createSearchCard = (parameter) => {
    return `<div><img src="${
        parameter.images.original.url
    }"/><h6>${
        parameter.title
    }</h6></div>`;
}
const createButton =() =>{
    let input = `<input type="button" id="re-search" value="ver más">`;
    let divContainerinput = document.getElementById("moresearch");
    divContainerinput.innerHTML = input;
}
searchValue.addEventListener("keyup", createButton);