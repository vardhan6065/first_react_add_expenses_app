import React , {useState} from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear,setFilteredYear]=useState('2021');
    const filterChangeHandler= selectedYear=>{
        setFilteredYear(selectedYear);
        // console.log(selectedYear);
    };
 
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function
    //const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    //const result = words.filter(word => word.length > 6);

    const filteredExpenses=props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

    
    

    return (
        <li>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {/* {props.items.map((expense) => (
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amnt={expense.amount}
                date={expense.date}
                />
            ))} */}

            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>

            {/* {filteredExpenses.length ===0 ? (
                <p>No expenses found.</p>
            ):(
                filteredExpenses.map((expense) => (
                    <ExpenseItem 
                    key={expense.id}
                        title={expense.title}
                        amnt={expense.amount}
                        date={expense.date}
                    />
                ))
            )

            } */}

            {/* {filteredExpenses.length===0 && <p>No expenses found</p>}
            {filteredExpenses.length >0 && filteredExpenses.map((expense)=>(
                <ExpenseItem 
                key={expense.id}
                    title={expense.title}
                    amnt={expense.amount}
                    date={expense.date}
                />
            ))} */}


            {/* <ExpenseItem
                title={props.items[0].title}
                amnt={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amnt={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amnt={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amnt={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
        </li>
    );
}

export default Expenses;