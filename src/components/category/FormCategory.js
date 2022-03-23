import React, {useEffect, useState} from 'react'
import Title from '../Title/Title'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import CategoryService from '../../service/CategoryService'

const FormCategory = () => {
    const {id} = useParams()
    const [category, setCategory] = useState({name: '', file: {}})
    const navigate = useNavigate()
    useEffect(() => {
        if(id !== undefined) {
            CategoryService.findCategoryById(id).then(value => setCategory(value.data)) 
        }
    }, [])
    
    return (
        <>
            <Title title={"Update Category"} />
            <Formik 
                initialValues={{ name: category.name, file: {}}} 
                enableReinitialize={true}
                validate={(values) => {
                    const errors = {}
                    if(!values.name) {
                        errors.name="Name is required"
                    }
                    return errors
                }}
                onSubmit={(values) => {
                    CategoryService.saveCategory(values)
                    navigate('/categories')
                }}>
                    {({setFieldValue}) => (
                        <Form className='px-5'>
                            <div className='row mb-2 g-3 align-items-center'>
                                <div className='col-3'>
                                    <label className='col-form-label'>Name</label>
                                </div>
                                <div className='col-6'>
                                    <Field type="text" name="name"  className='form-control' />
                                </div>
                                <div className='col-3'>
                                    <ErrorMessage component="span" className='text-danger form-text' name='name'/>
                                </div>
                            </div>
                            <div className='row mb-2 g-3 align-items-center'>
                                <div className='col-3'>
                                    <label className='col-form-label'>File</label>
                                </div>
                                <div className='col-6'>
                                    <input type="file" name="file"  className='form-control' onChange={(e) => {
                                        setFieldValue('file', e.currentTarget.files[0])
                                        
                                    }}/>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </Form>
                    )}
            </Formik>
            {/* <Formik 
                initialValues={{name: category.name, file: category.file}}
                render={({value, setFieldVa})}
            /> */}
        </>
    )
}

export default FormCategory