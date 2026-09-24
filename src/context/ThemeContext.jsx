import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme")
  let initialTheme

  if (savedTheme) {
    initialTheme = savedTheme
  } else {
    initialTheme = "light"
  }
  const [theme, setTheme] = useState(initialTheme)
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