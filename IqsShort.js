Javascript Questions:

Explain event delegation — Attaching event listeners to parent node, instead of every child, present or newly 
created, is event delegation. It makes use of event bubbling, where the event on a child bubbles up to the 
parent. So instead of adding an event listener to a child, and adding one every time a new child is added, 
we add the listener on parent.

Following is a basic example taken from David Walsh’s blog(here).

Explain how this works in javascript — All functions in JavaScript have properties, just as objects have 
properties. And when a function executes, it gets the this property — a variable with the value of the 
object that invokes the function where this is used. The this reference ALWAYS refers to 
(and holds the value of) an object — a singular object — and it is usually used inside a function or a 
method, although it can be used outside a function in the global scope. Note that when we use strict mode, 
this holds the value of undefined in global functions and in anonymous functions that are not bound to any 
object. A good resource to understand this is here and MDN.



Explain how prototypal inheritance works — 
JavaScript only has one construct: objects. Each object has an internal link to another object called its prototype. 
That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. 
null, by definition, has no prototype, and acts as the final link in this prototype chain. For better understanding 
please refer to this, this and this as a resource.




What do you think of AMD vs CommonJS — These both are conventions, and depending on your choice, you can choose 
to answer it. Here is an article by Addy Osmani and another, an explanation on Stack Overflow. The article by 
Addy Osmani is in much detail and you can choose to try out both the conventions and draw conclusions form them. 
Keep in mind that even though someone might favour a method, in the end it’s your own opinion that counts.



Explain why the following doesn’t work as an IIFE: function foo(){ }();. What needs to be changed to properly 
make it an IIFE? — Because it is not being called. It’s a definition and defines foo, and is not an expression. 
Read Lucy Bain’s explanation here for further explanation. To make it an IIFE, wrap it inside a function call 
like this —
 (function(){}());


What’s the difference between a variable that is: null, undefined or undeclared? — 

Undeclared is any variable that has not been declared yet. Console throws an error for this. Undefined is a 
declared variable that has no assigned value, yet. Null is a value that has been assigned to a variable. Read 
more about them here.
Null !== NULL !== null in javascript. 
Also, null == undefined // true
 null === undefined //false
 null === null //true




What is a closure, and how/why would you use one? — 

A closure is an inner function that has access to the outer (enclosing) function’s variables — scope chain. 
The closure has three scope chains: it has access to its own scope (variables defined between its curly 
brackets), it has access to the outer function’s variables, and it has access to the global variables. 
Read here and at MDN. You use one when you later need access to the variables of a function 
that has returned already.




What’s a typical use case for anonymous functions? — 
Anonymous functions are function expressions, and thus we can pass them as variables and return functions. 
When used as IIFE, they are used to maintain scope. 
This is a very good resource to understand how closures and anonymous functions work.




How do you organize your code? — How do you?




What’s the difference between host objects and native objects? —

Host — objects provided by environment like window, document by browser. Native — object in an ECMAScript 
implementation whose semantics are fully defined by this specification rather than by the host environment. 
Eg. Array, String etc. Read more here.




Difference between: function Person(){}, var person = Person(), and var person = new Person()? — 
First one is a function declaration. the second one returns the return value of function Person and assigns 
it to person variable. The third creates a new instance of an object based on the Person function. 
So the variable (person) is now an Object. For more detailed discussion refer to this article.




What’s the difference between .call and .apply? — 
Both are used to set the value of this explicitly. While call takes a list of arguments in comma separated 
format, apply takes an array with list of arguments. Read more here and here.




Explain Function.prototype.bind. — Function.prototype.bind is used to set this explicitly. It returns a 
function with given this context that can be called later. Read this, this and this article for further understanding.




When would you use document.write()? — By standard means, I hope to never use it, because it goes on and 
overwrites on entire document. For more detailed reading and other’s opinions read this and this.




What’s the difference between feature detection, feature inference, and using the UA string? — 
Feature Detection — When you check if a certain feature exists. 
Feature Inference — checks for a feature just like feature detection, but uses another function because it 
assumes it will also exist. Assumptions are bad bad bad. 
UA String — UA String or User Agent String is a string text of data that each browsers send and can be 
accessed with navigator.userAgent. Checking the UA string is an old practice and should not be used anymore. 
Read here for detailed discussion.



Explain Ajax in as much detail as possible. What are the advantages and disadvantages of using Ajax? — 
The XMLHttpRequest object is part of a technology called Ajax (Asynchronous JavaScript and XML). Using Ajax, 
data could then be passed between the browser and the server, using the XMLHttpRequest API, without having 
to reload the web page. Ajax requests are triggered by JavaScript code; your code sends a request to a URL, 
and when it receives a response, a callback function can be triggered to handle the response. Because the 
request is asynchronous, the rest of your code continues to execute while the request is being processed, so 
it’s imperative that a callback be used to handle the response. Read more at jQuery’s documentation and here 
for advantages/disadvantages.




Explain how JSONP works (and how it’s not really Ajax). — 
JSONP(as in “JSON with Padding”) is a method commonly used to bypass the cross-domain policies in web 
browsers (you are not allowed to make AJAX requests to a webpage perceived to be on a different server 
	by the browser). JSON and JSONP behave differently on both the client and the server. JSONP requests 
are not dispatched using the XMLHTTPRequest, instead a <script> tag is created, whose source is set to 
the target URL. This script tag is then added to the DOM (normally the <head>). Read this, this and this 
for detailed answer.




Have you ever used JavaScript templating? If so, what libraries have you used? — 
Handlebars, Underscore, Mustache, Jade are all libraries used for the same.




