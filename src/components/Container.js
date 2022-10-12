import React,{useState, useEffect} from "react";
import {Link, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import Home from "./Home";
import Settings from "./Settings";
import Profile from "./Profile";
import Register from "./Register";
import Login from "./Login";

import {updateLoginToken} from '../actions/loginActions'
import { startGetCategories } from "../actions/categoriesAction";
import { startGetExpenses } from "../actions/expensesActions";
import { startGetUser } from "../actions/usersActions";
import { startGetBudget } from "../actions/budgetActions";

const Container=(props)=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginToken, setLoginToken] = useState({})
  const dispatch = useDispatch()
  const store = useSelector((state)=>{
    return state
  })

  useEffect(()=>{
    const logintoken = JSON.parse(localStorage.getItem('token'))
    console.log(store)
    if(logintoken){
      setLoginToken(logintoken)
      updateLoginToken(logintoken)
      setIsLoggedIn(true)
    }
  },[])

  useEffect(()=>{
    if(Object.keys(loginToken).length > 0){
      dispatch(startGetUser(loginToken))
      dispatch(startGetBudget(loginToken))
      dispatch(startGetCategories(loginToken))
      dispatch(startGetExpenses(loginToken))
      }
  },[loginToken])

      return(
        <div style={{display : 'inline-flex'}}>
          <div>
            <ul style={{listStyle:'none'}} >
            {!isLoggedIn ? (
              <>
                <li style={{padding : '5px' }} ><Link to='/register' >Register</Link></li>
                <li style={{padding : '5px' }} ><Link to='/login' >Login</Link></li>

                
              </>
            ) : (
              <>
                <li style={{padding : '5px' }}><Link to='/home'>Home</Link></li>
                <li style={{padding : '5px' }} ><Link to='/settings'>Settings</Link></li>
                <li style={{padding : '5px' }} ><Link to='/profile'>Profile</Link></li>
              </>
            )}
                
            </ul>
        </div>

        <div style={{paddingLeft:'50px'}}>
            <Route path='/home' component={Home} exact={true} />
            <Route path='/settings' component={Settings} exact={true} />
            <Route path='/profile' component={Profile} exact={true} />
            <Route path='/register' component={Register} exact={true} />
            <Route path='/login' render={(props)=>{
              return <Login props={props} setIsLoggedIn={setIsLoggedIn} />
            }} exact={true} />
        </div>
    </div>
  )
}

export default Container