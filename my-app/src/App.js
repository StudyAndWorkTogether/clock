import React, { useState, useEffect } from 'react';

function App() {
  const [timeZone, setTimeZone] = useState('America/New_York')
  const [date, setDate] = useState(new Date().toLocaleString('en-US', { timeZone: timeZone }));
  const [index, setIndex] = useState(0)
  const citys = [
    {label: 'New York', value: 'America/New_York'},
    {label: 'Taipei', value:'Asia/Taipei'},
    {label: 'Tokyo', value:'Asia/Tokyo'},
    {label: 'Los Angeles', value:'America/Los_Angeles'},
    {label: 'Singapore', value:'Asia/Singapore'}
  ]

  const handleChange = (event) => {
    setIndex(event.target.options.selectedIndex)
    setTimeZone(event.target.value)
  };

  useEffect(() => {
    setDate(new Date().toLocaleString('en-US', { timeZone: timeZone }))
    let clock = setInterval(() => {
      setDate(new Date().toLocaleString('en-US', { timeZone: timeZone }))
    }, 1000);
    return () => clearInterval(clock)
  }, [timeZone]);

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
