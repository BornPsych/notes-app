const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');
const { readNotes } = require('./notes.js');
 
// const strings1 = getNotes();
// console.log(strings1);
// console.log(chalk.bgGreen('Success'));
// console.log(validator.isURL('andrewexample.com'))
// console.log(process.argv);

// * We are going to create the command line app for note taking... *

/// On our notes app we want to
// add, remove read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe: 'Body of a note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)

    }
})


// Remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'list all the note',
    handler(){
        notes.listNotes()
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'read note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse();

//console.log(yargs.argv)
