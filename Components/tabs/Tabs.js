import React from 'react';
import './Tabs.css';

export default function Tab(props){

    return(
        <div className='tabs'>
            <button
                style={{color: props.isPreview? '#999999' : 'inherit'}}
                onClick={props.toggleWrite}
                className='btn-nude'
                >Write
            </button>
            <div className='divider'></div>
            <button 
                style={{color: props.isPreview? 'inherit' : '#999999'}}
                onClick={props.togglePreview}
                className='btn-nude'>
                Preview
            </button>
        </div>
    )
}