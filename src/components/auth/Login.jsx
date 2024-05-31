import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {  } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/userService"
import { Button } from "react-bootstrap"

export const Login = () => {
  const [email, set] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "learning_user",
          JSON.stringify({
            id: user.id,
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <article className="pageBody">      
      <main className="auth-container">
        <section>
          <form className="auth-form" onSubmit={handleLogin}>
            <h1 className="header textColor">Learning Moments</h1>
            <h2 className="textColor">Please sign in</h2>
            
            <fieldset className="auth-fieldset">
              <div>
                <input
                  type="email"
                  value={email}
                  className="auth-form-input"
                  onChange={(evt) => set(evt.target.value)}
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset className="auth-fieldset">
              <div>
                <Button type="submit" variant="light colorOverride">Sign in</Button>
              </div>
            </fieldset>
          </form>
        </section>
        <section className="register-link">
          <Link to="/register" className="textColor">Not a member yet?</Link>
        </section>
      </main>
    </article>
  )
}

