import React from 'react';
import './Textarea.css';
import ContentEditable from 'react-contenteditable';

export default function Textarea (props){
    const editableRef = React.useRef();

    return(
        <div className='Textarea'>
           
            <ContentEditable
                innerRef={editableRef}
                tagName='div'
                html={props.markdown}
                onChange={props.handleChange}
                className='text-area'
            />

            {/* <div 
            innerRef={editableRef}
            onChange={props.handleChange}
            className='text-area' contentEditable='true'>
                {props.markdown}
            </div> */}

            {/* <textarea
                value={props.markdown}
                onInput={props.handleChange}
                className={'text-area'}
            ></textarea> */}
            
        </div>
    )
}