import { useState, createContext, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        const response = await fetch(
          'https://ai-travel-planner-backend-0xes.onrender.com/api/auth/profile',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        const data = await response.json()

        if (response.ok) {
          setUser(data.user)
        } else {
          setUser(null)
        }
      }
    }

    getUser()
  }, [token])
  const login = async (email, password) => {

    const response = await fetch(
        'https://ai-travel-planner-backend-0xes.onrender.com/api/auth/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message)
    }

    localStorage.setItem('token', data.token)

    setToken(data.token)
    setUser(data.user)
}

  return (
    <AuthContext.Provider value={{ token, user, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider