import React, { useState } from 'react'
import './Login.css'
import { CircleUserRound } from 'lucide-react'
import Navbar from '../components/Navbar'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputReset = () => {
    setUsername('')
    setEmail('')
    setPassword('')
  }
  const handleSubmit = async () => {
    try {
      const url = isSignUp
        ? 'http://localhost:3000/api/auth/register'
        : 'http://localhost:3000/api/auth/login'

      const body = isSignUp
        ? { username, email, password }
        : { email, password }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      console.log(data)

      if (!response.ok) {
        alert(data.message)

        return
      }

      if (isSignUp) {
        alert('Account created successfully!')
        inputReset()
      } else {
        localStorage.setItem('token', data.token)
        alert('Login successful!')
        inputReset()
      }

    } catch (error) {
      console.error(error)
      alert('Cannot connect to server')
    }
  }

  return (
    <div>
      <Navbar />

      <div className="login-page">
        <div className={`login-container ${isSignUp ? 'signup-active' : ''}`}>

          <div className="login-form">

            <div className="login-icon">
              <CircleUserRound className="login-icon-inside" />
            </div>

            <div className="login-letter">
              {isSignUp ? 'Sign Up' : 'Login'}
            </div>

            <div className="login-input">

              {isSignUp && (
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <div className="login-button">
              <button onClick={handleSubmit}>
                {isSignUp ? 'Sign Up' : 'Login'}
              </button>
            </div>

            <div className="mobile-switch">
              <span>
                {isSignUp
                  ? 'Already have an account?'
                  : "Don't have an account?"}
              </span>

              <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Login' : 'Sign Up'}
              </button>
            </div>

          </div>

          <div className="login-header">

            <div className="login-header-main">

              <h1>
                {isSignUp ? 'Welcome!' : 'Welcome Back!'}
              </h1>

              <h3>
                {isSignUp
                  ? 'Create an account to get started'
                  : 'Enter your credentials to access your account'}
              </h3>

              <div className="login-links">
                <h4>
                  {isSignUp
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                </h4>
              </div>

              <button
                className="switch-button"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Login' : 'Sign Up'}
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login