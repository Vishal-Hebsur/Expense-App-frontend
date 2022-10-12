import React from "react"
import { useSelector } from "react-redux"
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Budget = (props) =>{
    const budget = useSelector((state)=>{
        return state.budgets[0]
    }) || {}
    const expenses = useSelector((state)=>{
        return state.expenses
    }) || {}

    const TotalExpense=()=>{
    let sum = 0
    expenses.forEach(ele => { return sum +=ele.amount})
    return sum
    }

    const chartValue = (TotalExpense()/budget.budget)*100


    return(
        <div style={{display:'inline-flex'}}>
            <div style={{width:'200px', height:'200px', paddingLeft:'20px'}}>
                <h3>Budget overview</h3>
                <CircularProgressbar 
                value={chartValue} 
                maxValue={100} 
                text={`${chartValue}% spent`} 
                strokeWidth={5}
                styles={buildStyles({
                    textSize:'13px'
                })}
                />
            </div>
            <div style={{padding:'50px'}}>
                <h4>Total Budget</h4>
                <h4> {budget.budget} </h4>
                <h4>Total Expenses</h4>
                <h4> {TotalExpense()} </h4>
            </div>
            
        </div>
    )
}

export default Budget