function clock() {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let second = document.getElementById("seconds");
    let period = document.getElementById("period");
   


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    
     
  
    
    let ampm = h >= 12 ? "PM" : "AM";

    if(h > 12) {
        h = h-12;
    }

    h = (h < 10 ) ? "0" + h : h;
    m = (m < 10 ) ? "0" + m : m;
    s = (s < 10 ) ? "0" + s : s;

    hours.innerHTML = h;
    
    minutes.innerHTML = m;
    
    second.innerHTML = s;

    period.innerHTML = ampm;



};

document.getElementById('setalarm').addEventListener('click', function() {
    var alarmTime = document.getElementById('alarmTime').value;

    if (alarmTime){
             
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var currentTimeString = h + ":" + m;

    if(currentTimeString === alarmTime){

    alert("alarm ring");
     
    };
    }
});

setInterval(clock,1000);
