import { useEffect, useState } from "react"
import { getAllPosts } from "../services/postsService.jsx"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])

    const getAndSetPosts = () => {
        getAllPosts().then(postArray => {
            setAllPosts(postArray)
            console.log(postArray)
    })}
    
    useEffect(() => {
        getAndSetPosts()
    }, [])


    return (
        <section>
            {allPosts.map((post) => {
                return (
                    <div key={post.id}>
                        <div>Title: {post.title}</div>
                        <div>Topic: {post.topic.name}</div>
                        <div>Likes: {post.userLikes.length}</div>
                    </div>
                )
            })}
        </section>
    )
}
