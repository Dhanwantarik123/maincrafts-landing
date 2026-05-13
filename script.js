/* =========================
   MOBILE MENU
========================= */

function toggleMenu(){

document.querySelector(".nav-links").classList.toggle("show");

}

/* =========================
   DARK MODE
========================= */

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

/* =========================
   HERO BUTTON
========================= */

document.querySelector(".cta-btn").addEventListener("click",()=>{

alert("Welcome to MainCrafts Technology");

});

/* =========================
   FEATURE CARD EFFECT
========================= */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.style.background="#4facfe";
card.style.color="white";
card.style.transform="scale(1.05)";

});

});

/* =========================
   FAQ TOGGLE
========================= */

function toggleFAQ(el){

let p = el.nextElementSibling;

p.style.display =
p.style.display === "block"
? "none"
: "block";

}

/* =========================
   CONTACT FORM
========================= */

function submitForm(e){

e.preventDefault();

let name =
document.querySelector(".contact-form input[type='text']").value;

let email =
document.querySelector(".contact-form input[type='email']").value;

let message =
document.querySelector(".contact-form textarea").value;

if(name === "" || email === "" || message === ""){

alert("Please fill all fields");

return;

}

if(!email.includes("@")){

alert("Enter valid email");

return;

}

alert("Message Sent Successfully");

document.querySelector(".contact-form").reset();

}

/* =========================
   PRICING PLAN
========================= */

function selectPlan(plan){

alert("You selected " + plan + " Plan");

}

/* =========================
   NEWSLETTER FORM
========================= */

let newsletterForm =
document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit", function(e){

e.preventDefault();

let email =
newsletterForm.querySelector("input").value;

if(email === ""){

alert("Please enter email");

return;

}

alert("Subscribed Successfully");

newsletterForm.reset();

});

}

/* =========================
   SCROLL TO TOP BUTTON
========================= */

window.onscroll = function(){

let topBtn =
document.getElementById("topBtn");

if(document.body.scrollTop > 200 ||
document.documentElement.scrollTop > 200){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

};

function scrollToTop(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* =========================
   BUTTON HOVER EFFECT
========================= */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseover",()=>{

btn.style.opacity="0.9";

});

btn.addEventListener("mouseout",()=>{

btn.style.opacity="1";

});

});

/* =========================
   PAGE LOAD EFFECT
========================= */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

console.log("MainCrafts Website Loaded");

});

/* =========================
   AUTO CHANGE HERO TEXT
========================= */

const texts = [
"Build Smarter Websites",
"Modern UI Design",
"Fast Responsive Development",
"Creative Web Solutions"
];

let count = 0;

setInterval(()=>{

document.querySelector(".hero-content h1").innerText =
texts[count];

count++;

if(count >= texts.length){

count = 0;

}

},3000);

/* =========================
   IMAGE HOVER ZOOM
========================= */

document.querySelectorAll(".img-card img").forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform = "scale(1.08)";
img.style.transition = "0.4s";

});

img.addEventListener("mouseout",()=>{

img.style.transform = "scale(1)";

});

});

/* =========================
   TEAM CARD EFFECT
========================= */

document.querySelectorAll(".team-card").forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform = "translateY(-10px)";

});

card.addEventListener("mouseout",()=>{

card.style.transform = "translateY(0px)";

});

});

/* =========================
   SOCIAL ICON EFFECT
========================= */

document.querySelectorAll(".social-icons a").forEach(icon=>{

icon.addEventListener("mouseover",()=>{

icon.style.transform = "scale(1.2)";

});

icon.addEventListener("mouseout",()=>{

icon.style.transform = "scale(1)";

});

});

/* =========================
   NAVBAR ACTIVE LINK
========================= */

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>{

item.style.color = "white";

});

link.style.color = "yellow";

});

});

/* =========================
   PAGE VISIT MESSAGE
========================= */

setTimeout(()=>{

console.log("Thank you for visiting MainCrafts");

},2000);

/* =========================
   BUTTON CLICK EFFECT
========================= */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",()=>{

console.log("Button Clicked");

});

});

/* =========================
   LIVE YEAR IN FOOTER
========================= */

document.querySelector("footer p").innerHTML =
"© " + new Date().getFullYear() + " MainCrafts";

/* =========================
   RANDOM SERVICE CARD COLOR
========================= */

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("click",()=>{

const colors = [
"#4facfe",
"#ff7a18",
"#9c27b0",
"#28a745"
];

let random =
colors[Math.floor(Math.random()*colors.length)];

card.style.background = random;
card.style.color = "white";

});

});

/* =========================
   HERO BUTTON ANIMATION
========================= */

document.querySelectorAll(".hero-buttons button").forEach(btn=>{

btn.addEventListener("mouseover",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseout",()=>{

btn.style.transform="translateY(0px)";

});

});

/* =========================
   STATS COUNTER EFFECT
========================= */

const counters =
document.querySelectorAll(".stats h2");

counters.forEach(counter=>{

let start = 0;

let end =
parseInt(counter.innerText);

let speed = 40;

function updateCounter(){

if(start < end){

start++;

counter.innerText = start + "+";

setTimeout(updateCounter,speed);

}

}

updateCounter();

});

/* =========================
   TESTIMONIAL EFFECT
========================= */

document.querySelectorAll(".testimonial").forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.background="#4facfe";
card.style.color="white";

});

card.addEventListener("mouseout",()=>{

card.style.background="white";
card.style.color="black";

});

});

/* =========================
   CONTACT TABLE HOVER
========================= */

document.querySelectorAll(".contact-table td").forEach(td=>{

td.addEventListener("mouseover",()=>{

td.style.background="#f1f1f1";

});

td.addEventListener("mouseout",()=>{

td.style.background="white";

});

});

/* =========================
   INPUT FOCUS EFFECT
========================= */

document.querySelectorAll("input, textarea").forEach(input=>{

input.addEventListener("focus",()=>{

input.style.border="2px solid #4facfe";

});

input.addEventListener("blur",()=>{

input.style.border="1px solid #ccc";

});

});

/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll",()=>{

let navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 15px rgba(0,0,0,0.2)";

}else{

navbar.style.boxShadow = "none";

}

});

/* =========================
   DOUBLE CLICK CARD RESET
========================= */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("dblclick",()=>{

card.style.background="white";
card.style.color="black";

});

});

/* =========================
   FINAL CONSOLE MESSAGE
========================= */

console.log("MainCrafts Interactive Features Enabled");
