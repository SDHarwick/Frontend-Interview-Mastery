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

// Both the code samples you demonstrated in your question make use of prototypal inheritance. 
// In fact any object-oriented code you write in JavaScript is a paradigm of prototypal inheritance. 
// JavaScript simply doesn't have classical inheritance. This should clear things up a bit:

//                                    Inheritance
//                                         |
//                          +-----------------------------+
//                          |                             |
//                          v                             v
//                     Prototypal                     Classical
//                          |
//          +------------------------------+
//          |                              |
//          v                              v
// Prototypal Pattern             Constructor Pattern



// As you can see prototypal inheritance and classical inheritance are two different paradigms 
// of inheritance. Some languages like Self, Lua and JavaScript support prototypal inheritance. 
// However most languages like C++, Java and C# support classical inheritance.

// A Quick Overview of Object-Oriented Programming
// Both prototypal inheritance and classical inheritance are object-oriented programming paradigms
// (i.e. they deal with objects). Objects are simply abstractions which encapsulate the properties 
// of a real world entity (i.e. they represent real word things in the program). This is known as abstraction.

// Abstraction: The representation of real world things in computer programs.

// Theoretically an abstraction is defined as "a general concept formed by extracting common features 
// from specific examples". However for the sake of this explanation we're going to use the aforementioned 
// definition instead.

// Now some objects have a lot of things in common. For example a mud bike and a Harley Davidson have a 
// lot in common.

// A mud bike:

// A mud bike. <image />

// A Harley Davidson:

// A Harley Davidson <image />

// A mud bike and a Harley Davidson are both bikes. Hence a bike is a generalization of both a mud bike 
// and a Harley Davidson.

//                    Bike
//                      |
//     +---------------------------------+
//     |                                 |
//     v                                 v
// Mud Bike                       Harley Davidson


// In the above example the bike, the mud bike and the Harley Davidson are all abstractions. However 
// the bike is a more general abstraction of the mud bike and the Harley Davidson (i.e. both the mud 
// 	bike and the Harley Davidson are specific types of bikes).

// Generalization: An abstraction of a more specific abstraction.

// In object-oriented programming we create objects (which are abstractions of real world entities) 
// and we use either classes or prototypes to create generalizations of these objects. Generalizations 
// are created via inheritance. A bike is a generalization of a mud bike. Hence mud bikes inherit from bikes.

// Classical Object-Oriented Programming
// In classical object-oriented programming we have two types of abstractions: classes and objects. 
// An object, as mentioned before, is an abstraction of a real world entity. A class on the other hand 
// is an abstraction of an object or another class (i.e. it's a generalization). For example, consider:

// +----------------------+----------------+---------------------------------------+
// | Level of Abstraction | Name of Entity |                Comments               |
// +----------------------+----------------+---------------------------------------+
// | 0                    | John Doe       | Real World Entity.                    |
// | 1                    | johnDoe        | Variable holding object.              |
// | 2                    | Man            | Class of object johnDoe.              |
// | 3                    | Human          | Superclass of class Man.              |
// +----------------------+----------------+---------------------------------------+
// As you can see in classical object-oriented programming languages objects are only abstractions 
// (i.e. all objects have an abstraction level of 1) and classes are only generalizations 
// (i.e. all classes have an abstraction level greater than 1).

// Objects in classical object-oriented programming languages can only be created by instantiating classes:

// class Human {
//     // ...
// }

// class Man extends Human {
//     // ...
// }

// Man johnDoe = new Man();
// In summation in classical object-oriented programming languages objects are abstractions of 
// real world entities and classes are generalizations (i.e. abstractions of either objects or other classes).

// Hence as the level of abstraction increases entities become more general and as the level of 
// abstraction decreases entities become more specific. In this sense the level of abstraction is 
// analogous to a scale ranging from more specific entities to more general entities.

// Prototypal Object-Oriented Programming
// Prototypal object-oriented programming languages are much simpler than classical object-oriented 
// programming languages because in prototypal object-oriented programming we only have one type of 
// abstraction (i.e. objects). For example, consider:

// +----------------------+----------------+---------------------------------------+
// | Level of Abstraction | Name of Entity |                Comments               |
// +----------------------+----------------+---------------------------------------+
// | 0                    | John Doe       | Real World Entity.                    |
// | 1                    | johnDoe        | Variable holding object.              |
// | 2                    | man            | Prototype of object johnDoe.          |
// | 3                    | human          | Prototype of object man.              |
// +----------------------+----------------+---------------------------------------+
// As you can see in prototypal object-oriented programming languages objects are abstractions of 
// either real world entities (in which case they are simply called objects) or other objects 
// (in which case they are called prototypes of those objects that they abstract). Hence a prototype 
// is a generalization.

