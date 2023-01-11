import React from 'react';
import {functions} from '../../functions';
import './Editor.css';
import Tabs from '../tabs/Tabs';
import Write from '../write/Write';
import Preview from '../preview/Preview';

export default function Editor(props){
    const [isPreview, setIsPreview] = React.useState(false);

    function toggleWrite(){
        setIsPreview(prevState => false);
    }

    function togglePreview (event){
        setIsPreview(prevState => true);
    }

    return (
        <div className='editor'>
            <Tabs
                isPreview={isPreview}
                togglePreview={togglePreview}
                toggleWrite={toggleWrite}
            />
            {isPreview
            ?
            <Preview
                markdown={props.markdown}
                />
            :
            <Write
                markdown={props.markdown}
                handleChange={props.handleChange}
                edit={props.edit}
            />
            }
            <button onClick={functions.getText}>Save note</button>
        </div>
    )
}