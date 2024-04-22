import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Register() {
    const data = {
        name : "Register"
    }
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [xemail,setxEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    useEffect(()=>{
     axios.get("http://localhost:4000/users")
     .then((data)=>{
        setxEmail(data.data)
     })
    }, [xemail,setxEmail])
    

   const handleSubmit = (e)=>{
    e.preventDefault()
    var user = {name, email,password}
    let validation = {}
    if(name == ""){
        validation.name = "Enter Username"
    }
    if(email == ""){
        validation.email = "Enter Email"
    }
    if(password == ""){
        validation.password = "Enter Password"
    }

    const Emaildata = xemail.find((item)=> item.email == email)

    if(Emaildata){
        alert("Email id is already used")
    }
    else{
      if(Object.keys(validation).length == 0){
        axios.post("http://localhost:4000/users", user)
        .then((res)=>{
            if(res){
                toast.success('🦄 Register Successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    setTimeout(() => {
                        navigate('/login')
                       }, 6100);
            }
        })
      }
    }
    setErrors(validation)
   }

  return (
    <div>
      <Banner myData={data}/>
      <div className="container">
        <div className="row justify-content-center mt-3">
        <h4>Register</h4>
            <div className="col col-lg-4 ">
                <form onSubmit={handleSubmit} className='text-start'> 
                <div className='my-2'>                  
                  <label>Username</label>
                  <input type='text' className='form-control'  onChange={(e)=>setName(e.target.value)}/>
                  <span className='text-danger'>{errors.name}</span>
                </div>
                <div className='my-2'>                  
                  <label>Email</label>
                  <input type='text' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                  <span className='text-danger'>{errors.email}</span>
                </div>
                <div>                  
                  <label>Password</label>
                  <input type='text' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                  <span className='text-danger'>{errors.password}</span>
                </div>
                <div className='text-center mt-3'>         
                <input type="submit" className='btn btn-dark w-100' value={"Register"} /> 
                </div>
                <div className='text-center mt-2'>                   
                <Link to='/login'>Login</Link>
                </div>
                </form>
            </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Register
