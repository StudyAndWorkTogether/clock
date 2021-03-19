setInterval(function(){
  const timeZone = document.getElementById('time-zone').value
  document.getElementById("clock").innerHTML = new Date().toLocaleString('en-US', { timeZone: timeZone})
}, 1000);