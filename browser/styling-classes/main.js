const container = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {container.classList.add('container');
    container.classList.add('text-center');
    container.innerHTML = '<p>Hello JS with CSS classes</p>' });