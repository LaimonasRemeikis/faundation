import axios from 'axios';
import React, { useState } from 'react'

function Donation({id}) {

    const[formData, setFormData]= useState({idea_id: id})

    const HandleSubmit = () =>{
        axios
        .post("http://localhost:3007/patron-manager", formData)
        .then((res) => {
          console.log(res);
        });
    }

    const HandleChange = (key,value) =>{
        
        const newFormData = {...formData, [key]: value};
        console.log(value)
        setFormData(newFormData);
    }


  return (
    <div>
        <input onChange={(event)=>HandleChange('name', event.currentTarget.value)} type="text" placeholder='Name' />
        <input onChange={(event)=>HandleChange('fund_sum', event.currentTarget.value)} type="number" placeholder='Amount' />
        <button onClick={()=>HandleSubmit()} className='btn'>Donate</button>

    </div>
  )
}

export default Donation;