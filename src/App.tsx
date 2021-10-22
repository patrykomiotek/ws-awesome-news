import './App.css';

import { useState } from 'react';
import { Hello } from 'components/Hello';

function App() {
  const [age, setAge] = useState<number>(36);
  return (
    <div className="App">
      <button onClick={() => { setAge((age) => age + 1); }}>+</button>
      <Hello name="Patryk" age={age} />
    </div>
  );
}

export default App;
