// 1. Explain event delegation

// One of the hot methodologies in the JavaScript world is event delegation, and for good reason.  
// Event delegation allows you to avoid adding event listeners to specific nodes; 
//  instead, the event listener is added to one parent.  That event listener analyzes bubbled events 
// to find a match on child elements.  The base concept is fairly simple but many people don't 
// understand just how event delegation works.  Let me explain the how event delegation works and 
// provide pure JavaScript example of basic event delegation.


// Let's say that we have a parent UL element with several child elements:

// <ul id="parent-list">
// 	<li id="post-1">Item 1</li>
// 	<li id="post-2">Item 2</li>
// 	<li id="post-3">Item 3</li>
// 	<li id="post-4">Item 4</li>
// 	<li id="post-5">Item 5</li>
// 	<li id="post-6">Item 6</li>
// </ul>


// Let's also say that something needs to happen when each child element is clicked.  
// You could add a separate event listener to each individual LI element, but what if LI elements 
// are frequently added and removed from the list?  Adding and removing event listeners would 
// be a nightmare, especially if addition and removal code is in different places within your app.  
// The better solution is to add an event listener to the parent UL element.  
// But if you add the event listener to the parent, how will you know which element was clicked?

// Simple:  when the event bubbles up to the UL element, you check the event object's target property 
// to gain a reference to the actual clicked node.  Here's a very basic JavaScript snippet which 
// illustrates event delegation:

// // Get the element, add a click listener...
// document.getElementById("parent-list").addEventListener("click", function(e) {
// 	// e.target is the clicked element!
// 	// If it was a list item
// 	if(e.target && e.target.nodeName == "LI") {
// 		// List item found!  Output the ID!
// 		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
// 	}
// });


// Start by adding a click event listener to the parent element.  When the event listener is triggered, 
// check the event element to ensure it's the type of element to react to.  If it is an LI element, boom:  
// we have what we need!  If it's not an element that we want, the event can be ignored.  
// This example is pretty simple -- UL and LI is a straight-forward comparison.  
// Let's try something more difficult.  Let's have a parent DIV with many children but 
// all we care about is an A tag with the classA CSS class:

// // Get the parent DIV, add click listener...
// document.getElementById("myDiv").addEventListener("click",function(e) {
// 	// e.target was the clicked element
//   if (e.target && e.target.matches("a.classA")) {
//     console.log("Anchor element clicked!");
// 	}
// });


// Using the Element.matches API, we can see if the element matches our desired target.

// Since most developers use a JavaScript library for their DOM element and event handling, 
// I recommend using the library's method of event delegation, as they are capable of advanced
// delegation and element identification.

// Hopefully this helps you visually the concept behind event delegation and convinces you of delegation's power!





// 2. Explain how `this` works in JavaScript

// The `this` keyword is used to refer to an object that the function where this is used is bound to. The `this`
// keyword not only refers to the object but also contains the value of the object.

// It is a shortcut reference to the "antecedent (the noun that the pronoun refers to) object" - 

// When a function executes it gets the `this` property - a variable with the value of the object that 
// invokes the function where this is used.

// ** `This` is not assigned a value until an object invokes the function where `this` is defined. **

// ** The value it is assigned is based EXCLUSIVELY on the object that invokes the this function. ** 

// Tricky areas:

// 2a. `This` when used in a method passed as a callback.

//     // We have a simple object with a clickHandler method that we want to use when a button on the page is clicked​
//     var user = {
//     data:[
//     {name:"T. Woods", age:37},
//     {name:"P. Mickelson", age:43}
//     ],
//     clickHandler:function (event) {
//     var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
// ​
//     // This line is printing a random person's name and age from the data array​
//     console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
//     }
//     }
// ​
//     // The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object​
//     // And the output will be undefined because there is no data property on the button object​
//     $ ("button").click (user.clickHandler); // Cannot read property '0' of undefined



// Solution: 

// Use bind, call, or apply

// $("button").click (user.clickHandler.bind(user)); // P. Mickelson 43

