import React from 'react';
import Split from 'react-split';
import './App.css';
import Sidebar from '../sidebar/Sidebar';
import Editor from '../editor/Editor';

export default function App(){
    const farm = 'farm';
    const newLine = '\n\n';
    const [markdown, setMarkDown] = React.useState('To the farm we go\n\n');
    // const [markdownReal, setMarkdownReal] = React.useState(markdown);

    // function handleChange (event){
    //     const raw = event.target.value;
    //     const noBr = raw.replaceAll('<br>', '\n');
    //     const noNbsp = noBr.replaceAll('&nbsp;', ' ');
    //     const noDivs = noNbsp.replace('<div>', '\n\n  ');
    //     const noEndDivs = noDivs.replace('</div>', '\n\n');

    //     // setMarkDown(html);
    //     // setMarkDown(markdown)
    //     console.log(raw)
    //     setMarkDown(noEndDivs);
    //     console.log(noEndDivs)
    //     console.log(markdown)
    // }

    // function handleChange (event) {
    //     // const reg = /[<?*>]/g
    //     // const reg = /\^<[a-z]/gi;
    //     // const reg = /<\/?[\w\s="/.':;#-/?]+>/gi;
    //     const reg = /<\/?[a-z][^>]*>/ig;
    //     const raw = event.target.value;
    //     const raw2 = raw.replaceAll('&nbsp;', ' ');
    //     const raw3 = raw2.replace('<div>', '\n\n');
    //     const filtered = raw3.replaceAll(reg, '')
    //     console.log(raw)
    //     console.log(raw2)
    //     console.log(raw3)
    //     console.log(filtered)
    //     setMarkDown(() => filtered);
    //     console.log(markdown)
    // }

    
    // function handleChange (event) {

    //     const raw = event.target.value;
    //     const reg = /<\/?[a-z][^>]*>/ig;

    //     const tag = raw.indexOf('<div>');
    //     console.log(raw[tag + 1]);

    //     const raw2 = raw.replaceAll('&nbsp;', ' ');

    //     const raw3 = raw2.replace('<br>', '\n\n');
    //     // const filtered = raw3.replaceAll(reg, '')
    //     console.log(raw)
    //     // console.log(raw2)
    //     console.log(raw3)
    //     // console.log(filtered)
    //     // setMarkDown(() => filtered);
    //     // console.log(markdown)
    // }

    function handleChange (event){
        const htmlTags = /<\/?[a-z][^>]*>/ig;
        const cat = event.target.value;
        const cet = cat.replaceAll('&nbsp;', ' ')
        const htmlTagIndex = cet.indexOf('<');

        const string1 = cet.substring(0, htmlTagIndex);
        const string2 = cet.substring(htmlTagIndex);
        const stringWithoutTags = string2.replaceAll(htmlTags, '');

        console.log(string1)
        console.log(string2)
        console.log(stringWithoutTags);

        const fullString = string1 + '\n\n¶' + stringWithoutTags;
        setMarkDown(fullString);
        console.log(markdown)
        
    }


    const edit = {
        applyEdit(event){
            const currentMarkdown = markdown;
            const selection = window.getSelection();
            const selectedTextRaw = selection.toString();
            const selectedText = selectedTextRaw.trim();

            const decorator = event.currentTarget.name;
            console.log(decorator);
            // console.log(selection)

            let startMarker = '';
            let endMarker = '';

            switch (decorator){
                case 'bold':
                    startMarker = '**';
                    endMarker = '**';
                    break;
                case 'italic':
                    startMarker = '_';
                    endMarker = '_';
                    break;
                case 'strikethrough':
                    startMarker = '~~';
                    endMarker = '~~';
                    break;
                case 'insertImage':
                    startMarker = '![';
                    endMarker = '](https://p.kindpng.com/picc/s/270-2706266_kepala-nobita-png-nobita-3d-head-png-transparent.png)';
                    break;
                case 'link':
                    startMarker = '[';
                    endMarker = '](http://yourlink.com)';
                    break;
                default:
                    startMarker = '';
                    endMarker = '';
            }

            if(selectedText !== ""){
                const start = selection.anchorOffset;
                const end = selection.focusOffset - 1;

                const selectionStart = selectedText.substring(0, 2);
                const selectionEnd = selectedText.substring(selectedText.length - 2);

                const boldText = startMarker + selectedText + endMarker;
            
                const str = currentMarkdown;
                const str1 = str.substring(0, start);
                const str2 = str.substring(end + 1);

                const spaceBeforeSelection = selectedTextRaw[0] === ' ' ? ' ' : '';
                const spaceAfterSelection = selectedTextRaw[selectedTextRaw.length - 1] === ' '? ' ' : '';

                let newMarkdown = '';

                if ((selectionStart === startMarker || selectionStart[0] === startMarker) && 
                (selectionEnd === endMarker || selectionEnd[selectionEnd.length - 1] === endMarker)){
                    // alert(`Text is already ${operation}`);
                    console.log(selectionStart);
                    console.log(selectionEnd);

                    const unboldText = selectedText.replaceAll(startMarker, '');
                    console.log(unboldText);
                    newMarkdown = str1 + spaceBeforeSelection + unboldText.trim() + spaceAfterSelection + str2;
                }
                else{ 
                    newMarkdown = str1 + spaceBeforeSelection + boldText + spaceAfterSelection + str2;
                    console.log(newMarkdown);
                }

                setMarkDown(newMarkdown);
            }
            else{
                // alert(`Select something to make ${operation}`)
                return markdown;
            }
        },
    };

    return (
        <div className='app'>
            <Split
                sizes={[25, 75]}
                gutterSize={8}
                minSize={300}
                className='flex'>

                    <Sidebar/>
                    <Editor
                        markdown={markdown}
                        handleChange={handleChange}
                        edit={edit}
                        />
            </Split>
        </div>
    )
}