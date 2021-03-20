function getCity(){
  const optionIndex = document.getElementById('time-zone').options.selectedIndex
  const cityName = document.getElementById('time-zone').options[optionIndex].label
  document.getElementById('city').innerHTML = cityName
}

function clock(){
  const timeZone = document.getElementById('time-zone').value
  document.getElementById("clock").innerHTML = new Date().toLocaleString('en-US', { timeZone: timeZone })
}

document.addEventListener('DOMContentLoaded', function() {
  getCity()
  clock()
}, false)

setInterval(function(){
  clock()
}, 1000)