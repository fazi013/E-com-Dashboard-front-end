import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();
    
    useEffect(()=>{
        const auth =localStorage.getItem('user');
        if(auth){
            Navigate('/');
        }
    
     })
    const handlelogin = async () => {
        //console.log(email,password);
        let result = await fetch("http://localhost:1000/login",
            {
                method: "post",
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            Navigate('/');
        } else {
            alert("Please Give us correct details");
        }
    }
    return (<div className="login">

        <input type="text" className="input" placeholder="email"
            onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" className="input" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} value={password} />
        <button onClick={handlelogin} className="button" type="button" >Login</button>


    </div>)
};
export default Login;