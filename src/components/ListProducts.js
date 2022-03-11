import React, {useEffect, useState} from 'react'
import ProductService from '../service/ProductService'
import Title from './Title/Title'
import {useParams} from "react-router-dom"

const ListProducts = () => {
    
    const [products, setProducts] = useState([])
    const {name} = useParams()

    useEffect(() => {
        if(name !== '') 
            ProductService.findByCategories(name).then(value => setProducts(value))
        
        ProductService.findByCategories(name).then(value => console.log(value))
    }, [name])

    
    
    return (
        <div>
            <Title title={"List products"}/>
                <div className='container'>
                    <div className='row'>
                        {products.map((product, index) => 
                            <div className='col-3'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div> 
                            </div>
                        )}
                    </div>
                </div>
        </div>
    )
}

export default ListProducts