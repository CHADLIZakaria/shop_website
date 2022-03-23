import React, { useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import {MdCategory} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import {FaRegComments} from 'react-icons/fa'
import {BiBox} from 'react-icons/bi'
import {animated, Spring, useSpring} from 'react-spring'
import { MdOutlineCategory } from "react-icons/md"
import {AiOutlineMenu} from 'react-icons/ai'
import './Sidebar.scss'

const Sidebar = ({onClick}) => {
    const navigate = useNavigate()
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
        <animated.div 
            className='wrapper-sidebar'
            onClick={onClick}
            style={useSpring({
                from: {marginLeft: -250},
                to: {marginLeft: 0}
        })}>
        <ul className='nav flex-column sidebar'>
            {siderBarData.map((sideBarElement, index) => (
                <li className='nav-item' key={index} onClick={() => navigate(sideBarElement.path)}>
                    <a className='nav-link active'>
                        {sideBarElement.icon}
                        {sideBarElement.title}
                    </a>
                </li>
            ))}        
        </ul>
        </animated.div>
    )
}

export default Sidebar