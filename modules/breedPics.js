import API_KEY from "./API_KEY.js";

let breedSearch = document.getElementById("breedSearch")

// Updated the promise to an aysnc/await
async function breedPics(userInput){
    let breeds = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}&attach_image=1&api_key=${API_KEY}`);
    console.log(breeds);

    breedSearch.innerHTML = ''

    breeds.data.forEach(cat => {
       const img =  document.createElement("img");
       const h2 =  document.createElement("h2");
       img.src = cat.image.url;
       img.height = "300";
       h2.innerText = cat.name
       breedSearch.appendChild(img);
       breedSearch.appendChild(h2);
    });
}

export default breedPics