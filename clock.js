let clockID

function displayTime(){
  const optionIndex = document.getElementById('time-zone').options.selectedIndex
  const cityName = document.getElementById('time-zone').options[optionIndex].label
  const timeZone = document.getElementById('time-zone').value
  document.getElementById('city').innerHTML = cityName
  document.getElementById("clock").innerHTML = new Date().toLocaleString('en-US', { timeZone: timeZone })
}

function runningClock() {
  setInterval(function(){
    displayTime()
  }, 1000)
}

function resetClock(){
  clearInterval(clockID)
  displayTime()
  clockID = setInterval(function(){
    displayTime()
  }, 1000)
}

document.addEventListener('DOMContentLoaded', function() {
  displayTime()
  runningClock()
}, false)
