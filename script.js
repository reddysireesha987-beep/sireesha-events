const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
if(menuBtn&&nav){menuBtn.addEventListener("click",()=>{nav.classList.toggle("open");menuBtn.textContent=nav.classList.contains("open")?"✕":"☰"});}
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{if(nav)nav.classList.remove("open");if(menuBtn)menuBtn.textContent="☰"}));
const form=document.getElementById("eventForm"),msg=document.getElementById("formMessage");
if(form&&msg)form.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("name");msg.textContent=`Thank you ${n?n.value:""}! Your enquiry has been received.`;form.reset();});
const planForm=document.getElementById("planForm"),planMsg=document.getElementById("planMessage");
if(planForm&&planMsg)planForm.addEventListener("submit",e=>{e.preventDefault();planMsg.textContent="Your event plan request has been received. We will contact you soon.";planForm.reset();});
