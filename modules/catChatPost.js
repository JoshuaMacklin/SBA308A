let catChatEl = document.getElementById("catChat")

async function catChatPost(userInput){
    const newPost = [userInput, "catChat"];
    let post = await axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost)
    const createdPost = await post.data
    // alert(JSON.stringify(createdPost))

    const title = document.createElement("p")
    title.innerText = userInput
    catChatEl.prepend(title);

    catChatFormInput.value = "";
}

export default catChatPost