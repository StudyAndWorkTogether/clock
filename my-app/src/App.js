import React, { useState, useEffect } from 'react';

function App() {
  const [timeZone, setTimeZone] = useState('America/New_York')
  const [date, setDate] = useState(new Date().toLocaleString('en-US', { timeZone: timeZone }));
  const [index, setIndex] = useState(0)
  const citys = [
    {label: 'New York', value: 'America/New_York'},
    {label: 'Taipei', value:'Asia/Taipei'},
    {label: 'Tokyo', value:'Asia/Tokyo'},
    {label: 'Los Angele', value:'America/Los_Angeles'},
    {label: 'Singapore', value:'Asia/Singapore'}
  ]

  // setInterval(function(){
  //   setDate(new Date().toLocaleString())
  // }, 1000)

  useEffect(() => {
    let clock = setInterval(() => {
      setDate(new Date().toLocaleString('en-US', { timeZone: timeZone }))
    }, 1000);
    return () => clearInterval(clock);
  }, [date, timeZone]);

  const handleChange = (option) => {
    setIndex(option.target.options.selectedIndex)
    setTimeZone(option.target.value)
    setDate(new Date().toLocaleString('en-US', { timeZone: timeZone }))
  };

  return (
    <div className="App">
      <h2>Hello~ This is clock of</h2>
      <h1>{citys[index].label}</h1>
      <h2>{date}</h2>
      <select onChange={handleChange}>
        {citys.map(item => (
          <option
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
