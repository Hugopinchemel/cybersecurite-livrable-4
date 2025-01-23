document.addEventListener('DOMContentLoaded', () => {
  const nextBtnPaul = document.querySelector('.next-btn-paul');
  const nextBtnMaman = document.querySelector('.next-btn-maman');
  const nextBtnLouis = document.querySelector('.next-btn-louis');
  const rightSide1 = document.querySelectorAll('.right-side-1');
  const rightSide2 = document.querySelectorAll('.right-side-2');
  const callPaul = document.querySelector('.call-paul');
  const callMaman = document.querySelector('.call-maman');
  const callLouis = document.querySelector('.call-louis');

  function hideAll() {
    rightSide1.forEach(element => element.style.display = 'none');
    rightSide2.forEach(element => element.style.display = 'none');
    callPaul.style.display = 'none';
    callMaman.style.display = 'none';
    callLouis.style.display = 'none';
  }

  nextBtnPaul.addEventListener('click', () => {
    hideAll();
    callPaul.style.display = 'block';
  });

  nextBtnMaman.addEventListener('click', () => {
    hideAll();
    callMaman.style.display = 'block';
  });

  nextBtnLouis.addEventListener('click', () => {
    hideAll();
    callLouis.style.display = 'block';
  });
});
