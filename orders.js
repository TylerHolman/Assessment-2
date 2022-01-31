/////////////////////////////////////////////////
///////////////////ORDERS.JS/////////////////////
/////////////////////////////////////////////////
/*
    In this file, you'll be writing a class
    to make tickets from order information.
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Ticket`.
    Make sure to call your constructor, and 
    require these 3 parameters: items, orderTime, 
    customerId. Additionally, set up a property
    called `status` that always has an initial
    value of 'queued'.

    Create a method on the class called `updateStatus`.
    The method should have one parameter, `newStatus`,
    which will be a string.

    Inside the method, set the value of `this.status`
    to be the new status that was sent in. Then
    console.log something like: 
    'The order for customer [CUSTOMERID] is
    now [STATUS].'
    Where CUSTOMERID and STATUS reference the values
    stored on the object.
*/
class Ticket {
    constructor(items, orderTime, customerId){ //constructor allows you to decide your placeholders/parameters for the values you will be inputting later on
     this.orderTimes = orderTime  //this. serves to assign the variable so it can be used in methods/other functions
     this.items = items
     this.customerID = customerId
     this.status = `queued`
    }
    updateStatus(newStatus){
      this.status =  newStatus
    console.log(`The order for customer ${this.customerID} is now ${this.status}.`)
    }
}




/*
    Create a new instance of your class.
    Save it to a variable called `firstTicket`.

    You can use this sample data or make
    up your own:
    food ordered: pizza, bread, and soda
    ordered at: 7:03 PM
    customer: 575
*/

let firstTicket = new Ticket(`pizza, bread, soda`, `7:03pm`, 575) //this creates an instance for to assign values to the class created so we can invoke the function to test if it works. 


/*
    Call the `updateStatus` method on
    `firstTicket` passing in the string
    'cooking'
*/

firstTicket.updateStatus(`cooking`) //assigns cooking to the parameter this.status by invoking the method updateStatus, which will print the string `The order for customer 575 is now cooking.` instead of it being `The order for customer 575 is now undefined.`