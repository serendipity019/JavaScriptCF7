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
    renderBg(); //render based on theupdated state
}

function getBgColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const digits =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const hex = [...letters, ...digits];

    let randColor = '#' // initially start with #
    for (let i = 1; i <= 6; i++) {
        let randomHex = Math.floor(Math.random() * hex.length);
        randColor += hex[randomHex];
    }
    return randColor;
}

/**View -UI rendering*/
function renderBg() {
    document.querySelector('#hex').innerHTML = color;
    document.body.style.backgroundColor = color;
}
