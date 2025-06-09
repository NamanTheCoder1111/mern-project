import React, { useEffect, useState } from 'react'
import PhotoUpload from './PhotoAttachment'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const [name , setName] = useState()
  const [email ,setEmail] = useState();
  const [password , setPassword ] =useState();
  const [signup ,setSignUp] = useState(false);
  const [image ,setImage] = useState();
  const [error,setError] = useState()
  const navigate = useNavigate();


  const handleSubmit = () =>{
    e.preventDefault();
    setError('');
    setSignUp(true);
  }


  useEffect(()=>{   
    const signup = async ()=>{
      try{
      const response = await fetch('/api/v1/auth/register',{
        method : "POST",
        headers : {'Content-Type' :  'application/json'},
        body: JSON.stringify({ fullName,email, password ,profileImageUrl }),
      })
       if(!response.ok){
        const { message } = await res.json();
          throw new Error(message || 'SignUp failed');
       }
    } catch (err) {
      setError(err.message);
    } finally {
        setSignUp(false)
        setName('')
        setEmail('')
        setPassword('')
        setImage('')
    }
    signup()
  }

  },[signup,name,email,password,image])

  return (
    <div className='bg-white p-10 h-[100vh] absolute w-[100vw] '>
    <p className='text-3xl font-bold'>Expense Tracker</p>
    <div className='h-[80%] relative  w-[60%] pt-4 '>
     <p className='text-3xl font-bold'>Create an Account</p>
     <p className='text-xs font-bold text-gray-600'>Join us today by entering details below</p>
     <form onSubmit={handleSubmit}>
     <div className='pt-4'>
        <PhotoUpload image={image} setImage={setImage}/>
     </div>
     <div className='flex flex-row gap-2 w-[100%]'>
      <div className='w-[50%]'>
      <p className='text-sm font-bold text-gray-600 pt-4'>Full Name</p>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} className='border-2 border-gray-300 bg-gray-100 w-full mt-3.5 h-12 rounded p-2 '/>
      </div>
      <div className='w-[50%]'>
       <p className='text-sm font-bold text-gray-600 pt-4'>Email Address</p>
       <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='border-2 border-gray-300 bg-gray-100 w-full mt-3.5 h-12 rounded p-2 '/>
       </div>
     </div>
     <div>
       <p className='text-sm font-bold text-gray-600 pt-4'>Password</p>
       <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 border-gray-300 bg-gray-100 w-[100%] mt-3.5 h-12 rounded p-2 '/>
     </div>
     <button className='text-xl bg-purple-400 text-white cursor-pointer font-bold rounded p-2 w-[70%] mt-3.5' type='submit'>SignUp</button>
     </form>
     <p className='text-sm font-bold pt-5'>Already have an account ?<span className='text-purple-500 underline cursor-pointer' onClick={()=>navigate('/')}>Login</span></p>
    </div>

</div>
  )
}

export default SignUp