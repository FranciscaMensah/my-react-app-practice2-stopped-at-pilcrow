import React from 'react';
import './EditorTools.css';
import {HiOutlineCode, HiLink} from 'react-icons/hi';
import {ImStrikethrough} from 'react-icons/im';
import {BsImageFill, BsLink} from 'react-icons/bs';
import {RiHeading, RiBold, RiItalic, RiUnderline, RiStrikethrough, RiCodeLine, RiDoubleQuotesR, RiImageFill} from 'react-icons/ri';
import {FaHeading, FaBold, FaItalic, FaUnderline} from 'react-icons/fa';
import {FiBold, FiLink} from 'react-icons/fi';
// import {BiHighlight} from 'react-icons/bi';
import {MdOutlineFormatListBulleted} from 'react-icons/md';
import {TbListCheck} from 'react-icons/tb';
import {AiOutlineOrderedList} from 'react-icons/ai';
import {RxTextAlignLeft, RxTextAlignCenter, RxTextAlignRight, RxTextAlignJustify} from 'react-icons/rx';

export default function EditorTools (props){
    return(
        <div className='editor-tools'>
            <div className='wrapper-1'>
                <button
                    className='btn-tool padding'>
                        <RiHeading size='19'/>
                </button>
                <button
                    name='bold'
                    onClick={props.edit.applyEdit}
                    className='btn-tool padding'>
                        <RiBold size='19'/>
                </button>
                <button
                    name='italic'
                    onClick={props.edit.applyEdit}
                    className='btn-tool padding'>
                        <RiItalic size='19'/>
                </button>
                {/* <button
                    className='btn-tool padding'>
                        <RiUnderline size='19'/>
                </button> */}
                <button
                    name='strikethrough'
                    onClick={props.edit.applyEdit}
                    className='btn-tool padding'>
                        <RiStrikethrough size='20'/>
                </button>
                <button
                    name='link'
                    onClick={props.edit.applyEdit}
                    className='btn-tool padding'>
                        <FiLink size='17'/>
                </button>
                <button
                    className='btn-tool padding'>
                        <RiDoubleQuotesR size='20'/>
                </button>
                <button
                    className='btn-tool padding'>
                        <RiCodeLine size='20'/>
                </button>
                <button
                    name='insertImage'
                    onClick={props.edit.applyEdit}
                    className='btn-tool padding'>
                        <RiImageFill size='20'/>
                </button>
            </div>

            <div className='wrapper-1'>
                <div className='divider'></div>
                <button className='btn-tool'>
                    <MdOutlineFormatListBulleted size='24'/>
                </button>
                <button className='btn-tool'>
                    <TbListCheck size='24'/>
                </button>
                <button className='btn-tool'>
                    <AiOutlineOrderedList size='24'/>
                </button>
                <div className='divider'></div>
                <button className='btn-tool'>
                    <RxTextAlignLeft size='25'/>
                </button>
                <button className='btn-tool'>
                    <RxTextAlignCenter size='25'/>
                </button>
                <button className='btn-tool'>
                    <RxTextAlignRight size='25'/>
                </button>
                <button className='btn-tool'>
                    <RxTextAlignJustify size='25'/>
                </button>
            </div>
        </div>
    )
}