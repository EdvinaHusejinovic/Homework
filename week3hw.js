// 1. Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["sausage", "onions", "peppers", "olives"];
console.log(pizzaToppings);

// 2. Create a greetCustomer function that prints a message that welcomes a guest and informs them of the available toppings by looping over pizzaToppings
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer(pizzaToppings) {
        console.log("Welcome to The Pizza House, our toppings are:");
    for (let topping of pizzaToppings) {
            console.log(topping);
    }
}
greetCustomer(pizzaToppings);

// 3. Create a getPizzaOrder function
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
    console.log(`One ${size} ${crust} crust pizza with ${toppings}. Coming up!`);
    const orderDetails = [size, crust, toppings];
    return orderDetails;
}

const size = "large";
const crust = "thick";
const topping1 = "sausage";
const topping2 = "onions";
const topping3 = "peppers";
const topping4 = "olives";

const order = getPizzaOrder(size, crust, topping1, topping2, topping3, topping4);
console.log("Order Details", order);

// 4. Create a preparePizza function
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking Pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza() {
    console.log("...your Pizza is cooking...");
    return {
    size: size,
    crust: crust,
    topping: toppings,
    };
}
let toppings = ["sausage", "onions", "peppers", "olives."];
console.log(preparePizza());

// 5. Create a servePizza function
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
function servePizza(pizza) {
    console.log(`Order up! Here's your ${size} ${crust} crust pizza with ${toppings}. Enjoy!`);
    return pizza;
}

console.log(servePizza());

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
//preparePizza();
//greetCustomer(pizzaToppings);
//getPizzaOrder(size, crust, topping1, topping2, topping3, topping4);
//servePizza();

// Bonus Challenge:
// 9. Figure out how to add "and" before the last topping in a list of toppings
// You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"
//function greetCustomer(toppings) {
//    console.log("Welcome to The Pizza House, our toppings are:" + listToppings(toppings));
//}
//function listToppings(toppings) {
//    if (toppings.length === 0) {
//        return "No toppings available";
//    } else if (toppings.length === 1) {
//        return toppings[0];
//    } else {
//        return toppings.slice(0, -1).join(', ') + ', and ' + toppings.slice(-1);
//    }
//}
//greetCustomer(pizzaToppings);
// This will print Welcome to The Pizza House, our toppings are:sausage, onions, peppers, and olives

// 10. In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). 
// Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.
//function getPizzaOrder(size, crust, ...toppings) {
//    if (toppings.length === 0) {
//        console.log(`One ${size} ${crust} crust cheese pizza coming up!`);
//    } else {
//        console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up!`);
//    }
//    return { size, crust, toppings };
//}

//const order = getPizzaOrder("large", "thick");
//console.log("Order Details", order);
// This will print One large thick crust cheese pizza coming up!

// 11. In getPizzaOrder, check the toppings the customer ordered against your list of available toppings.
// If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
//function getPizzaOrder(size, crust, ...toppings) {
//    if (toppings.length === 0) {
//        console.log(`One ${size} ${crust} crust cheese pizza coming up!`);
//    } else {
//        for (let topping of toppings) {
//            if (!pizzaToppings.includes(topping)) {
//                console.log(`Sorry, we don't offer ${topping}. Please order again.`);
//                return;
//            }
//        }
//        console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up!`);
//    }
//    return { size, crust, toppings };
//}
//const order = getPizzaOrder("large", "thick", "pinneapple");
//console.log("Order Details", order);
// This will print Sorry, we do not offer pinneapple. Please order again.
