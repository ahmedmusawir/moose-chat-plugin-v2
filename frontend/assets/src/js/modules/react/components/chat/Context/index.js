import React, { useState, createContext } from 'react'

export const ChatEngineContext = createContext()

export const ChatEngineWrapper = props => {
    const [connecting, setConnecting] = useState(true)
    const [conn, setConn] = useState(null)
    const [creds, setCreds] = useState(null)
    const [sessionToken, setSessionToken] = useState('')
    const [chats, setChats] = useState(null)
    const [messages, setMessages] = useState({})
    const [activeChat, setActiveChat] = useState(null)
    const [typingCounter, setTypingCounter] = useState({})
    const [loadMoreMessages, setLoadMoreMessages] = useState(false)
    const [isBottomVisible, setIsBottomVisible] = useState(false)

    const value = {
        connecting, setConnecting,
        conn, setConn,
        creds, setCreds,
        sessionToken, setSessionToken,
        chats, setChats,
        messages, setMessages,
        activeChat, setActiveChat,
        typingCounter, setTypingCounter,
        loadMoreMessages, setLoadMoreMessages,
        isBottomVisible, setIsBottomVisible,
    }

    return (
        <ChatEngineContext.Provider value={value}>
            {props.children}
        </ChatEngineContext.Provider>
    )
}
