///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = { //assign the variable pizza to an object that has 6 properties
    name: `Chogath`,
    price: 10,
    category: `Entree`,
    popularity: 9,
    rating: 8,
    tags: [`Amazing`, `Delicious`, `gluten-free`] //will return tags as an array
}

// console.log(pizza)


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/
console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[1]) //grabs the variable pizza and goes to the object tags, tags is an array so if we want to pick a certain string we must choose the index with [#] following tags


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

 const {price} = pizza //this will destructure the object of price from pizza so we can call it by just typing price

 console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

const {category} = pizza

console.log(category)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/
const foodArr = [
   {
    name: `Cho2`,
    price: 15,
    category: `Entree`,
    popularity: 10,
    rating: 10,
    tags: [`Solid choice`, `cheese-extreme`, `meat lovers`]
   },
   {
    name: `Cho1`,
    price: 11,
    category: `Entree`,
    popularity: 6,
    rating: 5,
    tags: [`vegetarian`, `gluten-free`, `all natural`]
   }, 
   {
    name: `Cho3`,
    price: 8,
    category: `appetizer`,
    popularity: 8,
    rating: 8,
    tags: [`vegan`, `gluten-free`, `all natural`]
   },
   {
    name: `Cho4`,
    price: 18,
    category: `Entree`,
    popularity: 7,
    rating: 7,
    tags: [`vegan`, `gluten-free`, `all natural`]
   },
   {
    name: `Cho5`,
    price: 10,
    category: `Entree`,
    popularity: 9,
    rating: 9,
    tags: [`cheese-extreme`, `five-cheese`, `no meat`]
   }
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

const filteredFood = foodArr.filter(pizzas => pizzas.tags.includes(`cheese-extreme`)) //assign a parameter in a callback function which was pizzas => then use      pizzas.tags to determine what object we wanted to cipher through, and includes will go through each individual string within the tags array and only return the pizzas with a tag of the input we type into includes().
   
console.log(filteredFood)


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

const filterByProperty = (property, number, type) =>{ //assign an object 3 parameters
    const filteredArray = foodArr.filter(pizza => {  //assign filteredArray to be what we filter through in the foodArr
        if(type === `above`){ //this will assign the type parameter to the string `above`
            return pizza[property] > number //this will take the parameter pizza and cipher through the array depending on what we assign to the parameter of property, doing this makes property a flexible parameter and will be able to look for (popularity, price, rating).
        }else if(type === `below`){ //if the condition is not met then it will check this statement which assigns the type parameter to `below`
            return pizza[property] < number //this uses the pizza parameter and ciphers through the array to find the `string` we assigned to the parameter of property
        }
    })
    return filteredArray //once the function has went through the objects in the array, it will then assign each object that met the conditions above and assign them to the filteredArray. This will allow it to be invoked/console.log with an output and not blank []
}


/*
Invoke the `filterByProperty` function passing
in a value for each paramter.

You'll have to console.log to see the filtered array
*/

console.log(filterByProperty(`price`, 12, `below`))
