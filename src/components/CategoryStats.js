import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js'
import {Pie, Bar} from 'react-chartjs-2'
import { useSelector } from "react-redux";

ChartJS.register(ArcElement,Tooltip,Legend, CategoryScale, LinearScale, BarElement, Title)

const CategoryStats = (props) =>{
    const  categories = useSelector((state)=>{
        return state.categories
    }) || {}

    const expenses = useSelector((state)=>{
        return state.expenses
    }) || {}

    const options ={
        responsive: true,
        plugins :{
            title : {
                display : true,
                text : 'Category wise ditribution table'
            }
        }
    }

    const data1 =()=>{
        let dataObj={}
        expenses.map((exp)=>{
            if(!dataObj.hasOwnProperty(exp.categoryId)){
                return dataObj[exp.categoryId] = exp.amount
            }else{
                return dataObj[exp.categoryId] += exp.amount
            }
        })
        let dataArray = Object.keys(dataObj).map((ele)=>{ return dataObj[ele]})
        return dataArray 
    } 

    const barData = {
        labels : categories.map((cat)=>{return `${cat.name}`}),
        datasets : [{
            label : 'Expenses',
            data : data1(),
            backgroundColor : 'rgba (245, 150, 70, 20)'
        }]
    }

    const data = {
        labels : categories.map((cat)=>{return `${cat.name}`}),
        datasets : [
            {
                label : 'category-wise',
                data : data1(),
                backgroundColor : [
                    'rgba(255, 20, 150, 100)',
                    'rgba(200, 52, 205, 255)',
                    'rgba(155, 106, 246, 50)',
                    'rgba(100, 152, 25, 200)',
                    'rgba(53, 200, 55, 140)',
                    'rgba(15, 255, 94, 20)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                borderWidth: 1,
            }
        ]
    }

    return(
        <div>
            <h3>CategoryStats</h3>
            {categories.length <= 5 ? (
                <div>
                    <Pie data={data}  />
                </div>
            ) : (
                <div>
                    <Bar options={options} data={barData} />
                </div>
            )}
        </div>
    )
}

export default CategoryStats