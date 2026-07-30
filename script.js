/* ====================================
   MC MOBILE TIER LIST V11
==================================== */

// Loading Screen
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

// Navbar Scroll Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(10,10,10,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(10,10,10,.55)";
        header.style.boxShadow = "none";

    }

});

// Scroll Reveal

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section,.card").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// Mouse Glow

const glow = document.createElement("div");

glow.id = "mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// Floating Cards

document.querySelectorAll(".card").forEach((card,index)=>{

    card.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-8px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:3500 + index*250,

        iterations:Infinity

    });

});

// Smooth Anchor Links

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Ripple Effect

document.querySelectorAll(".primary,.secondary").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

circle.style.width=size+"px";
circle.style.height=size+"px";

circle.style.left=e.clientX-rect.left-size/2+"px";
circle.style.top=e.clientY-rect.top-size/2+"px";

circle.className="ripple";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});

// Welcome Console Message

console.log("⚔ MC Mobile Tier List V11 Loaded Successfully");// Animated Statistics

function counter(id,end,speed){

let number=0;

const element=document.getElementById(id);

if(!element) return;

const timer=setInterval(()=>{

number++;

element.textContent=number;

if(number>=end){

clearInterval(timer);

}

},speed);

}

counter("members",2500,1);
counter("players",850,3);
counter("tests",4200,1);
counter("events",45,50);
// Card Hover Animation

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".3s";

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});
// Back To Top Button

const topButton = document.getElementById("topButton");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

if(topButton){

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// Active Navigation

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

console.log("✅ MC Mobile Tier List V11 Complete");
