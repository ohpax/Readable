import {key, url, guid} from "./ApiTools"

export function fetchPosts() {
    return fetch(`${url}/posts`, { headers: { 'Authorization': key } })
        .then((res) => res.json())
        .then((data) => data)
}

export function fetchPost(postId) {
    return fetch(`${url}/posts/${postId}`, { headers: { 'Authorization': key } })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return data})
}

export function deletePost(postId) {
    return fetch(`${url}/posts/${postId}`,
        {
            headers: { 'Authorization': key },
            method: "DELETE"
        })
        .then((res) => postId)
}

export function createPost(post) {
    return fetch(`${url}/posts`,
        {
            headers: { 'Authorization': key, "Content-Type": "application/json" },
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
        .then((data) => data)
}

export function updatePost(post) {
    return fetch(`${url}/posts/${post.id}`,
        {
            headers: { 'Authorization': key, "Content-Type": "application/json" },
            method: "PUT",
            body: JSON.stringify({
                title: post.title,
                body: post.body,
            })
        })

        .then((res) => res.json())
        .then((data) => data)
}

export function upVotePost(postId) {
    fetch(`${url}/posts/${postId}`,
        {
            method: "post",
            headers: { 'Authorization': key, "Content-Type": "application/json" },
            body: JSON.stringify({
                option: "upVote"
            })
        })
        .then((res) => res.json())
        .then((data) => data)
}

export function downVotePost(postId) {
    fetch(`${url}/posts/${postId}`,
        {
            method: "post",
            headers: { 'Authorization': key, "Content-Type": "application/json" },
            body: JSON.stringify({
                option: "downVote"
            })
        })
        .then((res) => res.json())
        .then((data) => data)
}

export function fetchCategoryPosts(category) {
    return fetch(`${url}/${category}/posts`, { headers: { 'Authorization': key } })
        .then((res) => res.json())
        .then((data) => data)
}
