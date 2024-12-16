
import React ,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const Signup=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const Navigate = useNavigate();
 useEffect(()=>{
    const auth =localStorage.getItem('user');
    if(auth){
        Navigate('/');
    }

 })

    const collectData= async()=>{
        console.log(name,email,password);
        let result =await fetch('http://localhost:1000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{'Content-Type':'application/json'},
            
        });
        result= await result.json();
        console.log(result);
        if(result){
            localStorage.setItem('user',JSON.stringify(result));
            Navigate('/');
        }

    }
    return(
        <div  className="rigester">
            <h1>Register yourself</h1>
            <input className="input" type="text"
            value={name} onChange={(e)=>setName(e.target.value)}
             placeholder="Enter Name"></input>

            <input className="input" type="text"
            value={email} onChange={(e)=>setEmail(e.target.value)}
             placeholder="Enter email"></input>
           
            <input className="input" type="password" 
            value={password} onChange={(e)=>setPassword(e.target.value)}
             placeholder="Enter password"></input>
            <button onClick={collectData} className="button" type="button" > Rigester</button>
        </div>
    )
};
export default Signup; 