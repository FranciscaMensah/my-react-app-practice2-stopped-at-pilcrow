export const functions = { 

    getSelectedText: function getSelectedText(){
        const selection = window.getSelection().toString();
        console.log(selection);
        return selection;
    },
};
