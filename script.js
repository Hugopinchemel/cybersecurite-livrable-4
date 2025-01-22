document.addEventListener('DOMContentLoaded', () => {
    const blackSquare = document.createElement('div');
    blackSquare.className = 'black-square';
    document.body.appendChild(blackSquare);


    setTimeout(() => {
        blackSquare.style.opacity = '0';
    }, 100);

    setTimeout(() => {
        blackSquare.remove();
    }, 1100);
});