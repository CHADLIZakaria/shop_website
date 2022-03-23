import React, { useEffect, useState } from 'react'
import CategoryService from '../../service/CategoryService'
import {Link} from 'react-router-dom'
import Title from '../../components/Title/Title'
import CommentService from '../../service/CommentService'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'

const Comments = () => {
    const [comments, setComments] = useState([])
    const [paginate, setPaginate] = useState({page: 1})
    useEffect(() => {
        CommentService.findAll(paginate.page).then(value => {
            setComments(value.data.results)
            setPaginate({...paginate, totalElements: value.data.totalElements, totalPages: value.data.totalPages})
        })
    }, [paginate.page])

    // const deleteCategeory = (id) => {
    //     CategoryService.deleteCategoryById(id).then(() => setCategories(categories.filter(category => category.id != id)))
    // }
    const onNavigate = (page) => {
        console.log(page)
        setPaginate({...paginate, page: page})
    }
    
    return (
        <div>
            <Title title={"Comments"}/>
            <Table data={comments} />
            <Pagination paginate={paginate} onClick={onNavigate}/>
        </div>
    )
}

export default Comments