// 2b. `This` inside of a closure


//     var user = {
//     tournament:"The Masters",
//     data      :[
//     {name:"T. Woods", age:37},
//     {name:"P. Mickelson", age:43}
//     ],
// ​
//     clickHandler:function () {
//     // the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.​
// ​
//     this.data.forEach (function (person) {
//     // But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user object.​
//     // This inner function cannot access the outer function's "this"​
   
//     console.log ("What is This referring to? " + this); //[object Window]​
 
//     console.log (person.name + " is playing at " + this.tournament);
//     // T. Woods is playing at undefined​
//     // P. Mickelson is playing at undefined​
//     })
//     }
// ​
//     }
// ​
//     user.clickHandler(); // What is "this" referring to? [object Window]

// Solution:

// To capture the value of `this` when it refers to the user object we have to set it to another variable
// We set the value of "this" to theUserObj variable, so we can use it later​

//     clickHandler:function (event) {
//     var theUserObj = this;
//     this.data.forEach(function(person) {
//     // Instead of using this.tournament, we now use theUserObj.tournament​
//     console.log (person.name + " is playing at " + theUserObj.tournament);
//     })
//     }



// 2c. `This` when a method is assigned to a variable







// 2d. `This` when borrowing methods








// 3. Explain how prototypal inheritance works







// 4. What do you think of AMD vs CommonJS?








// 5. Explain why the following doesn't work as an IIFE: `function foo(){ }();`.

// An immediately-invoked function expression (or IIFE, pronounced "iffy") is a JavaScript 
// programming language idiom which produces a lexical scope using JavaScript's function scoping. 
// Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, 
// protect against polluting the global environment and simultaneously allow public access to methods 
// while retaining privacy for variables defined within the function.

// Immediately-invoked function expressions may be written in a number of different ways. A common convention 
// is to enclose the function expression – and optionally its invocation operator – with the grouping operator, 
// in parentheses, to tell the parser explicitly to expect an expression. Otherwise, in most situations, when the 
// parser encounters the function keyword, it treats it as a function declaration (statement), 
// and not as a function expression.

// (function () { /* ... */ })();
// (function () { /* ... */ }());
// (() => { /* ... */ })(); // With ES6 arrow functions (though parentheses only allowed on outside)



//  -- What needs to be changed to properly make it an IIFE?


// function foo(){ }();

// ==>

// (function foo(){ })();





// 6. What's the difference between a variable that is: `null`, `undefined` or undeclared?



// I think they make more sense in the opposite order: undeclared, undefined, and null. 
// That’s the order I’m going to tackle them anyways.

// First up is undeclared.

// A variable is undeclared when it does not use the var keyword. It gets created on the 
// global object (that is, the window), thus it operates in a different space as the declared variables.

// Example:

// var declaredVariable = 1;

// function scoppedVariables() {
//   undeclaredVariable = 1;
//   var declaredVariable = 2;
// }

// scoppedVariables();

// undeclaredVariable; // 1
// declaredVariable; // 1
// For more discussion on undeclared variables, checkout Mozilla’s documentation.

// Note: this will not work in strict mode. It will throw an error when it gets to the undeclaredVariable - see this example. Thanks to Glen Selle for his comment with this update.



// Now let’s move on to undefined.

// Something is undefined when it hasn’t been defined yet. If you call a variable or function without having actually created it yet the parser will give you an not defined error.

// Example:


// var undefinedVariable; // undefined
// typeof undefinedVariable; // "undefined"

// undefinedFunction(); // undefined
// typeof undefinedFunction; // "undefined"
// Note that the typeof returns "undefined", therefore undefined is a primitive type.

// The fix for an undefined variable or function is easy, simply define it:

// var definedVariable = 'test';
// typeof definedVariable; // "string"

// function definedFunction(){
//   return "I'm defined!"
// }
// typeof definedFunction // "function"
// You can know if a variable is undefined with the following:


// if (typeof(variable) !== "undefined") {
//   console.log('variable is not undefined');
// } else {
//   console.log('variable is undefined');
// }


