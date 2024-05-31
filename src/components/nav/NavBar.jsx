import { useNavigate } from "react-router-dom"
import "./NavBar.css"
import { Container, Navbar, Nav } from "react-bootstrap"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <Navbar expand="lg" className="navColor">
            <Container>
                <Navbar.Brand href="/" className="navTextColor">Learning Moments</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/" className="navTextColor">All Posts</Nav.Link>
                        {localStorage.getItem("learning_user") ? (
                            <Nav.Link
                                className="navTextColor"
                                to=""
                                onClick={() => {
                                    localStorage.removeItem("learning_user")
                                    navigate("/login", { replace: true })
                                }}
                            >
                                Logout
                            </Nav.Link>
                        ) : (
                            ""
                        )}                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}