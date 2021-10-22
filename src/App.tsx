import './App.css';

import React, { useState } from 'react';
import { Hello } from 'components/Hello';

function App() {
  const [age, setAge] = useState<number>(36);
  // React.MouseEvent
  // React.FormEvent
  // React.ChangeEvent
  // const handleClick = (event: React.MouseEvent) => {
  // React.MouseEventHandler
  // React.FormEventHandler
  // React.ChangeEventHandler
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setAge((age) => age + 1);
  }
  const handleDivClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setAge((age) => age + 1);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>+</button>
      <div onClick={handleDivClick}>Hello</div>
      <Hello name="Patryk" age={age} />
    </div>
  );
}

export default App;