// Finally we'll finish up with null.

// null is a variable that is defined to have a null value.


// var nullVariable = null; // null
// typeof nullVariable // "object"
// You probably don’t often purposefully define a variable to null, but it may be the return value of a function. Often you'll need to gaurd against null values in your code.

// You can know if a variable is null with the following:

// if( variable === null ) {
//   console.log('variable is null');
// } else {
//   console.log('variable is not null');
// }

// I think the order “undeclared, undefined, and null” makes sense since it’s increasing order of certainty.

// undeclared variables don’t even exist
// undefined variables exist, but don’t have anything assigned to them
// null variables exist and have null assigned to them



// 7. How would you go about checking for any of these states?


//  7a. Undefined

// Use:

// if (typeof something === "undefined") {
//     alert("something is undefined");
// }
// If an object variable which have some properties you can use same thing like this:

// if (typeof my_obj.someproperties === "undefined"){
//     console.log('the property is not available...'); // print into console
// }

// 7b. Undeclared

//check if undeclared

// try{
//   undeclaredVar
// }
// catch(e) {
//   if(e.name === 'ReferenceError') {
//     console.log('var is undeclared')
//   }
// }

// 7c. check if null

// var nullVar = null

// if (nullVar === null) {
//    console.log('var is null')
// }



// 8. What is a closure, and how/why would you use one?

// Closures are inner functions inside of an outer function. They have their own local scope and has access to outer function’s scope, parameters (but NOT arguments object), and they also have access to global variables.

// From what I understand, Closures is a neat way to deal with scope issues. Reasons we use Closures is because Javascript is a function-level scope rather than as with other languages, block-level scope and Javascript is an asynchronous/event driven language. Example that Closure is frequently used is jQuery (ex. click()).

// This is how Closures work. 
// 1. After its outer function has been executed and has returned a value, closures can still run.
// 2. Closures store references to the outer function’s variable, hence, we will always have access to the updated values of outer function’s variables.
// 3. Since we have access to the updated values of outer function’s variables. We will have issue/bugs when a variable changes via for loop, but this can be fixed by using IIFE, Immediately Invoked Function Expression.

// Below is a sample code of using Closure with IIFE.

// Note, IIFE or Immediately Invoked Function Expression is another Javascript concept.

/*
 Goal of this code is to be able to generate unique id for each blog post
 using Closure and IIFE which will be able to access a blog post by
 declaring the outer function and use [] to access a specific post
*/

// Here, we created a variable that holds a sample data in json format
// var blogPost = [
//   {
//     title: 'title0',
//     id: 0
//   },
//   {
//     title: 'title1',
//     id: 0
//   },
//   {
//     title: 'title2',
//     id: 0
//   }
// ];

// /*
//   We are going to create a function that generates unique id for a blog post
//   and this function accepts thePost parameter (which we will pass our blogPost json data here)
// */
// function generateBlogPostID(thePost) {
//   var uniqueID = 100; // this will hold the unique id generated from our for loop and closure
  
//   // this for loop will go through each item in our blogPost json var
//   for(var i=0; i<thePost.length; i++) {
//     /* 
//       we are accessing the id per each blogPost item
//       and assigning a closure function to each blogPost item id
//     */
//     thePost[i]['id'] = function(j) { // j parametric variable is the i passed in on invocation of this IIFE
//       return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
//     }(i); // immediately invoke this function passing the i variable as a parameter
//   }
  
//   return thePost;
// }

// // Now lets test it!
// var createIDforBlogPost = generateBlogPostID(blogPost); // hope variable names is pretty self-explanatory on what i am doing here

// var blog0 = createIDforBlogPost[0];
// console.log(blog0.id);

// var blog1 = createIDforBlogPost[1];
// console.log(blog1.id);

// var blog2 = createIDforBlogPost[2];
// console.log(blog2.id);





// 9. Can you describe the main difference between a `forEach` loop and a `.map()`` loop and why you would pick one versus the other?


