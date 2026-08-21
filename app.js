const hour=document.getElementById("hour");
const min=document.getElementById("min");
const sec=document.getElementById("sec");

const body=document.getElementById("container");
const swap=document.getElementById("ok");
const clock=document.getElementById("clock");
const tik=document.getElementById("h");


setInterval(()=>{
    let time=new Date();
    let hc=time.getHours();
    let mc=time.getMinutes();
    let sc=time.getSeconds();

    let hh=30*hc+(mc/2);
    let mm=6*mc;
    let ss=6*sc;

    hour.style.transform=`rotate(${hh}deg)`;
    min.style.transform=`rotate(${mm}deg)`;
    sec.style.transform=`rotate(${ss}deg)`;
},1000);

swap.addEventListener("click",event=>{
    body.style.background="#212121";
    clock.style.color="white";
    clock.style.background="rgb(39, 38, 38)";
    swap.innerHTML="LIGHT MODE";
    swap.style.background="rgb(255, 250, 208)";
    swap.style.color="black";
    swap.style.border="2px,solid,black";
    tik.style.background="white";
});
swap.addEventListener("dblclick",event=>{
    body.style.background="rgb(254, 255, 239)";
    clock.style.color="black";
    clock.style.background="white";
    swap.innerHTML="DARK MODE";
    swap.style.background="rgb(39, 38, 38)";
    swap.style.color="white";
    swap.style.border="2px,solid,black";
    tik.style.background="black";
});

