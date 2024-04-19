import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(storageKey)
    return storedTheme || defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

export { ThemeProvider, useTheme }
