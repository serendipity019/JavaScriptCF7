const DEFAULT = 0;
let counter = DEFAULT; //state -Model

window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked() );
    this.document.querySelector('#btnReset').addEventListener('click', () => onResetClicked() );
    this.document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked() );
});

/**
 * Handler -Controller
 */
function onDecreaseClicked() {
    decreaseCount();
}

function onResetClicked() {
    resetCount();
}

function onIncreaseClicked() {
    IncreaseCount();
}


/**
 * Part of Model */
function decreaseCount() {
    counter--;
    render(); //This make view
} 

function resetCount() {
    counter = DEFAULT;
    render();
}

function IncreaseCount() {
    counter++;
    render();
}

/** View */
function render() {
    const counterDOM = document.querySelector('#counter');
    counterDOM.textContent = counter;
    styleCounter(counterDOM);
}

function styleCounter(counterDOM) {
    counterDOM.classList.toggle('color-green', counter > 0); //need to write css class with the names color-green etc.
    counterDOM.classList.toggle('color-red', counter < 0);
    counterDOM.classList.toggle('color-black', counter == 0);
}

//This is make the same job like the function above
/* function styleCounter(counterDOM) {
    if (counter == 0) {
        counterDOM.style.color = 'black';
    } else if (counter > 0) {
        counterDOM.style.color = 'green';
    } else {
        counterDOM.style.color = 'red';
    }
} */


//-------------------------------------------------------------------------------------------
//this below is simple and work but it isn't conteporary good practice
/* let counter = 0; 

const btnDecr = document.getElementById('btnDecr');
const btnReset = document.getElementById('btnReset');
const btnIncr = document.getElementById('btnIncr');
let counterDOM = document.getElementById('counter');

btnDecr.addEventListener('click', function() {
    counter--;
    counterDOM.innerHTML = counter;
});

btnReset.addEventListener('click', function() {
    counter = 0;
    counterDOM.innerHTML = counter;
});

btnIncr.addEventListener('click', function() {
    counter++;
    counterDOM.innerHTML = counter;
}); */

