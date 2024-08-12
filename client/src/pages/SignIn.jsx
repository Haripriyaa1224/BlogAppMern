import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {Alert, Button, Label, Spinner, TextInput} from 'flowbite-react'
import axios from 'axios';

const SignIn = () => {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]:e.target.value.trim()});
    // console.log(formData)
  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault();

    try{
      setLoading(true);
      setErrorMessage(null);

      
      const res = await axios.post('/api/auth/signin', formData)
      // console.log(res.data);
      setLoading(false);
      if(res.status === 200){
        navigate('/home');
        
      }
    }catch(err){
      // console.log(err.response.data.message);
      setErrorMessage(err.response.data.message);
      
      setLoading(false);
    }
    
    
  }
  

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Hari's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={onSubmitHandler}>

            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange} required/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange} required autoComplete="current-password"/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (<><Spinner size='sm' /><span className='pl-3'>Loading...</span></>) : 'Sign In'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (<Alert className='mt-5' color='failure'>{errorMessage}</Alert>)}
        </div>
      </div>
      
    </div>
 
  )
}

export default SignIn