// Objects in prototypal object-oriented programming languages may be created either ex-nihilo 
// (i.e. out of nothing) or from another object (which becomes the prototype of the newly created object):

// var human = {};
// var man = Object.create(human);
// var johnDoe = Object.create(man);

// In my humble opinion prototypal object-oriented programming languages are more powerful than 
// classical object-oriented programming languages because:

// There is only one type of abstraction.
// Generalizations are simply objects.
// By now you must have realized the difference between classical inheritance and prototypal 
// inheritance. Classical inheritance is limited to classes inheriting from other classes. However 
// prototypal inheritance includes not only prototypes inheriting from other prototypes but also 
// objects inheriting from prototypes.

// Prototype-Class Isomorphism
// You must have noticed that prototypes and classes are very similar. That's true. They are. 
// In fact they are so similar that you can actually use prototypes to model classes:

// function CLASS(base, body) {
//     if (arguments.length < 2) body = base, base = Object.prototype;
//     var prototype = Object.create(base, {new: {value: create}});
//     return body.call(prototype, base), prototype;

//     function create() {
//         var self = Object.create(prototype);
//         return prototype.hasOwnProperty("constructor") &&
//             prototype.constructor.apply(self, arguments), self;
//     }
// }

// Using the above CLASS function you can create prototypes that look like classes:

// var Human = CLASS(function () {
//     var milliseconds = 1
//       , seconds      = 1000 * milliseconds
//       , minutes      = 60 * seconds
//       , hours        = 60 * minutes
//       , days         = 24 * hours
//       , years        = 365.2425 * days;

//     this.constructor = function (name, sex, dob) {
//         this.name = name;
//         this.sex = sex;
//         this.dob = dob;
//     };

//     this.age = function () {
//         return Math.floor((new Date - this.dob) / years);
//     };
// });

// var Man = CLASS(Human, function (Human) {
//     this.constructor = function (name, dob) {
//         Human.constructor.call(this, name, "male", dob);
//         if (this.age() < 18) throw new Error(name + " is a boy, not a man!");
//     };
// });

// var johnDoe = Man.new("John Doe", new Date(1970, 0, 1));
// The reverse is not true however (i.e. you can't use classes to model prototypes). This is because 
// prototypes are objects but classes are not objects. They are an entirely different type of abstraction.

// Conclusion
// In summation we learned that an abstraction is a "a general concept formed by extracting common 
// features from specific examples" and that generalization is "an abstraction of a more specific 
// abstraction". We also learned about the differences between prototypal and classical inheritance 
// and how both of them are two faces of the same coin.

// On a parting note I would like to remark that there are two patterns of prototypal inheritance: 
// the prototypal pattern and the constructor pattern. The prototypal pattern is the canonical 
// pattern of prototypal inheritance whereas the constructor pattern is used to make prototypal 
// inheritance look more like classical inheritance. Personally I prefer the prototypal pattern.

// P.S. I'm the guy who wrote the blog post "Why Prototypal Inheritance Matters" and answered 
// the question "Benefits of prototypal inheritance over classical?". My answer is the accepted answer.






// 4. What do you think of AMD vs CommonJS?


W EMCA6 it don matta






// Asynchronous Module Definition (AMD)


// AMD was born out of a group of developers that were displeased with the direction adopted by CommonJS. 
// In fact, AMD was split from CommonJS early in its development. The main difference between AMD and 
// CommonJS lies in its support for asynchronous module loading.

// Asynchronous loading is made possible by using JavaScript's traditional closure idiom: a function is 
// called when the requested modules are finished loading. Module definitions and importing a module is 
// carried by the same function: when a module is defined its dependencies are made explicit. An AMD 
// loader can therefore have a complete picture of the dependency graph for a given project at runtime. 
// Libraries that do not depend on each other for loading can thus be loaded at the same time. This is 
// particularly important for browsers, where startup times are essential to a good user experience.

// PROS
// Asynchronous loading (better startup times).
// Circular dependencies are supported.
// Compatibility for require and exports.
// Dependency management fully integrated.
// Modules can be split in multiple files if necessary.
// Constructor functions are supported.
// Plugin support (custom loading steps).

// CONS
// Slightly more complex syntactically.
// Loader libraries are required unless transpiled.
// Hard to analyze for static code analyzers.












// 5. Explain why the following doesn't work as an IIFE: `function foo(){ }();`.

