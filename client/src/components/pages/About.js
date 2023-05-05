import React, { useState ,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const About = () => {

  const {id} = useParams();

  const [admins,setAdmins] = useState({})

  useEffect(()=>{
    fetch("http://localhost:8100/admin/"+id).then((res)=>{
      return res.json();
    }).then((resp)=>{
      setAdmins(resp); 
    }).catch((err)=>{
      console.log(err);
    })

  },[])

  return (
    <div className='container'>

        { admins &&
        <div>
          <h1 >The Name of student : {admins.name} </h1>
          <h3>Contact Details</h3>
          <h3>Email is :{admins.email}</h3>
           <Link className='btn btn-danger' to='/'>Back to home</Link>

          </div>
        }
    </div>
  )
}

export default About