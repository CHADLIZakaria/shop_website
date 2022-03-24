import React, { useEffect, useState } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import ProductService from '../../service/ProductService'
import './Product.scss'

const Product = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        ProductService.findById(id).then(value => {
            setProduct(value.data)
        })
    }, [])
    

  return (
    <div className='row mt-5 product'>
        <div className='col-6 product-image'>
            <img src={`http://localhost:8080/api/uploads/${product.image}`} className="img-thumbnail" />
        </div>
        <div className='col-6'>
            <div className="card">
                <div className="card-body">
                    <h5 class="card-title product-title">{product.title}</h5>
                    <h6 class="card-subtitle mb-2 product-description">{product.description}</h6>
                    <p class="card-text product-price">{product.price} DH</p>
                </div>
                <div className='card-footer product-information'>
                    <p className='text-primary product-information-title'>
                        <BsInfoCircleFill/>
                        <span className='mx-3'>Information du produit</span>
                    </p>
                    <p className='product-information-data'>
                        Cake Donut Original fourré crème cacao (14%) et enrobé au cacao (12%).Contenance : 5 x 48 g = 240 g.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product