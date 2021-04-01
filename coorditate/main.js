const yy = document.querySelector('.yy');
const xx = document.querySelector('.xx');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;

    xx.style.left = `${x}px`;
    yy.style.top = `${y}px`;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerText = `${x}px, ${y}px`;
});