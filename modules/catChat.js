let catChatEl = document.getElementById("catChat")

async function catChat(){
    let catChatFetch = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

    for (let i=0; i < 6; i++){
        const title = document.createElement("p")
        title.innerText = catChatFetch.data[i].title;
        catChatEl.prepend(title);
    }
}

export default catChat