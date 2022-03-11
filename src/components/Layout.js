import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'


const Layout = ({children}) => {

    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className='d-flex'>
                <Sidebar />
                <div className='wrapper-content w-100 '>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout