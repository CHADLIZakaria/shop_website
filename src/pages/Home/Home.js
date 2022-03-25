import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/Title/Title'
import ProductService from '../../service/ProductService'
const Home = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        ProductService.findAll().then(value => setProducts(value.data.results))
    }, [])
    
    return (
        <div className='container'>
            <Title title='Sou9' />
            <div class="row row-cols-1 row-cols-md-4 g-4 card-group">
            {products.map(product => 
                <div class="col" onClick={() => navigate(`/product/${product.id}`)}>
                    <div class="card">
                        <img src={`http://localhost:8080/api/uploads/${product.image}`} class="card-img-top" style={{height: '200px'}} alt="..." />
                        <div class="card-body">
                            <h5 class="d-flex justify-content-between">
                                <span className='d-flex flex-column'>
                                    <span className='card-title'>{product.title}</span>
                                </span>
                                <span>
                                    {product.price} DH
                                </span>
                            </h5>
                            <h6 className='card-subtitle text-muted'>
                                {product.description}
                            </h6>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Home