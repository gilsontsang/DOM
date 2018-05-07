// Below are javascript objects constructed from html.

// Construct javascript object from html Id
// Note: Id can only by retrieved once
var tag = document.getElementById("highlight");
// When we call "tag", it returns JAVASCRIPT <li id="highlight">List Item 1</li>. 



// Construct javascript object from html class
// Note: Class will turn a list of all classes back to us.
var tags = document.getElementByClassName("bolded");
// If you would like to retrieve the ith object in the list: var tags = document.getElementByClassName("bolded")[i];
// Note: When we call "tags", it returns a list, NOT an array.

// Construct javascript object from html tag
// Similar to classes, this will retrieve a list with all <li> tags. Note, we can use this to also retrieve head, body, ul, etc...
var tags = document.getElementByTagName("li");

// All of the above can be completed with calling the 2 methods below.
documents.querySelector()
documents.querySelectorAll()

// Examples
var tag = documents.querySelector("#highlight") // returns javascript object from id highlight. Note # is used similar to CSS
var tags = documents.querySelector(".bolded") // returns the first javascript class from class highlight. Note . is used similar to CSS
var tags = documents.querySelectorAll(".bolded") // returns the list of javascript class from class highlight. Note . is used similar to CSS


// Advanced
var tags = documents.querySelector("li a.special") // This looks for a list, with an anchor tag of class special.
