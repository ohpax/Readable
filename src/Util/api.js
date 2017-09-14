const url = 'http://localhost:5001'
const key = "key"

export function fetchPosts(){
     return fetch(`${url}/posts`, { headers: { 'Authorization': key }})
     .then((res) => res.json())
     .then((data)=> data)
}
export function fetchCategoryPosts(category){
    return fetch(`${url}/${category}/posts`, { headers: { 'Authorization': key }})
    .then((res) => res.json())
    .then((data)=> data)
}
export function fetchPost(postId) {
    return fetch(`${url}/posts/${postId}`, { headers: { 'Authorization': key }})
    .then((res) => res.json())
    .then((data)=> data)
}

export function deletePost(postId) {
    return fetch(`${url}/posts/${postId}`, 
    { headers: { 'Authorization': key },
     method:"DELETE"})
    .then((res) => postId)
}
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
export function createPost(post) {
    return fetch(`${url}/posts`, 
    { headers: { 'Authorization': key , "Content-Type": "application/json"}, 
      method: "post",
      body: JSON.stringify({
        timestamp: Date.now(),
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category,
        id: guid()        
    })    
})

    .then((res) => res.json())
    .then((data)=> data)
}

export function updatePost(post) {
    return fetch(`${url}/posts/${post.id}`, 
    { headers: { 'Authorization': key , "Content-Type": "application/json"}, 
      method: "PUT",
      body: JSON.stringify({       
        title: post.title,
        body: post.body,     
    })    
})

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