import React from 'react'
import Title from '../../components/Title/Title'
import shopLoginPage from './shop-login-page.jpg'

const Login = () => {
  return (
    <>
        <div className='overlay position-absolute top-0 start-0 w-100'>
            <img src={shopLoginPage} className='w-100'/>
        </div>
        <div className='container'>

            <div className='row'>
                <div className='col-6'>
                    <img src={shopLoginPage} width={300} className='img-thumbnail'/>
                </div>
                <form className='col-6'>
                    <Title title={"Sign Up"} />
                    <div class="row mb-3">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="colFormLabel" placeholder="Username" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="colFormLabel" placeholder="Password" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login