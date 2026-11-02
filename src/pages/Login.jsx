import React, { useState, useContext } from 'react'
import './Login.css'
import { CircleUserRound, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const inputReset = () => {
    setUsername('')
    setEmail('')
    setPassword('')
  }

  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async () => {
  try {
    if (isSignUp) {
      const response = await fetch(
        'https://ai-travel-planner-backend-0xes.onrender.com/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        alert(data.message || 'Registration failed')
        return
      }

      alert('Account created successfully!')
      inputReset()
    } else {
      await login(username, password)

      inputReset()
      navigate('/dashboard')
    }
  } catch (error) {
    console.error('Authentication error:', error)
    alert(error.message || 'Cannot connect to server')
  }
}

  return (
    <div className="relative">
      {/* <Navbar /> */}
      <Link
        to="/"
        className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white hover:text-blue-600 sm:left-6 sm:top-6"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

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

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              {isSignUp && (
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff color="black" /> : <Eye color="black" />}
                </button>
              </div>

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