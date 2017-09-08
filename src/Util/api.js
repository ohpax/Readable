const url = 'http://localhost:5001'
const key = "key"

export function fetchPosts(){
     return fetch(`${url}/posts`, { headers: { 'Authorization': key }})
     .then((res) => res.json())
     .then((data)=> data)
}

export function fetchPost(postId) {
    return fetch(`${url}/posts/${postId}`, { headers: { 'Authorization': key }})
    .then((res) => res.json())
    .then((data)=> data)
}

export function fetchPostComments(postId) {
    return fetch(`${url}/posts/${postId}/comments`, { headers: { 'Authorization': key }})
    .then((res) => res.json())
    .then((data)=> data)
}

export function upVotePost(postId){
    fetch(`${url}/posts/${postId}`, 
    { 
        method: "post",
        headers: { 'Authorization': key, "Content-Type": "application/json" },
        body: JSON.stringify({
            option: "upVote"
        })            
    })
    .then((res) => res.json())
    .then((data)=> data)
}

export function downVotePost(postId){
    fetch(`${url}/posts/${postId}`, 
    { 
        method: "post",
        headers: { 'Authorization': key, "Content-Type": "application/json" },
        body: JSON.stringify({
            option: "downVote"
        })    
    })
    .then((res) => res.json())
    .then((data)=> data)
}