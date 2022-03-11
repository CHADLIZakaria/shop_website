import React, { useEffect, useState } from 'react'
import CategoryService from '../../service/CategoryService'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        CategoryService.findAllCategories().then(values => setCategories(values.data.results))
    },[])
    
    return (
        <>
        {
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Sou9</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {categories.map(
                                (category, index) => 
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link" aria-current="page" to={`/categories/${category.name}`}>{category.name}</Link>
                                </li>
                            )}
                            <li className="nav-item">
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