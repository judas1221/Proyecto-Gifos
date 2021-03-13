export const baseURL = "http://api.giphy.com/v1/gifs/trending";
export const apiKey = "JW1PnqhdZsl2zUphwiUSzJrjJ6TYvXyz";
export let searchValue = document.getElementById("search");
console.log(searchValue);
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
}).catch(error => console.log(error));;
const createTrendingCard = (parameter) => {
    return `<li><img src="${
        parameter.images.original.url
    }"/><h6>${
        parameter.title
    }</h6></li>`;
}
