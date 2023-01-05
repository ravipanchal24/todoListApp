import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'

const DisplayList = ({ list, setList }) => {

    useEffect(() => {   
        if (!list.length)
        document.querySelector(".error-message").classList.remove('hideErrorMessage');
        else
        document.querySelector(".error-message").classList.add('hideErrorMessage');
    },[list]);

    const sortAsc = () => {
        const listCopy = [...list];
        listCopy.sort( (a,b) => a.task.toLowerCase() > b.task.toLowerCase() ? 1 : -1);
        setList(listCopy);
    }

    const sortDesc = () => {
        const listCopy = [...list];
        listCopy.sorty( (a,b) => a.task.toLowerCase() < b.task.toLowerCase() ? 1 : -1);
        setList(listCopy);
    }

    function deleteTask(idx) {
        setList(list.filter((item, index) => index !== idx));
    }

    function deleteTaskList()
    {
        if(!list.length)
        alert("Nothing to delete in the list");
        else{
        const listCopy = [];
        setList(listCopy);}
    }

    function setCheckbox(idx) {
        setList(list.map((item, index) => {
            if(index === idx) {
                document.querySelectorAll('.listItem')[idx].classList.toggle('strike-through');
                return({task: item.task, isChecked: !item.isChecked})
            }
            return item;
        }));
    }

    return (
        <div className="list-items-card">
            <h1 style={{ color: "brown", float: "left" }}>My List</h1>
            <section className='sortContainer'>
                <p style={{margin:"0"}}>Sort</p>
                <FontAwesomeIcon className='sortIcon sortAsc' onClick={sortAsc} icon={faDownLong} />
                <FontAwesomeIcon className='sortIcon sortDesc' onClick={sortDesc} icon={faUpLong} />
            </section>
            <h2 className='error-message'>No tasks created yet!!</h2>
            <ul>{list.map((item, idx) =>
                <div className='list-row' key={idx}>
                    <input type={"checkbox"} checked={item.isChecked} className="checkbox" onChange={() => setCheckbox(idx)} />
                    <li className='listItem'>{item.task}</li>
                    <button className='deleteTask' onClick={() => deleteTask(idx)}><FontAwesomeIcon className='deleteIcon' icon={faMinus} /></button>
                </div>
            )}</ul>
            <FontAwesomeIcon icon={faTrashAlt} className='deleteTaskList' onClick={deleteTaskList} />
        </div>
    );
};

export default DisplayList;
