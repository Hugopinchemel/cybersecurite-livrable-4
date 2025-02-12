document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.querySelector('.next-btn');
  const rightSide1 = document.querySelector('.right-side-1');
  const rightSide2 = document.querySelector('.right-side-2');
  const call = document.querySelector('.call');
  const btnTrustPaul = document.getElementById('btn-trust-paul');
  const btnNoTrustPaul = document.getElementById('btn-no-trust-paul');
  const alertTrust = document.getElementById('trust');
  const alertPaul = document.getElementById('Alert-Paul');

  nextBtn.addEventListener('click', () => {
    rightSide1.style.display = 'none';
    rightSide2.style.display = 'none';
    call.style.display = 'grid';
  });

  btnTrustPaul.addEventListener('click', () => {
    alertTrust.style.display = 'block';
  });

  btnNoTrustPaul.addEventListener('click', () => {
    alertPaul.style.display = 'block';
  });

  alertTrust.addEventListener('click', () => {
    window.location.href = '2pype-maman.html';
  });

  alertPaul.addEventListener('click', () => {
    window.location.href = '2pype-maman.html';
  });
});
