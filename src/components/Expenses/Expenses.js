import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const yearChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.data.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter year={filteredYear}  onYearChange={yearChangeHandler} />
                <ExpensesChart expenses = {filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>

    )
}

export default Expenses