// An immediately-invoked function expression (or IIFE, pronounced "iffy") is a JavaScript 
// programming language idiom which produces a lexical scope using JavaScript's function scoping. 
// Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, 
// protect against polluting the global environment and simultaneously allow public access to methods 
// while retaining privacy for variables defined within the function.

// Immediately-invoked function expressions may be written in a number of different ways. A common convention 
// is to enclose the function expression – and optionally its invocation operator – with the grouping operator, 
// in parentheses, to tell the parser explicitly to expect an expression. Otherwise, in most situations,
// when the parser encounters the function keyword, it treats it as a function declaration (statement), 
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



// How do you organize your code? (module pattern, classical inheritance?)
// There are several options in implementing Module Pattern. An option I mostly use is 
// Object Literal Notation for encapsulating and organizing my code, but upon further readings, 
// Module Pattern using Anonymous Closures, Global Import, and Module Export have sparked my 
// interest as it provides more features for private and public var/methods. It still uses 
// object literal but as to return values from the scoping function.

// In JavaScript, the Module pattern is used to further emulate the concept of classes in 
// such a way that we’re able to include both public/private methods and variables inside a 
// single object, thus shielding particular parts from the global scope.
// - Addy Osmani, Learning Javascript Design Patterns


// There are popular javascript module framework that specifically implemented Module Pattern such 
// as Dojo, ExtJS, YUI, and jQuery. Good to know if your new to learning Javascript concepts and have 
// heard of these technologies before those popular MVC frameworks (Angular.js, Ember.js, Backbone.js) emerged.

// Another implementation of module pattern popularized Christian Heilmann (which I think is 
// 	pretty clean and neat) is The Revealing Module Pattern. It’s pretty much the same with the 
// standard Module Pattern except it uses the return object literal properties as references to 
// variables and functions from the scoping function to export variables and methods.








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

// Hoisting is when a JS declaration is lifted (“hoisted”) to the top of it’s scope by the JS 
// interpreter. What this really means is that a variable or function isn’t necessarily declared 
// where you think it is. Understandably, this can cause problems. Variables and functions are 
// hoisted differently, as we'll see below.

// Hoisting variables
// We'll start with an example:


// // Code saved in file:

// function containsHoisting() {
//     console.log(hoistedVariable);
//     var hoistedVariable = "I was hoisted!";
// }

// containsHoisting(); // logs undefined


// Wait, how did hoistedVariable get to be undefined? Surely it should be undeclared since we 
// haven’t hit var hoistedVariable yet.

// It’s because of hoisting! You see, although I wrote the code in the example above, the JS 
// interpreter changes it to this:


// // What the interpreter changed it to:

// function containsHoisting() {
//     var hoistedVariable; // <-- this line here!
//     console.log(hoistedVariable);
//     hoistedVariable = "I was hoisted!";
// }


// That new line is hoistedVariable getting hoisted up to the top of it’s scope. So it’s now 
// declared, but not defined.

// Here’s a more complex example (inspired by Adequately Good)


// var hoistedVariable = 1;

// function scopingFunction() {
//     if (!hoistedVariable) {
//         var hoistedVariable = 10;
//     }
//     return hoistedVariable;
// }

// scopingFunction(); // returns 10


// What?! How can it return 10?

// Tangent about scopes
// I was surprised about this myself until I understood JS scoping better, here’s how it breaks down:

// In Javascript scopes are defined at function level. Many other languages define scope at 
// a block level (as in an if block or for loop). This is an important difference to remember.

// Thus...

// Back to the main event
// The code above gets rewritten in the JS interpreter to look like this:


// var hoistedVariable = 1;

// function scopingFunction() {
//     var hoistedVariable; // <-- this line here!
//     if (!hoistedVariable) {
//         hoistedVariable = 10;
//     }
//     return hoistedVariable;
// }

// scopingFunction(); // returns 10


// Note that the global hoistedVariable gets completely overwritten by the local hoistedVariable 
// as declared in scopingFunction. So at the point of the if conditional hoistedVariable is 
// undefined and not 1.

// Function hoisting
// Hoisting functions works differently than variables. Since a function is declared and defined 
// at the same time the function definition is hoisted along with the function name.

// Since examples make things clearer:


// function containingFunction() {
//     var hoistedVariable = 2 + 2;
//     function hoistedFunction() {
//         return hoistedVariable;
//     }
//     return hoistedFunction();
// }
// containingFunction() // returns 4


// Hopefully that example wasn’t surprising. But just to better understand what’s going on, here’s 
// how the JS interpreter rewrote things:


// function containingFunction() {
//     // this is the hoisted section
//     var hoistedVariable;
//     function hoistedFunction() {
//         return hoistedVariable;
//     }

