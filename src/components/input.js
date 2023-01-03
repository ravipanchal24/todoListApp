import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const InputForm = ({ list, setList }) => {

  const [task, setTask] = useState('');

  const captureText = (e) => {
    setTask(e.target.value);
    if (e.key === 'Enter') {
      console.log('enter');
      addToList();
    }

  }
  const addToList = (e) => {
    e.preventDefault();
    if (task) {
      setList([...list, task]);
      setTask('');
    }
  }

  return (
    <div className="container">
      <div className="input-container">
        <input type="text" id="input-box" placeholder="Enter a new task" onChange={captureText} onKeyDown={captureText} value={task} />
        <button className="btn" onClick={addToList}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
    </div>
  );
};

export default InputForm;
