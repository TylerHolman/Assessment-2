///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((acc, ele) => { //reduces callback function is (()=>{}, ) and passing another argument besides the callback function which is illustrated by the comma and will serve as the starting value for the accumulator.  Because the values are an array of objects we must set the first value of the accumulator so it doesn't start adding from an object parameter over a number. 
   // console.log(acc, ele) //to show how it is adding each price
    return acc + ele.price //this will return the acc + ele.price to the callback function cart.reduce  
}, 0) //this assigns the first acc value to 0 then adds the ele.price which is 9.99 together... without the 0 the function would try and add pizza + 9.99 which would return Object because it is NaN

//const summedPrice = cart.reduce((acc, ele) => acc + ele.price, 0) another way to write the same function but on one line

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) =>{ //creates a function called calcFinalPrice and assigning it three variables
    return (cartTotal * (1 + tax)) - couponValue //after invoking the function with the arguments we want, we use the return tell each parameter what they need to do. In this case we will have cartTotal * (tax) - couponValue. So whatever numbers we input will be substituded in place of their parameters.
}

console.log(calcFinalPrice(10, 2, .06)) //10 would replace cartTotal, 2 would replace couponValue, and .06 would replace tax.


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    customer object will have:
    firstName: `string`
    lastName: `string`
    email: `string`
    creditCard: number
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
firstName: `Tyler`,
lastName: `Holman`,
email: `holmanholman@bilibili.com`,
creditCard: 12504956960395
}

console.log(customer)

/*customer.firstName = `John`
customer.lastName = `Andrew`
customer.email = "johnandrew@yahoo.com"
customer.creditCard = 12958603305
console.log(customer)*/ //the above will assign new values to the object customer
