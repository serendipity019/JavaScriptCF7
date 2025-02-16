const daysGR = ['Κυριακή', 'Δευτερα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
const monthGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαίου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωμβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];

let notes = [];
let count = 0;

window.addEventListener('DOMContentLoaded', function(){

    this.setInterval(printGrDate, 60000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function(){
        onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').ariaValueMax.trim(), softDeleted: false})
    });

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e){
        if (e.key === 'Enter') {
            onInsertHandler({key: count + 1, note: e.target.value.trim(), softDeleted: false })
        }
    });
}) 