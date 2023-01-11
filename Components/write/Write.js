import React from 'react';
import './Write.css';
import Textarea from '../textarea/Textarea';
import EditorTools from '../editorTools/EditorTools';
// import Markdown from 'react-markdown'

export default function Write(props){
    return (
        <div className='write'>
            <EditorTools
                markdown={props.markdown}
                edit={props.edit}/>
            <Textarea
                markdown={props.markdown}
                handleChange={props.handleChange}/>
        </div>
    )
}