const fs = require('fs'); 
const chalk = require('chalk'); 
const { Console } = require('console'); 


const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) =>note.title===title) 

    if(!duplicateNotes){
            notes.push({
            title: title,
            body: body
        })
    
     saveNotes(notes)
     console.log('New Notes Added')
    }
    else{
        console.log('Title already taken')
    }

}

 
const removeNote = (title) => {
     const notes = loadNotes();
     const removeNote = notes.filter((note) => note.title !== title
    )

    if(removeNote.length===notes.length){
        console.log(chalk.bgRed('No note found!'));
    }
    else{
        console.log(chalk.bgGreen('Notes removed!'));
    }

    saveNotes(removeNote);
}


const listNotes = () => {
     const notes = loadNotes();
    
    console.log(chalk.bgBlue('Your Notes!'));
    
    notes.forEach(x => console.log(x.title));
}

const readNotes = (title) => {
     const notes = loadNotes();
    const readNote = notes.find((note) =>note.title===title)
    if(readNote){
        console.log(chalk.bgBlueBright('The title is' +readNote.title));
        console.log(readNote.body);
    }
    else {
        console.log(chalk.bgRed('Note didnt Exist'))
    }
}


const saveNotes =  (notes) => {
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=> {
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }catch(e){
       return []
    }
}

module.exports = {
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes:readNotes
}


// If it's a Method use concise function to refactor the code otherwise use arrow function possible.
