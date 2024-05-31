import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserByEmail } from "../../services/userService"
import { Button } from "react-bootstrap"

export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    cohort: 0,
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    const newUser = {
      ...user,
      cohort: parseInt(user.cohort),
    }

    createUser(newUser).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "learning_user",
          JSON.stringify({
            id: createdUser.id,
            staff: createdUser.isStaff,
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateUser = (evt) => {
    const copy = { ...user }
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (
    <article className="pageBody">
      <main className="auth-container">
        <form className="auth-form" onSubmit={handleRegister}>
          <h1 className="header textColor">Learning Moments</h1>
          <h2 className="textColor">Please Register</h2>
          <fieldset className="auth-fieldset">
            <div>
              <input
                onChange={updateUser}
                type="text"
                id="name"
                className="auth-form-input"
                placeholder="Enter your name"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset">
            <div>
              <input
                onChange={updateUser}
                type="email"
                id="email"
                className="auth-form-input"
                placeholder="Email address"
                required
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset">
            <div>
              <input
                onChange={updateUser}
                type="number"
                id="cohort"
                className="auth-form-input"
                placeholder="Cohort #"
                required
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset">
            <div>
              <Button type="submit" variant="light colorOverride">Register</Button>
            </div>
          </fieldset>
        </form>
      </main>
    </article>
  )
}
