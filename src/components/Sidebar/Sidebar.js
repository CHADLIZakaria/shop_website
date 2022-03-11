import React, { useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import {MdCategory} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import {FaRegComments} from 'react-icons/fa'
import {BiBox} from 'react-icons/bi'
import { MdOutlineCategory } from "react-icons/md"
import {AiOutlineMenu} from 'react-icons/ai'
import './Sidebar.scss'

const Sidebar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(true)
    const siderBarData = [
        {
            'title': 'Categories',
            'icon': <MdOutlineCategory />,
            'path': '/categories'
        },
        {
            'title': 'Users',
            'icon':  <FiUsers />,
            'path': '/users'
        },
        {
            'title': 'Products',
            'icon': <BiBox />,
            'path': '/products'
        },
        {
            'title': 'Comments',
            'icon': <FaRegComments/>,
            'path': '/comments'
        }
    ]

    return (
        <ul className='nav flex-column sidebar'>
            {siderBarData.map(sideBarElement => (
                <li className='nav-item' onClick={() => navigate(sideBarElement.path)}>
                    <a className='nav-link active'>
                        {sideBarElement.icon}
                        {showMenu && 
                            sideBarElement.title
                        }
                    </a>
                </li>
            ))}           
            <span className='menu' onClick={() => setShowMenu(!showMenu)}>
                <AiOutlineMenu />
            </span>
        </ul>
    )
}

export default Sidebar