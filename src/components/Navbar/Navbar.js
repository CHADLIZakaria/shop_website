import React, { useContext, useEffect } from 'react'
import { AiFillCaretDown, AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineLogout } from 'react-icons/md'
import { RiUserSettingsLine } from "react-icons/ri"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../ApplicationContext'
import CategoryService from '../../service/CategoryService'
import man from './man.png'
import './Navbar.scss'

const Navbar = ({onClick, onToggleShowUserInfo, showUserInfo}) => {

    const [categories, setCategories] = useContext(ShopContext)
    
    useEffect(() => {
        CategoryService.findAllCategories().then(values => {
            setCategories(values)
        })
    },[])
    
    return (
        <>
        {  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span style={{cursor: 'pointer'}}>
                        <AiOutlineMenu onClick={onClick}/>
                    </span>
                    <Link className="navbar-brand mx-3" to="/">Sou9</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {categories.map(
                                (category, index) => 
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link d-flex align-items-center" aria-current="page" to={`/categories/${category.name}`}>
                                        <img style={{width: '32px'}} src={`http://localhost:8080/api/uploads/${category.icon}`}/>
                                        <span>{category.name}</span>
                                    </Link>
                                </li>
                            )}
                            <li className="nav-item d-flex align-items-center position-relative user-info">
                                <img src={man} width={40} className='img-thumbnail rounded-circle' onClick={onToggleShowUserInfo} />
                                <AiFillCaretDown onClick={onToggleShowUserInfo} /> 
                                {showUserInfo  &&
                                    <ul className='position-absolute top-100 start-0 translate-middle-x'>
                                        <a className="nav-link d-flex align-items-center gap-2">
                                            <span className='w-100'>
                                                Profil 
                                            </span>
                                            <RiUserSettingsLine />
                                        </a>
                                        <a className="nav-link d-flex align-items-center gap-2">
                                            <span className='w-100'>
                                                Logout 
                                            </span>
                                            <MdOutlineLogout />
                                        </a>
                                    </ul>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        }
        </>
    )
}

export default Navbar