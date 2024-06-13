let secHtml= document.getElementById("sec");
let msecHtml= document.getElementById("msec");
let minHtml= document.getElementById("min");
let hourHtml= document.getElementById("hour");
let dayHtml= document.getElementById("day");
let starBtn= document.getElementById("start");
let stopBtn= document.getElementById("stop");
let resetBtn= document.getElementById("reset");
let interval;
let sec=0;
let msec=0;
let min=0;
let hour=0;
let day=0;

starBtn.addEventListener("click",function(){
    interval=setInterval(startTimer, 10)
})
function startTimer(){
 msec++
 if(msec<10){
    msecHtml.innerHTML="0"+msec
 }
 if(msec>9){
    msecHtml.innerHTML=msec
 }
 if(msec>99){
    msec=0
    sec++
    msecHtml.innerHTML="00"
    secHtml.innerHTML="0"+sec

 }
 if(sec>9){
    secHtml.innerHTML=sec
 }
 if (sec>59){
    min++
   sec=0
    minHtml.innerHTML="0"+min
    secHtml.innerHTML="00"
}
if(min>9){
    minHtml.innerHTML=min
}
if (min>59){
    hour++
   min=0
    hourHtml.innerHTML="0"+hour
    minHtml.innerHTML="00"
}
if(hour>9){
    hourHtml.innerHTML=hour
}
if (hour>23){
    day++
   min=0
    dayHtml.innerHTML="0"+day
    hourHtml.innerHTML="00"
}
if(hour>9){
    dayHtml.innerHTML=day
}
}

stopBtn.addEventListener("click",function(){
 clearInterval(interval)
})

resetBtn.addEventListener("click",function(){
    clearInterval(interval)
    msec=0
    sec=0
    msecHtml.innerHTML="00"
    secHtml.innerHTML="00"

})
