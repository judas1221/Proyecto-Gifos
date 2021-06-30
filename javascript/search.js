export const baseURLTrending = "http://api.giphy.com/v1/gifs/trending";
export const apiKey = "JW1PnqhdZsl2zUphwiUSzJrjJ6TYvXyz";

let container = document.createElement("div");
let favoriteCard = document.createElement("img");
favoriteCard.setAttribute("src","images/icon-fav.svg");
let downloadCard = document.createElement("img");
downloadCard.setAttribute("src","images/icon-download.svg")
let maxCard = document.createElement("img");
maxCard.setAttribute("src","images/icon-max-normal.svg");
container.appendChild(favoriteCard);
container.appendChild(downloadCard);
container.appendChild(maxCard);
 console.log(container);
 let container2= document.createElement("div");

export async function getGifAPITrending() {
    const result = await fetch(`${baseURLTrending}?limit=20&api_key=${apiKey}`);
    let baseData = await result.json();
    return baseData;
}
let trending = getGifAPITrending();
trending.then(baseData => {
    let arrayTrending = baseData.data;
    let cardTrending = document.querySelector(".slider ul");
    for (let value of arrayTrending) {
        const card = createTrendingCard(value);
        cardTrending.innerHTML += card;
    }
    let images = cardTrending.children; 
    for ( let value of images){
        let imagesBackground = value.firstChild;
        imagesBackground.addEventListener("mouseenter",()=>{
            imagesBackground.classList.toggle("backgroundImages"); 
            value.appendChild(container);
        });
        imagesBackground.addEventListener("mouseout",()=>{
            imagesBackground.classList.toggle("backgroundImages");
            value.replaceChild(container2,container);
        });
    }
    favoriteCard.addEventListener('click',()=>{
        for (let value of arrayTrending){
            addFavorite(value);
        }
    });
    
}).catch(error => console.log(error));
const createTrendingCard = (parameter) => {
    return `<li><img src="${
        parameter.images.original.url
    }"><h6>GIFS-Trending</h6></li>`;
}
//Autocompletando la busqueda
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
// Mostrando la busqueda 
let gifsSearchURL = "http://api.giphy.com/v1/gifs/search";
let divCard = document.querySelector(".resultsearch ul"); 
autocompletar.addEventListener("click", event =>{
    let valueToSearch = event.target.outerText;
    searchValue.value = valueToSearch;
    let gifsResult = getSearchGifs(valueToSearch);
    gifsResult.then(baseData => {
        let arrayGifs = baseData.data;
        console.log(arrayGifs);
        for( let value of arrayGifs){
            const card = createSearchCard(value);
            divCard.innerHTML += card ;
            autocompletar.innerHTML = "";
        }
    let images = divCard.children;
    for ( let value of images){
        let imagesBackground = value.firstChild;
        imagesBackground.addEventListener("mouseenter",()=>{
            imagesBackground.classList.toggle("backgroundImages"); 
            value.appendChild(container);
        });
        imagesBackground.addEventListener("mouseout",()=>{
            imagesBackground.classList.toggle("backgroundImages");
            value.replaceChild(container2,container);
        });
    }
}).catch(error => console.log(error));
});
async function getSearchGifs(parameter){
    const result = await fetch(`${gifsSearchURL}?q=${parameter}&api_key=${apiKey}&limit=12`);
    let baseData = await result.json();
    return baseData
}
const createSearchCard = (parameter) => {
    return `<li><img src="${
        parameter.images.original.url
    }"/></li>`;
}
const createButton =() =>{
    let input = `<input type="button" id="re-search" value="ver más">`;
    let divContainerinput = document.getElementById("moresearch");
    divContainerinput.innerHTML = input;
}
autocompletar.addEventListener("click", createButton);

//
const addFavorite = (parameter) =>{
    let number = 0;
    while(number<100){
        number +=1
        break
    }
    let save =parameter.images.original.url;
    console.log(save);
    localStorage.setItem(`favoritos ${number}`, save);
}

console.log(localStorage.getItem('favoritos'));





