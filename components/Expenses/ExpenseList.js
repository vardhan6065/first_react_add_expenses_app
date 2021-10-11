import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";


const ExpenseList=(props)=>{
    if(props.items.length===0)
    {
        return <h2 className="expenses-list__fallback">Nothing found.</h2>;
    }



    return (
        <ul className="expenses-list">
        {props.items.map((expense) => (        //The Array.map() method creates a new array from the results of calling a function for every element.
            <ExpenseItem                                            //const numbers = [4, 9, 16, 25];
            key={expense.id}                                        //document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);  o/p : 2,3,4,5 
                title={expense.title}
                amnt={expense.amount}
                date={expense.date}
            />
        ))}
        </ul>
    )
}

export default ExpenseList;

