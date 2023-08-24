import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function AddCustomer() {
  const [newCustomer, setNewCustomer] = useState({
    companyName: "",
    contactName: "",
    contactTitle: "",

  });

  const handleSubmit = async(e) => {
    e.preventDefault();
 
    try{
      const res = await axios.post('https://northwind.vercel.app/api/customers' , newCustomer)
      console.log("Response" , res.data)

      setNewCustomer({
        companyName: "",
        contactName: "",
        contactTitle: "",

      })
    } catch(error){
      console.log("Error" , error)
    }


  };

const handleChange = (e) =>{
setNewCustomer({...newCustomer , [e.target.name] : e.target.value})
}




  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
     
      </nav>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="companyName">Company Name</label>
          <input
            value={newCustomer.companyName}
            name="companyName"
            id="companyName"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="contactName">Contact Name</label>
          <input
            value={newCustomer.contactName}
            name="contactName"
            id="contactName"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="contactTitle">Contact Title</label>
          <input
            value={newCustomer.contactTitle}
            name="contactTitle"
            id="contactTitle"
            type="text"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Customer</button>
      </form>
    </>
  );
}

export default AddCustomer;