Explain “hoisting”. — 
Variable declarations (and declarations in general) are processed before any code is executed, declaring a 
variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable 
can appear to be used before it’s declared. This behavior is called “hoisting”, as it appears that the 
variable declaration is moved to the top of the function or global code. Read more here, here and here. 
It’s a tricky concept and should be understood well.




Describe event bubbling. — 
This article is a very good resource to understand event bubbling and capturing in detail. 
Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs 
in an element inside another element, and both elements have registered a handle for that event. The 
event propagation mode determines in which order the elements receive the event. With bubbling, the 
event is first captured and handled by the innermost element and then propagated to outer elements. 
With capturing, the event is first captured by the outermost element and propagated to the inner elements.




What’s the difference between an “attribute” and a “property”? — 
Attributes are defined by HTML. Properties are defined by DOM. Some HTML attributes have 1:1 mapping onto 
properties. id is one example of such. Some do not (e.g. the value attribute specifies the initial value 
of an input, but the valueproperty specifies the current value). Read further here and here.




Why is extending built-in JavaScript objects not a good idea? — 
Don’t do it because you might end up breaking other’s codes. Here is a good answer convincing you to why not do that.




Difference between document load event and document DOMContentLoaded event? — 
DOMContentLoaded — the whole document (HTML) has been loaded. 
load — the whole document and its resources (e.g. images, iframes, scripts) have been loaded. Read more on MDN.




What is the difference between == and ===? — 
The identity (===) operator behaves identically to the equality (==) operator except no type 
conversion is done, and the types must be the same to be considered equal. Read detailed answer here.




Explain the same-origin policy with regards to JavaScript. — 
The same origin policy states that a web browser permits script contained in one page (or frame) to 
access data in another page (or frame) only if both the pages have the same origin. It is a critical 
security mechanism for isolating potentially malicious documents. Two pages have the same origin if the 
protocol, port (if one is specified), and host are the same for both pages. Read details here and here.



Make this work: duplicator([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5] — Array.prototype.duplicator=function()
{
 return this.concat(this);
}




Why is it called a Ternary expression, what does the word “Ternary” indicate? — 
“Ternary” means operands with three(n-ary) param. This is a one-line shorthand for an if-then statement. 
It is called a ternary operator or a conditional operator. Read this for example.



What is “use strict”;? what are the advantages and disadvantages to using it? — 
Strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn’t just a subset: 
it intentionally has different semantics from normal code. Browsers not supporting strict mode will run 
strict mode code with different behavior from browsers that do, so don’t rely on strict mode. Read here, 
here and here.



Create a for loop that iterates up to 100 while outputting “fizz” at multiples of 3, “buzz” at 
multiples of 5 and”fizzbuzz” at multiples of 3 and 5 — Code here.



Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it? — 
The primary reason why global variables are discouraged in javascript is because, in javascript all code 
share a single global namespace, also javascript has implied global variables i.e. variables which are not 
explicitly declared in local scope are automatically added to global namespace. Relying too much on global 
variables can result in collisions between various scripts on the same page. Read more here, here , here and here.



Why would you use something like the load event? Does this event have disadvantages? 
Do you know any alternatives, and why would you use those? — 
The load event fires at the end of the document loading process. At this point, all of the objects in the 
document are in the DOM, and all the images, scripts, links and sub-frames have finished loading. To execute 
anything post document load, we fire these events. ‘DOMContentLoaded’ or jQuery’s loaded are another options. 
Read detailed discussion here and here.



Explain what a single page app is and how to make one SEO-friendly — 
A single-page application (SPA) is a web application or web site that fits on a single web page with the goal 
of providing a more fluid user experience similar to a desktop application. In a SPA, either all necessary code — 
HTML, JavaScript, and CSS — is retrieved with a single page load, or the appropriate resources are dynamically 
loaded and added to the page as necessary, usually in response to user actions. Read more here. For SEO answers, 
read this answer and this tutorial.



What is the extent of your experience with Promises and/or their polyfills? — Read about them here.

Async Await FTW

What are the pros and cons of using Promises instead of callbacks ?— 
It is fair to say promises are just syntactic sugar. Everything you can do with promises you can do with 
callbacks. The deep reason why promises are often better is that they’re more composeable, which roughly means 
that combining multiple promises “just works” and is more readable, while combining multiple callbacks often 
doesn’t and creates callback hell.
Read here, here and here for more information.




What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript? — 
Example: CoffeeScript. 
Pros: Syntactic sugar, readable code, and use of good patterns 
Cons: Debugging and compilation issues. 
Read this answer for details.



What tools and techniques do you use debugging JavaScript code? — 
Web/Browser console using console.log. Firebug, Developer Tools, stop points. 
Read this, this and this article for help.



What language constructions do you use for iterating over object properties and array items? — 
for loop, for..in, for each..in, map, reduce etc. This article on 2ality covers this subject in great detail.



Explain the difference between mutable and immutable objects. What is an example of an immutable object in JavaScript? 
What are the pros and cons of immutability? How can you achieve immutability in your own code? — 
Mutable objects are those whose state is allowed to change over time. An immutable value is the exact 
opposite — after it has been created, it can never change. Strings and Numbers are inherently immutable 
in javascript. Refer this article for further answers.



Explain the difference between synchronous and asynchronous functions — 
Synchronous: Step wise execution. Next line executed after first. 
Asynchronous: Execution moves to next step before first is finished. Read this article for further explanation.




What is event loop? What is the difference between call stack and task queue? — 
JavaScript has a concurrency model based on an “event loop”. Read this article by MDN, this and this one 
for details and explanation.




Explain the differences on the usage of foo between function foo() {} and var foo = function() {} — 
First one is declaration defined at parse time while the other is expression defined at run time. 
This and this article covers it in detail.