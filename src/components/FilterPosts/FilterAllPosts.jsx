import { Card } from "react-bootstrap"

export const FilterAllPosts = ({ allPosts }) => {
    return (
        allPosts.map((post) => {
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
        })
    )
}