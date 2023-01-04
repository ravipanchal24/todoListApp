import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const InputForm = ({ list, setList }) => {

  const [task, setTask] = useState('');

  const captureText = (e) => setTask(e.target.value);
  const captureEnter = (e) => {
    if (e.key === 'Enter' && task) {
      setList([...list,{task,isChecked:false}]);
      setTask('');
    }
  }
  
  const addToList = (e) => {
    e.preventDefault();
    if (task) {
      setList([...list,{task:task, isChecked:false}]);
      setTask('');
    }
  }

  return (
    <div className="container">
      <div className="input-container">
        <input type="text" id="input-box" placeholder="Enter a new task" onChange={captureText} onKeyDown={captureEnter} value={task} />
        <button className="btn" onClick={addToList}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
    </div>
  );
};

export default InputForm;