//     // here's the rest of the code
//     hoistedVariable = 2 + 2;
//     return hoistedFunction();
// }
// containingFunction() // returns 4


// Notice that the entire hoistedFunction gets moved up, while only the declaration for the 
// hoistedVariable is hoisted.

// Let’s try with a more complicated example:


// function containingFunction() {
//     var hoisted = "I'm the variable";
//     function hoisted() {
//         return "I'm the function";
//     }
//     return hoisted(); // results in a TypeError
// }
// containingFunction()


// But wait, the hoisted function is defined right there, what gives?

// Because functions are hoisted after variables, naming conflicts can happen. Again, let’s 
// look at what the JS interpreter wrote for this code


// function containingFunction() {
//     // hoisted section
//     var hoisted;
//     function hoisted() {
//         return "I'm the function";
//     }

//     // rest of the code
//     hoisted = "I'm the variable";
//     return hoisted();
// }
// containingFunction() // results in a TypeError

// As you can see, the function definition for hoisted is overwritten by the variable 
// definition ("I'm the variable") which appears lower down in the interpreter’s version 
// of the code. Yet another reason why good names are important!









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

// From: http://lucybain.com/blog/2014/js-extending-built-in-objects/

// What is “extending an object”?

// When you add functionality to an object using the prototype. An example looks like this:


// Array.prototype.first = function(){
//     return this[0];
// }

// var temp = [1, 2, 3];
// temp.first(); // returns 1
// At first glance, this seems like such an awesome feature. Want the third element from an array? 
// Extend Array! Want strings to have a titleize method? Extend String! Want alphabetisedProperties 
// available for objects? Extend Object!

// Why is this a bad thing?

// It depends on who you ask. This is one of those “JS standards” - unlike most of the questions 
// that have a clear answer, this one has a bit more opinion.

// The main argument against doing this is: if, in future, a browser decides to implement its own 
// version of your method, your method might get overridden (silently) and the browser’s 
// implementation (which is probably different from yours) would take over. So not extending 
// in the first place is future proofing your code.

// On the flip side, if you decide to overwrite the browsers definition, any future developer 
// working on your code won’t know about the change. They'll have a harder time getting 
// up to speed.

// Generally it’s safer to move your particular changes into a library 
// (as with underscore.js). That way your particular methods are clearly marked and 
// there’s no chance of conflict.



// From: http://rlynjb.github.io/wandrr/JS-Interview-Question-Why-is-extending-built-in-JavaScript-objects-not-a-good-idea

// Modifying the behaviour of current built-in JS objects is not a good practice as it breaks 
// its default functionality and it will break your code using that specific built-in JS object 
// method or property.













// 25. Difference between document load event and document DOMContentLoaded event?

// From: https://stackoverflow.com/questions/2414750/difference-between-domcontentloaded-and-load-events

// The DOMContentLoaded event fires when parsing of the current page is complete; the 
// load event fires when all files have finished loading from all resources, including 
// ads and images. DOMContentLoaded is a great event to use to hookup UI functionality 
// to complex web pages.




// The DOMContentLoaded event is fired when the document has been completely loaded and 
// parsed, without waiting for stylesheets, images, and subframes to finish loading (the 
// load event can be used to detect a fully-loaded page).


//  Loading a script asynchronously doesn’t block the DOMContentLoaded event.












// 26. What is the difference between `==` and `===`?


// From: https://stackoverflow.com/questions/523643/difference-between-and-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

// === and !== are strict comparison operators:

// JavaScript has both strict and type-converting equality comparison. For strict equality the objects 
// being compared must have the same type and:

// Two strings are strictly equal when they have the same sequence of characters, same length, and same 
// characters in corresponding positions.

// Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is 
// not equal to anything, including NaN. Positive and negative zeros are equal to one another.

// Two Boolean operands are strictly equal if both are true or both are false.

// Two objects are strictly equal if they refer to the same Object.

// Null and Undefined types are == (but not ===). [I.e. (Null==Undefined) is true 
// but (Null===Undefined) is false]

// 0 == false   // true
// 0 === false  // false, because they are of a different type
// 1 == "1"     // true, automatic type conversion for value only
// 1 === "1"    // false, because they are of a different type
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false












//  27. Explain the same-origin policy with regards to JavaScript.













// 28. Make this work:

// `duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]`












// 29. Why is it called a Ternary operator, what does the word "Ternary" indicate?

// A unary operand accepts one parameter, e.g. `-1`, where `-` is the operand, and `1` is the parameter.

// A binary operand accepts two parameters, e.g. `2 + 3`, where `+` is the operand, and `2` and `3` are the parameters.

