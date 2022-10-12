import React from 'react'
import { useSelector } from 'react-redux'

const Profile = (props) =>{
    const user = useSelector((state)=>{
        return state.users
    })

    return(
        <div>
            <h3>Profile</h3>
            <h3>Name : {user[0].name} </h3>
            <h4>email : {user[0].email} </h4>
        </div>
    )
}

export default Profile