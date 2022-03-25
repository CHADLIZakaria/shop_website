import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {animated, Spring, useSpring} from 'react-spring'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'


const Layout = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [showUserInfo, setShowUserInfo] = useState(false)
    const location = useLocation()
    useEffect(() => {
        setShowUserInfo(false)
    }, [location.pathname])
    

    return (
        <>
            <Navbar onClick={() => setShowSidebar(!showSidebar)} onToggleShowUserInfo={() => setShowUserInfo(!showUserInfo)} showUserInfo={showUserInfo}/>
            {showSidebar && 
                <Sidebar onClick={() => setShowSidebar(!showSidebar)} />
            }
            <div className='d-flex' onClick={() => setShowUserInfo(false)}>
                <div className='wrapper-content w-100'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout