import React from 'react'

import BudgetForm from './BudgetForm'
import CategoryList from './CategoryList'
import CategoryForm from './CategoryForm'

const Settings = (props) =>{
    return(
        <div>
            <h2>Settings</h2>
            <BudgetForm /><br/><br/>
            <CategoryForm /><br/><br/>
            <CategoryList />
        </div>
    )
}

export default Settings