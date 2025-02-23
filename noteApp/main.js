const daysGR = ['Κυριακή', 'Δευτερα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
const monthGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαίου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωμβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];

let notes = [];
let count = 0;

window.addEventListener('DOMContentLoaded', function(){

    this.setInterval(printGrDate, 30000) // make refresh every 30 sec

    this.document.querySelector('#addNoteBtn').addEventListener('click', function(){
        onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').ariaValueMax.trim(), softDeleted: false})
    });

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e){
        if (e.key === 'Enter') {
            onInsertHandler({key: count + 1, note: e.target.value.trim(), softDeleted: false })
        }
    });
});

function printGrDate() {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const sec = currentDate.getSeconds();

    const dayStr = daysGR[day];
    const monthStr = monthGR[month];

    const dateStr = `${dayStr}, ${date} ${monthStr} ${year}`;
    const timeStr = `${(hours < 10) ? '0' : ''}${hours}: ${(minutes < 10) ? '0' : ''}${minutes}: ${(sec < 10) ? '0' : ''}${sec} `;
    document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr;
}

/**
 * Controller in MVC
 * @param {object} data 
 * @returns nothing if data.note is empty or null
 */
function onInsertHandler(data) {
    if (!data.note) return;
    insertNote(data);
    resizeTo();
}

/**
 * Model function, inserts a new note
 * @param {*} note 
 */
function insertNote(note) {
    notes = [...notes, note];
    count++;
    renderNotes();
}

/*View Rendering */
function renderNotes() {
    const containerWrap = document.getElementById('notesWrapper');

    containerWrap.innerHTML = notes.map((note) => `
    <div id="${'noteTemplate' + note.key}" class="flex justify-between items-center px-[10px] py-[2px] border-b   border-black">
        <div id="${'noteInfo' + note.key}" class = "flex items-center">
            <input type="checkbox" id="${'noteCheck' + note.key}" onclick="strikeThrough(${note.key})" class="w-[25px] h-[25px] mr-[5px]" ${note.softDeleted ? 'checked' : ''}>
            <label id="${'noteTxt' + note.key}" for="${'noteCheck' + note.key}" class="w-[200px] max-h-[150px] leading-[1.2rem] overflow-hidden break-words whitespace-normal text-base ${note.softDeleted ? 'line-through text-gray-500' : ''}">${note.note} </label> 
        </div>

        <button type="button" id="${'noteDelBtn' + note.key}" class="w-[35px] h-[35px]" onclick="deleteNote(${note.key})">X</button> 
    </div>
    `).join("")
}

/* Model function */
function strikeThrough(key) {
notes = notes.map(note => note.key === key ? {...note, softDeleted: !note.softDeleted} : {...note});
renderNotes();
}

function deleteNote(key) {
    notes = notes.filter(note => note.key !== key);
    renderNotes();
}

/**
 * View function
 */
function reset() {
    document.querySelector('#inputNote').value = "";
}