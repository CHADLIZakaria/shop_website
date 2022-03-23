import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Title from '../../components/Title/Title'
import CategoryService from '../../service/CategoryService'
import ProductService from '../../service/ProductService'

const FormProduct = () => {
    const {id} = useParams()
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
       CategoryService.findAllCategories().then(value => setCategories(value))
    }, [])
    
    return (
        <>
            <Title title={"Add Products"} /> 
            <Formik 
                initialValues={{ name: '', description: '', price: 0, category: '',  file: {}, details: ''}} 
                enableReinitialize={true}
                validate={(values) => {
                    const errors = {}
                    if(!values.name) {
                        errors.name="Name is required"
                    }
                    return errors
                }}
                onSubmit={(values) => {
                    ProductService.saveProduct(values)
  //                  navigate('/products')
                }}>
                    {({setFieldValue}) => (
                        <Form className='px-5 offset-2'>
                            <div className='row mb-2 g-3 align-items-center'>
                                <div className='col-3'>
                                    <label className='col-form-label'>Title</label>
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
                                    <label className='col-form-label'>Description</label>
                                </div>
                                <div className='col-6'>
                                    <Field type="text" name="description"  className='form-control' />
                                </div>
                                <div className='col-3'>
                                    <ErrorMessage component="span" className='text-danger form-text' name='description'/>
                                </div>
                            </div>
                            <div className='row mb-2 g-3 align-items-center'>
                                <div className='col-3'>
                                    <label className='col-form-label'>Price</label>
                                </div>
                                <div className='col-6'>
                                    <div class="input-group input-group">
                                        <Field type="text" name="price"  className='form-control' />
                                        <span class="input-group-text" id="inputGroup-sizing-sm">DH</span>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <ErrorMessage component="span" className='text-danger form-text' name='description'/>
                                </div>
                            </div>
                            <div className='row mb-2 g-3 align-items-center'>
                                <div className='col-3'>
                                    <label className='col-form-label'>Categories</label>
                                </div>
                                <div className='col-6'>
                                    <Field as='select' name='category' className='form-select'>
                                        {categories.map(category => 
                                            <option value={category.id} label={category.name} />  
                                        )}
                                    </Field>
                                </div>
                                <div className='col-3'>
                                    <ErrorMessage component="span" className='text-danger form-text' name='description'/>
                                </div>
                            </div>
                            <div className='row mb-2 g-3 align-items-center'>
                                <div className='col-3'>
                                    <label className='col-form-label'>Image du produit</label>
                                </div>
                                <div className='col-6'>
                                    <input type="file" name="file"  className='form-control' onChange={(e) => {
                                        setFieldValue('file', e.currentTarget.files[0])
                                    }}/>
                                </div>
                            </div>

                            <div className='row mb-2 g-3 align-items-center'>
                                <div className='col-3'>
                                    <label className='col-form-label'>Information du produit</label>
                                </div>
                                <div className='col-6'>
                                    <div class="input-group input-group">
                                        <Field name="details" component="textarea" rows="4"  className='form-control' />
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <ErrorMessage component="span" className='text-danger form-text' name='description'/>
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

export default FormProduct