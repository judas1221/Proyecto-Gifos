export const baseURLTrending = "http://api.giphy.com/v1/gifs/trending";
export const apiKey = "JW1PnqhdZsl2zUphwiUSzJrjJ6TYvXyz";

export async function getGifAPITrending() {
    const result = await fetch(`${baseURLTrending}?limit=20&api_key=${apiKey}`);
    let baseData = await result.json();
    return baseData;
}
let trending = getGifAPITrending();
trending.then(baseData => {
    let arrayTrending = baseData.data;
    let cardTrending = document.querySelector("div.slider ul");
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
let searchURL="http://api.giphy.com/v1/gifs/search/tags";
let autocompletar = document.querySelector("ul.autocompletar");
searchValue.addEventListener("keyup", event =>{
    let valueToSearch = event.target.value;
    let resultSearch = getSearchGifsText(valueToSearch);
    resultSearch.then(baseData => {
    let arraySearch = baseData.data;
    for( let value of arraySearch){
        const text = gettextsearch(value);
        autocompletar.innerHTML += text;    
    }
    
}).catch(error => console.log(error));   
});
searchValue.addEventListener("keydown",()=>{
    autocompletar.innerHTML = "";
});
async function getSearchGifsText(parameter){
    const result = await fetch(`${searchURL}?q=${parameter}&api_key=${apiKey}&limit=5`);
    let baseData = await result.json();
    return baseData
}
const gettextsearch =(parameter)=>{
    return `<li>${parameter.name}</li>`;
}
let gifsSearchURL = "http://api.giphy.com/v1/gifs/search";
let divCard = document.querySelector("div.resultsearch"); 
autocompletar.addEventListener("click", event =>{
    let valueToSearch = event.target.outerText;
    let gifsResult = getSearchGifs(valueToSearch);
    gifsResult.then(baseData => {
        let arrayGifs = baseData.data;
        console.log(arrayGifs);
        for( let value of arrayGifs){
            const card = createSearchCard(value);
            divCard.innerHTML += card ;
            autocompletar.innerHTML = "";

        }
}).catch(error => console.log(error));
});
async function getSearchGifs(parameter){
    const result = await fetch(`${gifsSearchURL}?q=${parameter}&api_key=${apiKey}&limit=12`);
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
autocompletar.addEventListener("click", createButton);