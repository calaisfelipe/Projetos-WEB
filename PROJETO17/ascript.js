//seletores

const searchBar = document.querySelector('#isearch')
const exportBtn = document.querySelector('#export-btn')
const newNoteInput = document.querySelector('#inote')
const addNoteBtn = document.querySelector('#new-note-btn')
const notesContainer = document.querySelector('#notes-container')

//Events
newNoteInput.addEventListener('keypress', (e) => {

    if (e.key == 'Enter' && newNoteInput.value != '') {
        localStoragedata(newNoteInput.value)
        newNoteInput.value = ''
    }

}

)

addNoteBtn.addEventListener('click', (e) => {

    localStoragedata(newNoteInput.value)
    newNoteInput.value = ''
})

function localStoragedata(noteContent) {

    const objNote = {
        id: geraId(),
        content: noteContent,
        fixed: false

    }

    createNote(noteContent, objNote.id, objNote.fixed)

    //LocalStorage

    localStorage.setItem('notes', JSON.stringify(arr))
}

//Create notes function -> main function <- 
function createNote(noteContent, id, fixed) {

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


        if (fixed) {
            newNote.classList.add('fixed-pin')
            noteTextArea.classList.add('fixed-pin')
            newNote.classList.add('priority')
        }

        //Events 

        //Remove Note
        iconCancel.addEventListener('click', () => {
            newNote.remove()

            let indice = arr.findIndex((obj) => obj.id == id)

            arr.splice(indice, 1)

            localStorage.setItem('notes', JSON.stringify(arr))

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

            let indice = arr.findIndex((obj) => obj.id == id)

            if (newNote.classList.contains('fixed-pin') && noteTextArea.classList.contains('fixed-pin') &&
                newNote.classList.contains('priority')) {

                arr[indice].fixed = true

                localStorage.setItem('notes', JSON.stringify(arr))
            } else {
                arr[indice].fixed = false
                localStorage.setItem('notes', JSON.stringify(arr))
            }

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


function geraId() {

    return Math.floor(Math.random() * 5000)
}


//program initial

var arr = []

const notesInMemory = localStorage.getItem('notes')
const allNotes = (JSON.parse(notesInMemory))
console.log(allNotes)

allNotes.forEach((el) => {
    createNote(el.content, el.id, el.fixed)
    arr.push(el)


});

