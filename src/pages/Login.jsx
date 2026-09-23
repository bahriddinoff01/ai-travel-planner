import React, { useState } from 'react'
import './Login.css'
import { CircleUserRound } from 'lucide-react'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div>
      <div className={`login-container ${isSignUp ? 'signup-active' : ''}`}>

        {/* FORM */}
        <div className="login-form">

          <div className="login-icon">
            <CircleUserRound className="login-icon-inside" />
          </div>

          <div className="login-letter">
            <div>{isSignUp ? 'Sign Up' : 'Login'}</div>
          </div>

          <div className="login-input">

            <input
              type="text"
              placeholder="Username"
            />

            {isSignUp && (
              <input
                type="email"
                placeholder="Email"
              />
            )}

            <input
              type="password"
              placeholder="Password"
            />

          </div>

          <div className="login-button">
            <button>
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
          </div>

        </div>


        {/* WELCOME */}
        <div className="login-header">

          <div className="login-header-main">

            <h1>
              {isSignUp ? 'Welcome!' : 'Welcome Back!'}
            </h1>

            <h3>
              {isSignUp
                ? 'Create an account to get started'
                : 'Enter your credentials to access your account'
              }
            </h3>

            <div className="login-links">
              <h4>
                {isSignUp
                  ? 'Already have an account?'
                  : "Don't have an account?"
                }
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
  )
}

export default Login