import './App.css';

import { useState } from 'react';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import { Hello } from 'components/Hello';
import { Button } from 'components/Button';

function App() {
  const [age, setAge] = useState<number>(36);
  const [name, setName] = useState<string | null>(null); // "" - falsy value
  // React.MouseEvent
  // React.FormEvent
  // React.ChangeEvent
  // const handleClick = (event: React.MouseEvent) => {
  // React.MouseEventHandler
  // React.FormEventHandler
  // React.ChangeEventHandler
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setAge((age) => age + 1);
  }
  const handleDivClick: MouseEventHandler<HTMLDivElement> = () => {
    setAge((age) => age + 1);
  }
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <Button onClick={handleClick}>+</Button>
      <div onClick={handleDivClick}>Hello</div>
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;
