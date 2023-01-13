//seletores

const searchBar = document.querySelector('#isearch')
const exportBtn = document.querySelector('#export-btn')
const newNoteInput = document.querySelector('#inote')
const addNoteBtn = document.querySelector('#new-note-btn')
const notesContainer = document.querySelector('#notes-container')

//Events
newNoteInput.addEventListener('keypress', (e) => {

    if(e.key == 'Enter'){
        createNote(newNoteInput.value)
    newNoteInput.value = ''}

})

addNoteBtn.addEventListener('click', (e) => {

    createNote(newNoteInput.value)
    
    //localStorage

    let count = (localStorage.length + 1)

    localStorage.setItem( `note[${count}]` ,JSON.stringify(newNoteInput.value))

    newNoteInput.value = ''
})


//Create notes function -> main function <- 
function createNote(noteContent){

    if (noteContent == '') {
        alert('ERR0 - Digite algo na nota')
    } else {

        //div - note
        const newNote = document.createElement('div')
        newNote.classList.add('note')
        notesContainer.appendChild(newNote)


        //div - note-content
        const newNoteContent = document.createElement('div')
        newNoteContent.classList.add('note-content')
        newNote.appendChild(newNoteContent)

        //note-contnet > p
        const noteTextArea = document.createElement('textarea')
        noteTextArea.classList.add('note-text')
        noteTextArea.classList.add('static')
        //noteTextArea.classList.add('text-wrap')
        noteTextArea.value = noteContent
        newNoteContent.appendChild(noteTextArea)

        // note-contnet > div 
        const divMiniIcons = document.createElement('div')
        divMiniIcons.classList.add('note-mini-icons')
        newNoteContent.appendChild(divMiniIcons)

        // div > i

        const iconCancel = document.createElement('i')
        iconCancel.classList.add('bi')
        iconCancel.classList.add('bi-x')
        divMiniIcons.appendChild(iconCancel)

        const iconEdit = document.createElement('i')
        iconEdit.classList.add('bi')
        iconEdit.classList.add('bi-pencil-square')
        divMiniIcons.appendChild(iconEdit)

        //note > span

        const pinIcon = document.createElement('span')
        pinIcon.classList.add('fixed-icon')
        newNote.appendChild(pinIcon)

        //span > i 

        const iconPin = document.createElement('i')
        iconPin.classList.add('bi')
        iconPin.classList.add('bi-pin')
        pinIcon.appendChild(iconPin)

        //Events 

        //Remove Note
        iconCancel.addEventListener('click', () => {
            newNote.remove()
            localStorage.removeItem(`note[${localStorage.length}]`)
        
        })

        //Edit Note
        iconEdit.addEventListener('click', () => {
            noteTextArea.classList.toggle('static')
            noteTextArea.focus()

        })

        //Fixando a nota
        pinIcon.addEventListener('click', () => {
            newNote.classList.toggle('fixed-pin')
            noteTextArea.classList.toggle('fixed-pin')
            newNote.classList.toggle('priority')

        })


        //Pesquisa
        searchBar.addEventListener('input', () => {

            let pesquisa = searchBar.value

            if ((noteTextArea.value).match(pesquisa)) {
                if (newNote.classList.contains('hidden')) {
                    newNote.classList.remove('hidden')
                }
            } else {
                newNote.classList.add('hidden')
            }

        })

        

    }

}


//localStorage


    for( let i = 1; i < (localStorage.length +1) ; i++ ){

       let noteMemory =  localStorage.getItem(`note[${i}]`)

       createNote(JSON.parse(noteMemory))


    }