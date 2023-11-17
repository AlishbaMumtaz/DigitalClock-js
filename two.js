const clock=document.getElementById('clock');

//the setInterval function runs for every interval continuously
setInterval(() => {
    let date=new Date;
    clock.innerHTML=date.toLocaleTimeString();
}, 1000);