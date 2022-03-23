import React, { useEffect, useState } from 'react'
import CategoryService from '../../service/CategoryService'
import {Link} from 'react-router-dom'
import Title from '../../components/Title/Title'
import { BiBox } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import ProductService from '../../service/ProductService'
import Table from '../../components/Table/Table'

const Products = () => {
    const [products, setProducts] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        ProductService.findAll().then(data => 
            {
                setProducts(data.data.results)
                console.log(data)

            })
        setIsLoad(true)
    }, [isLoad])

    // const deleteCategeory = (id) => {
    //     CategoryService.deleteCategoryById(id).then(() => setCategories(categories.filter(category => category.id != id)))
    // }
    
    return (
        <div>
            <Title title={"Products"}/>
            <div className='d-flex justify-content-between align-items-center my-4'>
                <div className="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                </div>
                <Link to="/products/save" className='btn btn-primary d-flex align-items-center'>
                    Add
                    <AiOutlinePlus />
                </Link>
            </div>
            {isLoad &&
                <Table data={products} />
            }  
        </div>
    )
}

export default Products