// If you’ve worked with JavaScript for a little while, you’ve probably come across two seemingly similar Array methods: Array.prototype.map() and Array.prototype.forEach().

// So, what’s the difference?

// Map & ForEach Defined
// Let’s first take a look at the definitions on MDN:

// forEach() — executes a provided function once for each array element.
// map() — creates a new array with the results of calling a provided function on every element in the calling array.
// What exactly does this mean?

// Well, the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

// Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

// Code Examples
// Consider the below array. If we wanted to double each element in the array, we could use either map or forEach.

// let arr = [1, 2, 3, 4, 5];
// ForEach:

// Note that you would never return from a forEach function as the return values are simply discarded:

// arr.forEach((num, index) => {
//     return arr[index] = num * 2;
// });
// Result:

// // arr = [2, 4, 6, 8, 10]
// Map:

// let doubled = arr.map(num => {
//     return num * 2;
// });
// Result:

// // doubled = [2, 4, 6, 8, 10]
// Speed Considerations
// jsPerf is a great website for testing the speed of different JavasScript methods and functions.

// Here are the results of my forEach() vs map() test:


// forEach() was more than 70% slower than map(). Your browser is probably different. You can check out the full test results here:


// Functional Considerations
// It’s important to also understand that using map() may be preferable if you favor functional programming.

// This is because forEach() affects and changes our original Array, whereas map() returns an entirely new Array — thus leaving the original array unchanged.

// Which is better?
// That depends on what you’re trying to accomplish.

// forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out:

// let arr = ['a', 'b', 'c', 'd'];
// arr.forEach((letter) => {
//     console.log(letter);
// });
// // a
// // b
// // c
// // d
// And map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// // arr2 = [6, 8, 10]
// What we’re doing above is first mapping over arr and multiplying every element in the array times 2. After this, we filter through the array and only save the elements that are greater than 5. This leaves us with a final arr2 of [6,8,10].

// If you want to learn more about chaining map, reduce, and filter, check out my article: JavaScript — Learn to Chain Map, Filter, and Reduce.

// Key Takeaways
// Just about anything you can do with forEach() you can do with map(), and vise versa.
// map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.
// forEach() will allow a callback function to mutate the current array. map() will instead return a new array.








// 10. What's a typical use case for anonymous functions?


// Since Anonymous Functions are function expressions rather than the regular function declaration 
// which are statements. Function expressions are more flexible. We can assign functions to variables, 
// object properties, pass them as arguments to other functions, and even write a simple one line code 
// enclosed in an anonymous functions.

// Example:

// var squaredArray = inputArray.map(function(x) { return x * x; });
// With ES6 syntax this becomes even more concise.

// var squaredArray = inputArray.map(x => x * x);
// Another typical example would be an anonymous function used by popular frameworks used as IIFE 
// (Immediate Invoked Function Expression).

// (function() { })();







// 11. How do you organize your code? (module pattern, classical inheritance?)












// 12. What's the difference between host objects and native objects?

// From what I understand, objects are divided from which environment and language they are supplied: 
// Host Objects and Native Objects.

// Host Objects are objects supplied by a certain environment. They are not always the same because 
// each environment differs and contains host objects that accommodates execution of ECMAScript. 
// Example, browser environment supplies objects such as window. While a node.js/server environment 
// supplies objects such as NodeList.

// Native Objects or Built-in Objects are standard built-in objects provided by Javascript. 
// Native objects is sometimes referred to as ‘Global Objects’ since they are objects 
// Javascript has provided natively available for use.
// There are various articles categorizing these native global objects but its number differs, 
// so for accuracy (I believe), I recommend the official Mozilla Doc as reference. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// Javascript is mainly constructed by these categorized native global objects. 
// These objects can be used either as Constructor (String(), Number(), Boolean()) 
// or as Primitive Value, like literally as a value :-D (‘string’, 123, true).








// 13. Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?











// 14. What's the difference between `.call` and `.apply`?


// One very common thing that trips me up when writing Javascript is knowing when to use call 
// and when to use apply. If you're wondering what these methods are, or don't know how scope 
// works in JavaScript, then it might make sense to read the Javascript Guide first.

