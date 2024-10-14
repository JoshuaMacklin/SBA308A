const API_KEY = "live_uvoSZa1Mc5WHBv9dEFTImpzBm0CVy1n9pZsyj70QBMLRHC5pRDPgpq7sUHsNO7Pe";

let form = document.getElementById("form")
let input = document.getElementById("cat-search")

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    tenBreeds(input.value)

})

async function tenBreeds(userInput){
    let breeds = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${userInput}&api_key=${API_KEY}`);
    console.log(breeds);
}



