import { createContext, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyUserData, dummyChats } from '../assets/assets'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  //fetch user data
  const fetchUser = async () => {
    setUser(dummyUserData)
  }

  //fetch user chats
  const fetchUserChats = async (params) => {
    setChats(dummyChats)
    setSelectedChat(dummyChats[0])
  }

  //apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  //fetch chat when user changes
  useEffect(() => {
    if (user) {
      fetchUserChats()
    } else {
      setChats([])
      setSelectedChat(null)
    }
  }, [user])

  //fetch user on mount
  useEffect(() => {
    fetchUser()
  }, [])

  const value = {
    navigate,
    user,
    setUser,
    fetchUser,
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    theme,
        setTheme
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
