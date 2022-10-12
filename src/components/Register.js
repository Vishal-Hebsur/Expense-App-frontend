import React,{useState} from "react";
import { useDispatch } from "react-redux";

import { startRegisterUsers } from "../actions/usersActions";

const Register = (props) =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleChange  = (e) =>{
        let attr = e.target.name
        if(attr === 'name'){
            setName(e.target.value)
        }else if(attr === 'email'){
            setEmail(e.target.value)
        }else if(attr === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name,
            email,
            password
        }
        const tag=()=>{
            alert('Successfully creaqted an account!')
            setName('')
            setEmail('')
            setPassword('')
            
        }
        console.log('reg-data',formData)
        dispatch(startRegisterUsers(formData,tag))
        const late=()=>{
            props.history.push('/login')
        }
        const mytimeout = setTimeout(late, 3000)
        mytimeout()
        
    }
    
    return(
        <div>
            <h3>Registration-Desk</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" value={name} onChange={handleChange} placeholder="Enter name" /><br/>

                <input type='text' name="email" value={email} onChange={handleChange} placeholder="email" /><br/>

                <input type='text' name="password" value={password} onChange={handleChange} placeholder="password" /><br/>

                <input type='submit' value='register' /><br/>

            </form>
        </div>
    )
}

export default Register