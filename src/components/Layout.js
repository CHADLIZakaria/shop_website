import React, { useState } from 'react'
import {animated, Spring, useSpring} from 'react-spring'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'


const Layout = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>
            <Navbar onClick={() => setShowSidebar(!showSidebar)}/>
            {showSidebar && 
                <Sidebar onClick={() => setShowSidebar(!showSidebar)} />
            }
            <div className='d-flex'>
                <div className='wrapper-content w-100'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout