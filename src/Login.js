import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';




function Login() {
const user = useSelector(selectUser);


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

 
const dispatch = useDispatch();

  const HandleLogin = (e)=>{
   e.preventDefault();

  dispatch(login({
    name:name,
    email:email,
    password:password,
    loggedIn:true,
  }))

  }

  return (
    
    <div className='container'>
      <form className='login_form' onSubmit={(e)=>HandleLogin(e)}>
        <h1>Login</h1>
        <input type='name'
        placeholder='Name'
        value={name}
        onChange={(e) =>  setName(e.target.value)}
        />
        <input type='email'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type='password'
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type='submit' className='submit_btn'>Login</button>
      </form>
    </div>
    
  );
}

export default Login;
