export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=topic&_embed=userLikes").then(res => res.json())
}

export const getAndSetPostTopics = () => {
    return fetch("http://localhost:8088/topics").then(res => res.json())
}