import { Card } from "react-bootstrap"

export const FilterPosts = ({ displayedPosts }) => {
    return (
        displayedPosts.map((post) => {
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