// Let's look at some ways we might want to use them:

// var person1 = {name: 'Marvin', age: 42, size: '2xM'};
// var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

// var sayHello = function(){
//     alert('Hello, ' + this.name);
// };

// var sayGoodbye = function(){
//     alert('Goodbye, ' + this.name);
// };
// Now if you've read the guide, this example will look really familiar. You'd already know 
// that writing the following code:

// sayHello();
// sayGoodbye();
// will give errors (if you're lucky), or just unexpected results (if you aren't). This 
// is because both functions rely on their scope for the this.name data, and calling them
//  without explicit scope will just run them in the scope of the current window.

// So how do we scope them? Try this:

// sayHello.call(person1);
// sayGoodbye.call(person2);

// sayHello.apply(person1);
// sayGoodbye.apply(person2);
// All four of these lines do exactly the same thing. The run sayHello or sayGoodbye in the
//  scope of either person1 or person2.

// Both call and apply perform very similar functions: they execute a function in 
// the context, or scope, of the first argument that you pass to them. Also, they're 
// both functions that can only be called on other functions. You're not going to able to 
// run person1.call(), nor does it make any sense to do so.

// The difference is when you want to seed this call with a set of arguments. 
// Say you want to make a say() method that's a little more dynamic:

// var say = function(greeting){
//     alert(greeting + ', ' + this.name);
// };

// say.call(person1, 'Hello');
// say.call(person2, 'Goodbye');
// So that's call for you. It runs the function in the context of the first argument, 
// and subsequent arguments are passed in to the function to work with. So how does 
// it work with more than one argument?

// var update = function(name, age, size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// };

// update.call(person1, 'Slarty', 200, '1xM');
// No big deal. They're simply passed to the function if it takes more than one parameter.

// The limitations of call quickly become apparent when you want to write code that doesn't
//  (or shouldn't) know the number of arguments that the functions need… like a dispatcher.

// var dispatch = function(person, method, args){
//     method.apply(person, args);
// };

// dispatch(person1, say, ['Hello']);
// dispatch(person2, update, ['Slarty', 200, '1xM']);
// So that's where apply comes in - the second argument needs to be an array, 
// which is unpacked into arguments that are passed to the called function.

// So that's the difference between call and apply. Both can be called on functions,
//  which they run in the context of the first argument. In call the subsequent 
// arguments are passed in to the function as they are, while apply expects the 
// second argument to be an array that it unpacks as arguments for the called function.







// 15. Explain `Function.prototype.bind`.










// 16. What's the difference between feature detection, feature inference, and using the UA string?










// 17. Explain Ajax in as much detail as possible.










// 18. What are the advantages and disadvantages of using Ajax?











// 19. Explain how JSONP works (and how it's not really Ajax).









// 20. Have you ever used JavaScript templating?








// If so, what libraries have you used?










// 21. Explain "hoisting".











// 22. Describe event bubbling.










// 23. What's the difference between an "attribute" and a "property"?


// What is a property?

// JS DOM objects have properties. These properties are kind of like instance variables for 
// the particular element. As such, a property can be different types (boolean, string, etc.). 
// Properties can be accessed using jQuery’s prop method (as seen below) and also by interacting 
// with the object in vanilla JS.

// Let’s take a look:


// <a href='page2.html' class='link classes' name='linkName' id='linkID'>Hi</a>

// $('#linkID').prop('href'); // returns "http://example.com/page2.html"
// $('#linkID').prop('name'); // returns "linkName"
// $('#linkID').prop('id'); // returns "linkID"
// $('#linkID').prop('className'); // returns "link classes"
// As you can see, all of the properties we set in the HTML are available through prop.
//  Other properties are available too, such as style, even though we didn’t explicitly set them.

// Properties can also be updated through the prop method:


// <a href='page2.html'>Hi</a>

// $('#linkID').prop('href', 'page1.html');
// $('#linkID').prop('href'); // returns "http://example.com/page1.html"
// What is an attribute?

