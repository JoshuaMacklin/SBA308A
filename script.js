import API_KEY from "./modules/API_KEY.js";
import breedPics from "./modules/breedPics.js";
import catChat from "./modules/catChat.js";
import catChatPost from "./modules/catChatPost.js";

let form = document.getElementById("form")
let input = document.getElementById("cat-search")
let catChatForm = document.getElementById("catChatForm")
let catChatFormInput = document.getElementById("catChatFormInput")

catChat()

form.addEventListener("submit", (event)=> {
    event.preventDefault()
    breedPics(input.value)
})

catChatForm.addEventListener("submit", (event)=> {
    event.preventDefault();
    catChatPost(catChatFormInput.value);
})