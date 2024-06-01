console.log("Welcome utkarsh to learn playwright");

//----------------Varibales-------------
// 1. var
// 2. let
// 3. const



//---------------------Loop-----------------------
// 1. for 
// 2. while
// 3. do while
// 4. for each

//---------------------------------------------------------
//Q1 Create an array called expenses that contains at least 5 different expense amounts.
//   Calculate the total expenses by summing all the elements of the array.
//   Find the highest and lowest individual expenses within the array.

let expenses = [30,400,90,60,10]
console.log(expenses);

let sum = 0;
let hig = expenses[0];
let low = expenses[0];

for (let arr = 0; arr < expenses.length; arr++)
    {
        sum = sum + expenses[arr];

        if (expenses[arr] >= hig) {  
            hig = expenses[arr];     
        }

        if (expenses[arr] <= low) {  
            low = expenses[arr];     
        }
        
    }
    console.log("Total Expenses of Your : " + sum);
    console.log("individual Higest  Expenses of Your : " + hig);
    console.log("individual Lowest Expenses of Your : " + low);

    console.log("========================================================================");
    
    //---------------------------------------------------------
    //Q2  Create an array named studentNames with the names of your students.
    //    Add a new student name to the beginning of the array.
    //    Remove the last student name from the array.
    //    Alphabetize the student names within the array.

    //Answer below    
    let studentNames = ["Rahat","Rahul","Rohit","Shivi","PanditJi"];
    
    studentNames.unshift("Taruna");   //Inserts new elements at the start of an array, and returns the new length of the array.
    console.log(studentNames);
    
    studentNames.pop();
    console.log(studentNames);
    
    studentNames.sort();
    console.log(studentNames);


    console.log("========================================================================");

//-----------------------------------------------------------------------------------------
//Q3 You have an array called productPrices with various product prices.
//   Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
//   Use the filter method to create a new array called affordableProducts containing only products priced below $50
//   Calculate the total cost of all items in the affordableProducts array using the reduce method.

//Answer below
let productPrices = [90,40,70,85,30,65];

let discountedPrices = productPrices.map(productPrice => productPrice*10/100);
console.log(discountedPrices);

const affordableProducts = productPrices.filter(productPrice => productPrice < 50);
console.log(affordableProducts);

sum = 0;
const totalCost = affordableProducts.reduce((sum,affordableProduct) => sum+affordableProduct,0);
console.log(totalCost);