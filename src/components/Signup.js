
import React ,{useState} from "react";

const Signup=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const collectData=()=>{
        console.log(name,email,password);
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