// A ternary operand accepts three parameters.

// `conditional ? truethy_block : falsey_block`










// 30. What is `"use strict"`;? what are the advantages and disadvantages to using it?

// From: http://lucybain.com/blog/2014/js-use-strict/

// If you put "use strict"; at the top of your code (or function), then the JS is evaluated in 
// strict mode. Strict mode throws more errors and disables some features in an effort to make your 
// code more robust, readable, and accurate.

// Advantages

// Taken from John Resig:

// Strict mode helps out in a couple ways:

// It catches some common coding bloopers, throwing exceptions.
// It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access 
// to the global object).
// It disables features that are confusing or poorly thought out.
// Sounds great! I've been reading JavaScript: the Good Parts, and it seems there are a number 
// of “features that are confusing or poorly thought out.” I'll take anything that helps me avoid them!

// Disadvantages

// I had a harder time finding why people don’t like strict mode. The best explanation I found was 
// when code mixed strict and “normal” modes. If a developer used a library that was in strict mode, 
// but the developer was used to working in normal mode, they might call some actions on the library 
// that wouldn’t work as expected. Worse, since the developer is in normal mode, they don’t have the 
// advantages of extra errors being thrown, so the error might fail silently.

// Also, as listed above, strict mode stops you from doing certain things. People generally think 
// that you shouldn’t use those things in the first place, but some developers don’t like the 
// constraint and want to use all the features of the language



// From: https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/

// So what changes when you put a script into strict mode? A number of things.

// Variables and Properties

// An attempt to assign foo = "bar"; where ‘foo’ hasn’t been defined will fail. Previously it would 
// assign the value to the foo property of the global object (e.g.  window.foo), now it just throws 
// an exception. This is definitely going to catch some annoying bugs.

// Any attempts to write to a property whose writable attribute is set to false, delete a property 
// whose configurable attribute is set to false, or add a property to an object whose extensible 
// attribute is set to false will result in an error (these attributes were discussed previously). 
// Traditionally no error will be thrown when any of these actions are attempted, 
// it will just fail silently.

// Deleting a variable, a function, or an argument will result in an error.

// var foo = "test";
// function test(){}
 
// delete foo; // Error
// delete test; // Error
 
// function test2(arg) {
//     delete arg; // Error
// }
// Defining a property more than once in an object literal will cause an exception to be thrown

// // Error
// { foo: true, foo: false }
// eval

// Virtually any attempt to use the name ‘eval’ is prohibited – as is the ability to assign 
// the eval function to a variable or a property of an object.

// // All generate errors...
// obj.eval = ...
// obj.foo = eval;
// var eval = ...;
// for ( var eval in ... ) {}
// function eval(){}
// function test(eval){}
// function(eval){}
// new Function("eval")
// Additionally, attempts to introduce new variables through an eval will be blocked.

// eval("var a = false;");
// print( typeof a ); // undefined
// Functions

// Attempting to overwrite the arguments object will result in an error:
// arguments = [...]; // not allowed

// Defining identically-named arguments will result in an error  function( foo, foo ) {}.

// Access to arguments.caller and arguments.callee now throw an exception. Thus any anonymous 
// functions that you want to reference will need to be named, like so:

// setTimeout(function later(){
//   // do stuff...
//   setTimeout( later, 1000 );
// }, 1000 );
// The arguments and caller properties of other functions no longer exist – and the ability to 
// define them is prohibited.

// function test(){
//   function inner(){
//     // Don't exist, either
//     test.arguments = ...; // Error
//     inner.caller = ...; // Error
//   }
// }
// Finally, a long-standing (and very annoying) bug has been resolved: Cases where null or 
// undefined is coerced into becoming the global object. Strict mode now prevents this from 
// happening and throws an exception instead.

// (function(){ ... }).call( null ); // Exception
// with(){}

// with(){} statements are dead when strict mode is enabled – in fact it even appears as a 
// syntax error. While the feature was certainly mis-understood and possibly mis-used I’m not 
// convinced that it’s enough to be stricken from the record.

// The changes made in ECMAScript 5 strict mode are certainly varied (ranging from imposing 
// 	stylistic preferences, like removing with statements, to fixing legitimately bad language 
// 	bugs, like the ability to redefine properties in object literals). It’ll be interesting to 
// see how people begin to adopt these points and how it’ll change JavaScript development.

// All that being said, I’m fairly certain that jQuery is ES5-Strict compatible right now. Once 
// an implementation of the language is made available (so that that premise may be tested) 
// I’ll happily switch jQuery over to working exclusively in strict mode.










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









