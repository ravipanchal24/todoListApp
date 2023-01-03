import './App.css';
import InputForm from './components/input';
import DisplayList from './components/displayList';
import { useState } from 'react';

import 'font-awesome/css/font-awesome.min.css';
function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <InputForm list={list} setList={setList} />
      <DisplayList list={list} />
    </div>
  );
}

export default App;
