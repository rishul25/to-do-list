import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Contact = () => {

  const navigate  = useNavigate()

  const [name,setName] = useState("");
  const [gender,setGender] = useState("");
  const [email,setEmail] = useState("");
  const [role,setRole] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit=(e)=>{
      e.preventDefault();

      const datas = {name,gender,email,role,password};
      

      fetch("http://localhost:8100/register",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(datas)
      }).then((res)=>{

        alert("Saved Succesfully!")
        navigate("/");

      }).catch((err)=>{
        console.log(err.message)
      })


      
  }


  return (
    <div className='container'>

<form  onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
    <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> Title </label>
    <input type="text" className="form-control" value={gender} onChange={e=>setGender(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={e=>setEmail(e.target.value)} aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> Message </label>
    <input type="text" className="form-control" id="exampleInputEmail1" value={role} onChange={e=>setRole(e.target.value)} aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} id="exampleInputPassword1" />
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Contact