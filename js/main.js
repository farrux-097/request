let elUserList = document.querySelector(".users-list")
let elShowList = document.querySelector(".posts-list")
let elCommentList = document.querySelector(".comments-list")


fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
.then(data => {
    data.forEach(emt => {
        let elUserItem = document.createElement("li")
        elUserItem.className = "w-[400px] bg-white rounded-md p-5"
        elUserItem.innerHTML = `
            <p class="text-violet-400">ID: <strong class="text-violet-600">${emt.id}</strong></p>
            <p class="text-violet-400">Name: <strong class="text-violet-600">${emt.name}</strong></p>
            <p class="text-violet-400">Username: <strong class="text-violet-600">${emt.username}</strong></p>
            <p class="text-violet-400">Email: <strong class="text-violet-600">${emt.email}</strong></p>
            <button onclick="findPost(${emt.id})" class="p-[5px] color-btn rounded-lg w-full mt-2 text-white">Show posts</button>
        `
        elUserList.append(elUserItem)
    });
})

function findPost(id){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json())
    .then(data => {
        elShowList.classList.remove("hidden")
        elUserList.classList.add("hidden")
        data.forEach(item => {
            let elPostItem = document.createElement("li")
            elPostItem.className = "w-[400px] bg-white rounded-lg p-5"
            elPostItem.innerHTML = `
                <p class="text-violet-400">UserId: <strong class="text-violet-600">${item.userId}</strong ></p>
                <p class="text-violet-400 mt-2">Id: <strong class="text-violet-600">${item.id}</strong></p>
                <p class="text-violet-400 mt-2">Title: <strong class="text-violet-600">${item.title}</strong></p>
                <button  onclick="findComment(${item.id})" class="  color-btn p-[5px]  rounded-md w-full mt-2 text-white">Show comments</button>
            `
            elShowList.append(elPostItem)
        })
    })
}

function findComment(id){
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => res.json())
    .then(data => {
        elShowList.classList.add("hidden")
        elCommentList.classList.remove("hidden")
        data.forEach(item => {
            let elCommentItem = document.createElement("li")
            elCommentItem.className = "w-[400px] bg-white rounded-md p-5"
            elCommentItem.innerHTML = `
                <p class="text-violet-400">PostID: <strong class="text-violet-300">${item.postId}</strong></p>
                <p class="mt-[5px] text-violet-300">Id: <strong class="text-violet-300">${item.id}</strong></p>
                <p class="mt-[5px] text-violet-300">Name: <strong class="text-violet-300">${item.name}</strong></p>
                <p class="mt-[5px] text-violet-300">Email: <strong class="text-violet-300">${item.email}</strong></p>
                <p class="mt-[5px] text-violet-300">Body: <strong class="text-violet-300">${item.body}</strong></p>
            `
            elCommentList.append(elCommentItem)
        })
    })
}