import React, { useState } from "react";
import { Button } from "../Button";

function Select({ value, setCurrency }){
    return (
        <select value={value} onChange={(event) => setCurrency(event.target.value)}>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
        </select>
    );
}

function Calculator() {
    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('PLN');
    const [currencyTo, setCurrencyTo] = useState('USD');
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://api.ratesapi.io/api/latest?base=PLN')
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="number" placeholder="Amount" onChange={
                    (event) => {
                        setAmount(event.target.value);
                    }} />
            </div>
            <div>
                <span>From:</span>
                <Select value={currencyFrom} setCurrency={setCurrencyFrom}/>
            </div>
            <div>
                <span>To:</span>
                <Select value={currencyTo} setCurrency={setCurrencyTo}/>
            </div>
            <div>Result: {amount}</div>
            <Button type="submit">Send</Button>
        </form>
    )
}

export default Calculator;
