import './App.css';

import { useState } from 'react';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import { Hello } from 'components/Hello';
import { Button } from 'components/Button';
import { UserProvider } from 'components/UserContext';
import { Users } from 'components/Users';

function App() {
  const [age, setAge] = useState<number>(36);
  const [name, setName] = useState<string | null>(null); // "" - falsy value
  const [isLogged, setIsLogged] = useState<boolean>(false);
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
    // setAge((age) => age + 1);
    setIsLogged((state) => !state);
  }
  const contextValues = {
    isLogged,
    setIsLogged,
  }
  return (
    <div className="App">

      <input type="text" onChange={handleChange} />
      <Button onClick={handleClick}>+</Button>
      <UserProvider value={contextValues}>
        <div onClick={handleDivClick}>Hello</div>
        <Hello name={name} age={age} />
      </UserProvider>
      <Users />
    </div>
  );
}

export default App;
