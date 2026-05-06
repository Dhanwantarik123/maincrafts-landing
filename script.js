function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("show");
}

function toggleDarkMode(){
document.body.classList.toggle("dark");
}

document.querySelector(".cta-btn").addEventListener("click",()=>{
alert("Welcome 🚀");
});

document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("click",()=>{
card.style.background="#4facfe";
card.style.color="white";
});
});

function toggleFAQ(el){
let p=el.nextElementSibling;
p.style.display=p.style.display==="block"?"none":"block";
}

function submitForm(e){
e.preventDefault();
alert("Message Sent ✅");
}
function selectPlan(plan) {
    alert("🎉 You selected " + plan + " Plan!");
}
