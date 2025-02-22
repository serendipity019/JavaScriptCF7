let color = undefined;

window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btn').addEventListener('click', function() {
        onClickMe();
    });
});

function onClickMe() {
    updateBg();
}

/**
 * Model
 */
function updateBg() {
    color = getBgColor(); //update state
    renderBg() //render based on theupdated state
}

function getBgColor() {
    const colors = ['black', 'red', 'green', 'white', 'blue'];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**View -UI rendering*/
function renderBg() {
    document.querySelector('#hex').innerHTML = color;
    document.body.style.backgroundColor = color;
}