// Attributes are in the HTML itself, rather than in the DOM. They are very similar to
//  properties, but not quite as good. When a property is available it’s recommended 
// that you work with properties rather than attributes.

// An attribute is only ever a string, no other type.


// <input type="checkbox" checked=true/>

// $('input').prop('checked'); // returns true
// $('input').attr('checked'); // returns "checked"
// If an element has a default value, the attribute shows the default value even if the value has changed.


// <input type="text" name="username" value="user123">

// $('input').prop('value', '456user');
// $('input').prop('value'); // returns "456user"
// $('input').attr('value'); // returns "user123"
// Attributes can be useful when you want to set a custom attribute, that is, 
// when there is no property associated.


// <input type="text">

// $('input').attr('customAttribute', 'something custom');
// $('input').attr('customAttribute'); // returns "something custom"
// $('input').prop('customAttribute'); // returns undefined
// But, to be fair, you can also use custom properties (although this might be bad practice).


// <input type="text">

// $('input').prop('customAttribute', 'something custom');
// $('input').prop('customAttribute'); // returns "something custom"
// $('input').attr('customAttribute'); // returns undefined








// 24. Why is extending built-in JavaScript objects not a good idea?










// 25. Difference between document load event and document DOMContentLoaded event?












//  Loading a script asynchronously doesn’t block the DOMContentLoaded event.








// 26. What is the difference between `==` and `===`?










//  27. Explain the same-origin policy with regards to JavaScript.










// 28. Make this work:

// `duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]`









// 29. Why is it called a Ternary operator, what does the word "Ternary" indicate?


// Because it requires three operands.









// 30. What is `"use strict"`;? what are the advantages and disadvantages to using it?











// 31. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 
// and "fizzbuzz" at multiples of 3 and 5


