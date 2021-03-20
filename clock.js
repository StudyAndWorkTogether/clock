function getCity(){
  const optionIndex = document.getElementById('time-zone').options.selectedIndex
  const cityName = document.getElementById('time-zone').options[optionIndex].label
  document.getElementById('city').innerHTML = cityName
}

setInterval(function(){
  const timeZone = document.getElementById('time-zone').value
  document.getElementById("clock").innerHTML = new Date().toLocaleString('en-US', { timeZone: timeZone })
}, 1000);