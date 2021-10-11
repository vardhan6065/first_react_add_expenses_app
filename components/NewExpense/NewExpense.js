    import React,{useState} from 'react';

    import ExpenseForm from './ExpenseForm';
    import './NewExpense.css';

    const NewExpense = (props)=>{
        const [isEditing , setIsEditing]=useState(false);
        const saveExpenseDataHandler=(enteredExpenseData)=>{
        

        const expenseData={
            ...enteredExpenseData,                                                  //const numbers1 = [1, 2, 3, 4, 5];
            id: Math.random().toString(),                                           //const numbers2 = [ ...numbers1, 1, 2, 6,7,8]; // this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
        }
        
        
        // console.log(expenseData);
        props.onAddExpense(expenseData);

        //to return form to single button state
        setIsEditing(false);
    };

    const startEditingHandler=()=>{
        setIsEditing(true);
    };

    const stopEditingHandler=()=>{
        setIsEditing(false);
    }

        return (
            <div className="new-expense">
                {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
                {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
            </div>
        );
    };

    export default NewExpense;