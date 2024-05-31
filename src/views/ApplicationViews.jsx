import { Route, Routes } from "react-router-dom"
import { AllPosts } from "../components/AllPosts/AllPosts.jsx"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<AllPosts />} />
            </Route>
        </Routes>
    )
}