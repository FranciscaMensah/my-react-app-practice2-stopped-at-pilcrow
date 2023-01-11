import React from 'react';
import './Preview.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
// import {Remark} from 'react-remark';

export default function Preview (props){
    return(
        <div className='preview'>
             {/* <ReactMarkdown
                children={props.markdown}
                // remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
                // rehypePlugins={[[rehypeRaw, {allowDangerousHtml: true}]]}
                // skipHtml={true}
             /> */}

             {/* <Remark
                remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
                >
                {props.markdown}
             </Remark> */}

             <ReactMarkdown
                children={props.markdown}
                skipHtml={true}
                // options={{wrapper: 'article'}}
                remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
             >
                {/* {props.markdown} */}
                {/* {'nh\n\n~~gg~~'} */}
                {}
             </ReactMarkdown>
        </div>
    )
}