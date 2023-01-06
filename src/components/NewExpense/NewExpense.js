import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseHandler = (expense) => {
        props.onAddExpense(expense)
    }

    const formEditHandler = () => {
        setIsEditing(true);
    }

    const onCancelForm = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button type='button' onClick={formEditHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} cancelFormHandler={onCancelForm}/>}
        </div>
    )
}

export default NewExpense