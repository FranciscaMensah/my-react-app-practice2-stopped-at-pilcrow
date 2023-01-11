import React from 'react';
import './Sidebar.css';
// import {IoAddCircle} from 'react-icons/io5';

export default function Sidebar(){
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <h1>Notes</h1>
                {/* <IoAddCircle
                    color='#1c2a5a'
                    size='38'/> */}
            </div>
            <div className='note-banner'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <ul>
                <li>Note 1</li>
                <li>Note 2</li>
                <li>Note 3</li>
                <li>Note 4</li>
            </ul>
        </div>
    )
}