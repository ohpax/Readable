import {key, url, guid} from "./ApiTools"

export function deleteComment(commentId) {
    return fetch(`${url}/comments/${commentId}`,
        {
            headers: { 'Authorization': key },
            method: "DELETE"
        })
        .then((res) => commentId)
}


export function createComment(comment) {
    return fetch(`${url}/comments`,
        {
            headers: { 'Authorization': key, "Content-Type": "application/json" },
            method: "post",
            body: JSON.stringify({
                timestamp: Date.now(),
                body: comment.body,
                author: comment.author,
                parentId: comment.parentId,
                id: guid()
            })
        })

        .then((res) => res.json())
        .then((data) => data)
}

export function updateComment(comment) {
    return fetch(`${url}/comments/${comment.id}`,
        {
            headers: { 'Authorization': key, "Content-Type": "application/json" },
            method: "PUT",
            body: JSON.stringify({
                timestamp: comment.timestamp,
                body: comment.body,
            })
        })
        .then((res) => res.json())
        .then((data) => data)
}

export function fetchPostComments(postId) {
    return fetch(`${url}/posts/${postId}/comments`, { headers: { 'Authorization': key } })
        .then((res) => res.json())
        .then((data) => data)
}

export function upVoteComment(commentId) {
    fetch(`${url}/comments/${commentId}`,
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

export function downVoteComment(commentId) {
    fetch(`${url}/comments/${commentId}`,
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