import "./AllPosts.css"
import { useEffect, useState } from "react"
import { getAllPosts, getAndSetPostTopics } from "../../services/postsService.jsx"
import { Card, Dropdown } from "react-bootstrap"
import { FilterAllPosts } from "../FilterPosts/FilterAllPosts.jsx"
import { FilterPosts } from "../FilterPosts/FilterPosts.jsx"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [displayedPosts, setDisplayedPosts] = useState([])
    const [topics, setTopics] = useState([])

    const getAndSetPosts = () => {
        getAllPosts().then(postArray => {
            setAllPosts(postArray)
    })}

    const getAndSetTopics = () => {
        getAndSetPostTopics().then(topicsArray => {
            setTopics(topicsArray)
        })
    }

    // const handleFilterTopics = (event) => {
    //     const filteredPosts = topics.filter(topic => topic.name === event.target.name)
    //     setDisplayedPosts(filteredPosts)
    // }
    
    useEffect(() => {
        getAndSetPosts()
        getAndSetTopics()
    }, [])


    return (
        <article className="pageBody">
            <Dropdown className="filterPostsDropdown">
                <Dropdown.Toggle id="filterDropdown">Filter Posts</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item key={0}>All</Dropdown.Item>
                    {topics.map((topic) => {
                        return (
                            <Dropdown.Item key={topic.id}>{topic.name}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <section className="postBody">
                {displayedPosts.length === 0 ? <FilterAllPosts allPosts={allPosts}/> : <FilterPosts displayedPosts={displayedPosts}/>}
            </section>
        </article>
    )
}
