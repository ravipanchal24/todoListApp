import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'

class DisplayListClass extends Component {

    componentDidMount() {
        if (!this.props.list.length)
            document.querySelector(".error-message").classList.remove('hideErrorMessage');
        else
            document.querySelector(".error-message").classList.add('hideErrorMessage');
    }

    componentDidUpdate() {
        if (!this.props.list.length)
            document.querySelector(".error-message").classList.remove('hideErrorMessage');
        else
            document.querySelector(".error-message").classList.add('hideErrorMessage');
    }

    sortAsc = () => {
        const listCopy = [...this.props.list];
        listCopy.sort((a, b) => a.task.toLowerCase() > b.task.toLowerCase() ? 1 : -1);
        this.props.setList(listCopy);
    }

    sortDesc = () => {
        const listCopy = [...this.props.list];
        listCopy.sort((a, b) => a.task.toLowerCase() < b.task.toLowerCase() ? 1 : -1);
        this.props.setList(listCopy);
    }

    deleteTask(idx) {
        this.props.setList(this.props.list.filter((item, index) => index !== idx));
    }

    deleteTaskList() {
        if (!this.props.list.length)
            alert("Nothing to delete in the list");
        else {
            this.props.setList([]);
        }
    }
    setCheckbox(idx) {
        this.props.setList(this.props.list.map((item, index) => {
            if (index === idx) {
                document.querySelectorAll('.listItem')[idx].classList.toggle('strike-through');
                return ({ task: item.task, isChecked: !item.isChecked })
            }
            return item;
        }));
    }

    render(){
        return (<div className = "list-items-card" >
            <h1 style={{ color: "brown", float: "left" }}>My List</h1>
            <section className='sortContainer'>
                <p style={{margin:"0"}}>Sort</p>
                <FontAwesomeIcon className='sortIcon sortAsc' onClick={this.sortAsc} icon={faDownLong} />
                <FontAwesomeIcon className='sortIcon sortDesc' onClick={this.sortDesc} icon={faUpLong} />
            </section>
            <h2 className='error-message'>No tasks created yet!!</h2>
            <ul>{this.props.list.map((item, idx) =>
                <div className='list-row' key={idx}>
                    <input type={"checkbox"} checked={item.isChecked} className="checkbox" onChange={() => this.setCheckbox(idx)} />
                    <li className='listItem'>{item.task}</li>
                    <button className='deleteTask' onClick={() => this.deleteTask(idx)}><FontAwesomeIcon className='deleteIcon' icon={faMinus} /></button>
                </div>
            )}</ul>
            <FontAwesomeIcon icon={faTrashAlt} className='deleteTaskList' onClick={ () => this.deleteTaskList() } />
        </div>)
    }
}

export default DisplayListClass;
