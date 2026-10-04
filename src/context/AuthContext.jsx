import { useState, createContext, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      if (!token) {
        setUser(null)
        setLoading(false)
        return
    }
      try {
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
        }else {
          setUser(null)
          localStorage.removeItem('token')
          setToken(null)
        }
      } catch (error) {
            setUser(null)
      } finally{
        setLoading(false)
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
  const logout = () =>{
    localStorage.removeItem('token')
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider