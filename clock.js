// const hour = document.getElementById('hour')
// const minute = document.getElementById('minute')
// const second = document.getElementById('second')

setInterval(function(){ 
  //this code runs every second 
  document.getElementById("clock").innerHTML = new Date().toLocaleString()
}, 1000);