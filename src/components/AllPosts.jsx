import "./AllPosts.css"
import { useEffect, useState } from "react"
import { getAllPosts } from "../services/postsService.jsx"
import { Card } from "react-bootstrap"

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
        <body className="pageBody">
            <section className="postBody">
                {allPosts.map((post) => {
                    return (
                        <Card className="postCard" key={post.id}>
                            <Card.Title className="postCardTitle">Title: {post.title}</Card.Title>
                            <Card body>
                                <div className="postCardBody">
                                    <div>Topic: {post.topic.name}</div>
                                    <div>Likes: {post.userLikes.length}</div>
                                </div>
                            </Card>
                        </Card>
                    )
                })}
            </section>
        </body>
    )
}
