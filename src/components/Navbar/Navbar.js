import React, { useEffect, useState } from 'react'
import CategoryService from '../../service/CategoryService'
import {Link} from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = ({onClick}) => {

    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        CategoryService.findAllCategories().then(values => setCategories(values))
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
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link">Logout </a>    
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