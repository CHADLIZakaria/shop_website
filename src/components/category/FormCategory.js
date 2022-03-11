import React, {useEffect, useState} from 'react'
import Title from '../Title/Title'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import { useParams } from 'react-router-dom'
import CategoryService from '../../service/CategoryService'

const FormCategory = () => {
    const {id} = useParams()
    const [category, setCategory] = useState({})
    useEffect(() => {
        CategoryService.findCategoryById(id).then(value => setCategory(value.data)) 
    }, [])
    
    return (
        <>
            <Title title={"Update Category"} />
            <Formik 
                initialValues={{ name: category.name}} 
                enableReinitialize={true}
                validate={(values) => {
                    const errors = {}
                    if(!values.name) {
                        errors.name="Name is required"
                    }
                    return errors
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                <Form className='text-center'>
                    <div className='row mb-2 g-3 align-items-center'>
                        <div className='col-auto'>
                            <label className='col-form-label'>Name</label>
                        </div>
                        <div className='col-auto'>
                            <Field type="text" name="name"  className='form-control' />
                        </div>
                        <div className='col-auto'>
                            <ErrorMessage component="span" className='text-danger form-text' name='name'/>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default FormCategory