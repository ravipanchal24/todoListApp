import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons'

const DisplayList = ({ list }) => {

    function sortListAscending() {
        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[i] > list[j]) {
                    let num = list[i];
                    list[i] = list[j];
                    list[j] = num;
                }
            }
        }
    }

    if (list != "")
        document.querySelector(".error-message").classList.add('hideErrorMessage');
        return (
            <div className="list-items">
                <h1 style={{ color: "brown", float: "left" }}>My List</h1>
                <section className='sortContainer'>
                    <button className='sortDropdown' onClick={sortListAscending}> Sort <FontAwesomeIcon className='sortIcon' icon={faSort} />
                    </button>
                </section>
                <h2 className='error-message'>No tasks created yet!!</h2>
                <ul>{list.map((item) =>
                    <li>{item}</li>
                )}</ul>
            </div>
        );
};

export default DisplayList;
