import React,{useState} from "react";
import { useDispatch } from "react-redux";

import { startLoginUsers } from "../actions/usersActions";

const Login = (props) =>{
    const {setIsLoggedIn} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        let attr = e.target.name
        if(attr === 'email'){
            setEmail(e.target.value)
        }else if(attr === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            email,
            password
        }
        console.log(formData)
        const clearForm=()=>{
            setEmail('')
            setPassword('')
            setIsLoggedIn(true)
        }
        dispatch(startLoginUsers(formData, clearForm))
    }

    return(
        <div>
            <h3>Log-In Desk</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' value={email} onChange={handleChange} placeholder='email' /><br/>

                <input type='text' name='password' value={password} onChange={handleChange} placeholder='password' /><br/>

                <input type='submit' value='Login' /><br/>

            </form>
        </div>
    )
}

export default Login