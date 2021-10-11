// import React , {useState} from 'react';
import React  from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

    // const clickHandler=()=>{
    //     console.log("clicked!!!");
    // };


    // const [title, setTitle]=useState(props.title);

    // function clickHandler(){
    //     setTitle("updated!!");
    //     console.log(title);
    // };

    // console.log("expense item updated again");

    return(
    <Card className="expense-item">
        <ExpenseDate
            date={props.date}
        ></ExpenseDate>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amnt}</div>
        </div>
        {/* <button onClick={()=>{console.log('clicked!!!')}}>Change Title</button> */}
        {/* <button >Change Title</button> */}
        
    </Card>
    );
}
   
export default ExpenseItem; 


