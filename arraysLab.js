
// let oddNumbers = [1, 3, 5, 7, 9,  10, 11, 13, 15, 17, 19, 20];

// write a function that will check if this array is ONLY odd numbers.
// Bonus: replace any even numbers with odd numbers
 
let oddNumbers = [1, 3, 5, 7, 9, 10, 11, 13, 15, 17, 19, 20];

const checkIfOdd = () => {
    for (let i = 0; i <= oddNumbers.length - 1; i++) { // Remove comma and use <= instead of < =
        let oddball = oddNumbers[i];
        if (oddball % 2 === 0) {
            console.log("even " + oddball);
        } else {
            console.log("odd " + oddball);
        }
    }
}

checkIfOdd();

 checkIfOdd()











// const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];
// 2.  Write a function that will Calculate the average temperature of this array. 
// Also find the highest temperature and log it. 

let average="";
const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];

let sum=fahrenheitTemps.reduce((acumulator, currentValue)=>{
    return acumulator+currentValue
    average=acumulator/fahrenheitTemps.length
}
 

 

// const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// 3. Write a function that will search this array for your favorite fruit. If your favorite fruit isn't found, add it!

 









// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];

// 4. write a function that will shorten each string to just it's first 3 characters ("January" turns into  "Jan")


 

// const mixedData = [42, 'hello', true, 3.14, 'world', false, null, undefined, 'goodbye', 7];

// 5. Make a new array called onlyStrings. Loop through mixed Data and push only things that are string data type to this new array. 