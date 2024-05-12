#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    PKR: 1,
    USD: 0.0036,
    AED: 0.013,
    EURO: 0.0033
};
const conversion = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select your currency which you want to convert",
        choices: [
            "PKR",
            "USD",
            "EURO",
            "AED"
        ]
    },
    { name: "toCurrency",
        type: "list",
        message: "select the currency you want your currency  convert to",
        choices: [
            "PKR",
            "USD",
            "EURO",
            "AED"
        ]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter Amount"
    }
]);
let from = currency[conversion.fromCurrency];
let to = currency[conversion.toCurrency];
console.log(conversion);
// if(conversion.fromCurrency === "USD"){
//   from = 1
// };
// if(conversion.fromCurrency === "EURO"){
//   from = 1
// };
// if(conversion.fromCurrency === "PKR"){
//   from = 1
// };
// if(conversion.fromCurrency === "AED"){
//   from = 1
// };
let amount = conversion.amount;
let baseAmount = amount / from;
let convertedAmount = baseAmount * to;
console.log(convertedAmount);
