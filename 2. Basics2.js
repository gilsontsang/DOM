

var h1 = document.querySelector("h1");

h1.style.color = "orange";
h1.style.border = "2px solid silver";

// Note the above is very DRY, whereas we have better method below.
// We will add a CSS class to our javascript.
var p = document.querySelector("p");

// variable.classList.add("some-class") will add a class from CSS called .some-class to the variable
p.classList.add("big");
// Other variations: variable.classList.remove and variable.classList.toggle (if given element has class already, then removes it, vice versa)


// In sumary, textContent treats the given content as TEXT, whereas innerHTML treats the given content as HTML.
// To retrieve text content in "p"
p.textContent; 

// p's content can be altered with the below. However, this will override ALL html elements, include <strong>, <em>, and so forth.
// => p.textContent = "Corgi goes MEOW!";

// In order to maintain html, we use the following:
p.innerHTML = "However, this Corgi went <strong>WOOF!</strong> twice as loud";



// Manipulating attributes - links
var link = document.querySelector("a"); // link references the anchor tag.
link.getAttribute("href") // gets the current link attached to link
link.setAttribute("href","https://en.wikipedia.org/wiki/Welsh_Corgi"); // link in html will now change to www.google.com
// To change the link's name
var a = document.querySelector("a");
a.textContent = "I am Corgi's favorite link! Just kidding. Click me!";

// Manipulating attributes - images
var img = document.querySelector("img"); 
// similar to link to getAttribute
// img.setAttribute("src","image.png") 
// img.style.width = "500px";
// img.style.height = "500px";
// img.style.border = "2px solid pink";
// However, if img returns a list instead of a single object, then we must apply a for-loop to loop through each object