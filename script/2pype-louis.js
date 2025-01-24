document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.querySelector('.next-btn');
  const rightSide1 = document.querySelector('.right-side-1');
  const rightSide2 = document.querySelector('.right-side-2');
  const call = document.querySelector('.call');
  const btnTrustLouis = document.getElementById('btn-trust-louis');
  const btnNoTrustLouis = document.getElementById('btn-no-trust-louis');
  const alertTrust = document.getElementById('trust');
  const alertLouis = document.getElementById('Alert-Louis');

  nextBtn.addEventListener('click', () => {
    rightSide1.style.display = 'none';
    rightSide2.style.display = 'none';
    call.style.display = 'grid';
  });

  btnTrustLouis.addEventListener('click', () => {
    alertTrust.style.display = 'block';
  });

  btnNoTrustLouis.addEventListener('click', () => {
    alertLouis.style.display = 'block';
  });

  alertTrust.addEventListener('click', () => {
    closeIFrame();
  });

  alertLouis.addEventListener('click', () => {
    closeIFrame();
  });
});
