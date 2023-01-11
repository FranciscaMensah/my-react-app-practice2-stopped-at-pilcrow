import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Split from 'react-split';

const root = ReactDOM.createRoot(document.getElementById('root'));

function ComponentA (){
    return(
        <div className='gray-2'>
        </div>
    )
}

function ComponentB (){
    return(
        <div className='gray-1'>
        </div>
    )
}

function ComponentC (){
    return(
        <div className='gray-1'>
        </div>
    )
}

function ComponentD (){
    return(
        <div className='gray-2'>
        </div>
    )
}

function App (){
    return ( 
        <div className='container'>         
            <Split
            className='flex'
            direction='horizontal'
                style={{height: '100vh'}}
                >
                <ComponentA/>
                <ComponentB/>
                {/* <ComponentC/>
                <ComponentD/> */}
            </Split>

        </div>
      )
}
