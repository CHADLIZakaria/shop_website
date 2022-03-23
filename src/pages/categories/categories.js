import React, { useEffect, useState } from 'react'
import CategoryService from '../../service/CategoryService'
import {Link} from 'react-router-dom'
import Title from '../../components/Title/Title'
import Table from '../../components/Table/Table'
import { AiOutlinePlus } from 'react-icons/ai'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        CategoryService.findAllCategories().then(data => {
            setCategories(data)
            setIsLoading(false)
        })
    }, [isLoading])

    const deleteCategeory = (id) => {
        CategoryService.deleteCategoryById(id).then(() => setCategories(categories.filter(category => category.id != id)))
    }
    
    return (
        <div>
            <Title title={"Categories"}/>
            <div className='d-flex justify-content-between align-items-center my-4'>
                <div className="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                </div>
                <Link to="/category/save" className='btn btn-primary d-flex align-items-center'>
                    Add
                    <AiOutlinePlus />
                </Link>
            </div>
            { 
                !isLoading && 
                    categories.length !== 0 ?
                        <Table data={categories} onDelete={deleteCategeory}/> :
                        <p>No Data Found</p>
                    
            } 
        </div>
    )
}

export default Categories