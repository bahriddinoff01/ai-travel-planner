import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme")
  let initialTheme = savedTheme || "light"
  const [theme, setTheme] = useState(initialTheme)
useEffect (() => {
    if (theme === "light") {
        document.documentElement.classList.remove("dark")
    } else {
        document.documentElement.classList.add("dark")
    }
}, [theme])
  if (savedTheme) {
    initialTheme = savedTheme
  } else {
    initialTheme = "light"
  }
  const toggleTheme = () =>{
   if (theme === "light") {
    setTheme("dark")
    localStorage.setItem("theme", "dark")
  } else {
    setTheme("light")
    localStorage.setItem("theme", "light")
  }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}