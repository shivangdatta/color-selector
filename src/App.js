import './App.css';
import Displaysq from './Displaysq';
import Inputcl from './Inputcl';
import { useState } from 'react';

function App() {
  const [col , setCol] = useState('');


  return (
    <div className="App">
      <Displaysq 
        col= {col}
      />
      <Inputcl
        col = {col}
        setCol = {setCol}
      />
    </div>
  );
}

export default App;
