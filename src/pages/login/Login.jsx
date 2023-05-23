import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div  className='loginLeft'>
          <h3 className='loginLogo'>SocialNetwork</h3>
          <span className='loginDesc'>Connect With Friends and Around the World</span>
        </div>
      </div>
      <div className='loginRight'>
        <div className='loginBox'>
          <input name='email' placeholder='email' className='loginInput' />
          <input name='password' placeholder='password' className='loginInput'/>
          <button className='loginButton'>Log In</button>
          <span className='loginForget'>ForgetPasword?</span>
          <button className='loginRegisterButton'>Create a New Account</button>
        </div>
          </div>
    </div>
  )
}

export default Login