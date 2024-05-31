import { Outlet, Route, Routes } from "react-router-dom"
import { AllPosts } from "../components/AllPosts/AllPosts.jsx"
import { NavBar } from "../components/nav/NavBar.jsx"
import { useEffect, useState } from "react"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user")
    const learningUserObject = JSON.parse(localLearningUser)
    setCurrentUser(learningUserObject)
    }, [])

    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                        <NavBar currentUser={currentUser}/>
                        <Outlet />
                    </>
                }
            >
                <Route index element={<AllPosts />} />
            </Route>
        </Routes>
    )
}