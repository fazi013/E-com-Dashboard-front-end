import React, { useState } from "react";
 const Addproduct=()=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const [error,setError]=useState(false);
    
    const handlebutton = async()=>{
        if(!name||!price||!category||!company){
            setError(true);
            return false;
        }
        const userid = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:1000/add-product",
            {
                method: "post",
                body: JSON.stringify({ name,price,category,company,userid }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        result = await result.json();
        console.log(result);
    }
    return(
        <div className="addproduct">
            <h1>Add product on this page</h1>
            <input type="text" placeholder="Enter Product Name" className="input"
            onChange={(e)=>setName(e.target.value)} value={name}></input>
           {error && !name&&<span className="validation">*enter name</span>} 

            <input type="text" placeholder="Enter Product Price" className="input"
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            {error && !price&&<span className="validation">*enter Price</span>}

            <input type="text" placeholder="Enter Product Category" className="input"
            onChange={(e)=>setCategory(e.target.value)} value={category}></input>
            {error && !category&&<span className="validation">*enter category</span>}

            <input type="text" placeholder="Enter Product Company" className="input"
            onChange={(e)=>setCompany(e.target.value)}value={company}></input>
            {error && !company&&<span className="validation">*enter company name</span>}

            <button className="button" 
            onClick={handlebutton}>Add Product</button>
        </div>
    )
 }

 export default Addproduct;