// function fizzBuzz(n) {
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 15 === 0) {
// 			console.log("fizzbuzz");
// 		} else if (i % 5 === 0) {
// 			console.log("buzz");
// 		} else if (i % 3 === 0) {
// 			console.log("fizz");
// 		} else console.log(i)
// 	}
// }







// 32. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?


// ANSWER 1

// The primary reason why global variables are discouraged in javascript is because, in javascript all 
// code share a single global namespace, also javascript has implied global variables ie. variables which 
// are not explicitly declared in local scope are automatically added to global namespace. Relying too 
// much on global variables can result in collisions between various scripts on the same page 
// (read Douglas Crockford's articles).

// One way to reduce global variables is to use the YUI module pattern. The basic idea is to wrap all your 
// code in a function that returns an object which contains functions that needs to be accessed outside 
// your module and assign the return value to a single global variable.

// var FOO = (function() {
//     var my_var = 10; //shared variable available only inside your module

//     function bar() { // this function not available outside your module
//         alert(my_var); // this function can access my_var
//     }

//     return {
//         a_func: function() {
//             alert(my_var); // this function can access my_var
//         },
//         b_func: function() {
//             alert(my_var); // this function can also access my_var
//         }
//     };

// })();

// now to use functions in your module elsewhere, use FOO.a_func(). This way to resolve global namespace 
// conflicts you only need to change the name of FOO.




// ANSWER 2


// For most languages, global variables are considered a “bad thing”. JS is no different, but it probably 
// has more severe consequences than most languages.

// Some points on why global variables are generally bad (taken from Cunningham & Cunningham 
// (http://wiki.c2.com/?GlobalVariablesAreBad) with 
// 	modifications for easier reading):

// It’s harder to read the code and reason about it when variables seem to appear out of thin air 
// (but really from the global scope). 

// Anyone can update a global variable from any point in the program at any time 
// (and from any thread if there’s more than one going).

// General code smell - if you're too lazy to put the variable only where it needs to be 
// then what other corners are you cutting?

// It’s probable that you'll encounter global variable name clashes. Since there’s only one namespace 
// you're more likely to double up on a variable name.


// Global variables are particularly bad for JS.

// Not only are all of those points above true (and a few others I didn’t include), but for JS 
// specifically global variables can be particularly problematic. This is because JS defaults all 
// variables to the global scope unless they are explicitly defined elsewhere. Here’s an example:

// function badlyScoped() {
//     globalVariable = "I'm a global variable";
// }

// badlyScoped();
// console.log(globalVariable); // logs "I'm a global variable"
// Well isn’t that terrifying! We thought we were creating a local variable, since it was defined 
// within a function, but nope! We forgot the var keyword, which would make the variable local. 
// Here’s a corrected version:


// function wellScoped() {
//     var localVariable = "I'm a local variable";
// }

// wellScoped();
// console.log(localVariable); // throws: "localVariable is not defined"
// This is a quirk (some say a mistake) of JS. It makes global variables particularly dangerous 
// since you might not even know you were creating one. So watch your back and don’t forget to use var!











// 33. Why would you use something like the load event? Does this event have disadvantages? Do you know any 
// alternatives, and why would you use those?










// 34. Explain what a single page app is and how to make one SEO-friendly.










// 35. What is the extent of your experience with Promises and/or their polyfills?











// 36. What are the pros and cons of using Promises instead of callbacks?











// 37. What are some of the advantages/disadvantages of writing JavaScript code in a language that 
// compiles to JavaScript?










// 38. What tools and techniques do you use debugging JavaScript code?









// 39. What language constructions do you use for iterating over object properties and array items?










// 40. Explain the difference between mutable and immutable objects.

// Mutable object - The object is subject to be changed/altered.
// Immutable object - The object cannot be changed once created.








// 41. What is an example of an immutable object in JavaScript?










// 42. What are the pros and cons of immutability?










// 43. How can you achieve immutability in your own code?









// 44. Explain the difference between synchronous and asynchronous functions.









// 45. What is event loop?









// 46. What is the difference between call stack and task queue?








// 47. Explain the differences on the usage of foo between `function foo() {}`` and `var foo = function() {}`









// 48. What are the differences between variables created using `let`, `var` or `const`?

// `const` is a signal that the identifier won’t be reassigned.

// `let`, is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap 
// in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which
// is not always the entire containing function.

// `var` is now the weakest signal available when you define a variable in JavaScript. The variable may or 
// may not be reassigned, and the variable may or may not be used for an entire function, or just for 
// the purpose of a block or loop.









// 49. What are the differences between ES6 class and ES5 function constructors?







// 50. Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?








// 51. What advantage is there for using the arrow syntax for a method in a constructor?









// 52. What is the definition of a higher-order function?

// Higher-order functions
// Functions that operate on other functions, either by taking them as arguments or by 
// returning them, are called higher-order functions. Since we have already seen that 
// functions are regular values, there is nothing particularly remarkable about the fact 
// that such functions exist. The term comes from mathematics, where the distinction
//  between functions and other values is taken more seriously.

// Higher-order functions allow us to abstract over actions, not just values.
//  They come in several forms. For example, you can have functions that create new functions.

// function greaterThan(n) {
//   return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));
// // → true
// And you can have functions that change other functions.

// function noisy(f) {
//   return (...args) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// }
// noisy(Math.min)(3, 2, 1);
// // → calling with [3, 2, 1]
// // → called with [3, 2, 1] , returned 1
// You can even write functions that provide new types of control flow.

// function unless(test, then) {
//   if (!test) then();
// }

// repeat(3, n => {
//   unless(n % 2 == 1, () => {
//     console.log(n, "is even");
//   });
// });
// // → 0 is even
// // → 2 is even
// There is a built-in array method, forEach that provides something like a for/of 
// loop as a higher-order function.

// ["A", "B"].forEach(l => console.log(l));
// // → A
// // → B









// 53. Can you give an example for destructuring an object or an array?









// 54. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?










// 55. Can you give an example of a curry function and why this syntax offers an advantage?











// 56. What are the benefits of using spread syntax and how is it different from rest syntax?











// 57. How can you share code between files?










// 58. Why you might want to create static class members?









