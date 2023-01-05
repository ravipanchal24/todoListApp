import './App.css';
import InputForm from './components/input';
import DisplayListClass from './components/DisplayListClass';
import { useState } from 'react';

import 'font-awesome/css/font-awesome.min.css';
function App() {
  const [list, setList] = useState([{ task:'Learn React', isChecked:false}, {task:'Cook Food', isChecked:false}, {task:'Watch TV', isChecked:false},{task:'Dry Clothes', isChecked:false}]);
  return (
    <div className="App">
      <InputForm list={list} setList={setList} />
      <DisplayListClass list={list} setList = {setList}/>
    </div>
  );
}

export default App;
