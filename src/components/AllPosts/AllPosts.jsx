import "./AllPosts.css"
import { useEffect, useState } from "react"
import { getAllPosts, getAndSetPostTopics } from "../../services/postsService.jsx"
import { FilterAllPosts } from "../FilterPosts/FilterAllPosts.jsx"
import { FilterPosts } from "../FilterPosts/FilterPosts.jsx"
import { FilterAndSearchBar } from "../FilterPosts/FilterAndSearchBar.jsx"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [displayedPosts, setDisplayedPosts] = useState([])
    const [topics, setTopics] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getAndSetPosts = () => {
        getAllPosts().then(postArray => {
            setAllPosts(postArray)
    })}

    const getAndSetTopics = () => {
        getAndSetPostTopics().then(topicsArray => {
            setTopics(topicsArray)
        })
    }

    const handleFilterTopics = (event) => {
        if (event.target.innerHTML === "All") {
            setDisplayedPosts(allPosts)
        } else {
            const filteredPosts = allPosts.filter(post => post.topic.name === event.target.innerHTML)
            setDisplayedPosts(filteredPosts)
        }
    }

    
    useEffect(() => {
        getAndSetPosts()
        getAndSetTopics()
    }, [])


    useEffect(() => {
        const search = allPosts.filter(post => post.topic.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setDisplayedPosts(search)
    }, [searchTerm])


    return (
        <article className="pageBody">
            <>
                <FilterAndSearchBar handleFilterTopics={handleFilterTopics} topics={topics} setSearchTerm={setSearchTerm}/>
            </>
            <section className="postBody">
                {displayedPosts.length === 0 ? <FilterAllPosts allPosts={allPosts}/> : <FilterPosts displayedPosts={displayedPosts}/>}
            </section>
        </article>
    )
}
