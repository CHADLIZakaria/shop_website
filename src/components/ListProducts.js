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
            <Title title={name}/>
                <div className='container'>
                    <div className='row'>
                        <div class="card-group">
                            <div class="card">
                                <img src="..." class="card-img-top" />
                                <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="..." class="card-img-top" />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
        </div>
    )
}

export default ListProducts