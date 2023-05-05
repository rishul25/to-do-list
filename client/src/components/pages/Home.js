
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const[admins,setAdmins] = useState(null);

  const navigate = useNavigate()

  const LoadDetails=(_id)=>{

   navigate(`/about/${_id}`)
    

  }

  const LoadEdit = (_id)=>{

    navigate(`/about/edit/${_id}`)

  }

  const RemoveDetails = (_id)=>{

    if(window.confirm('Do You want to remove ?')){
      fetch("http://localhost:8100/admin/"+_id,{
        method:"DELETE"
      }).then((res)=>{

        alert("Removed Succesfully!")
        window.location.reload();

      }).catch((err)=>{
        console.log(err.message)
      })

    }

  }

  useEffect(()=>{
    fetch("http://localhost:8100/admin").then((res)=>{
      return res.json();
    }).then((resp)=>{
      setAdmins(resp); 
    }).catch((err)=>{
      console.log(err);
    })

  },[])



  return (
    <div className='container'>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Message</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    

    { admins &&
      admins.map(items=>(
        
          <tr key={items._id}>
          <th scope="row">{items._id}</th>
          <td>{items.name}</td>
          <td>{items.gender}</td> 
          <td>{items.email}</td>
  
          <td><a onClick={()=>{LoadEdit(items._id)}} className='btn btn-success'>Edit</a></td>
          <td><a onClick={()=>{RemoveDetails(items._id)}} className='btn btn-danger'>Remove</a></td>
          <td><a onClick={()=>{LoadDetails(items._id)}} className='btn btn-success'>Details</a></td>
        </tr>
        
      ))
    }

  </tbody>
</table>
    </div>
  )
}

export default Home