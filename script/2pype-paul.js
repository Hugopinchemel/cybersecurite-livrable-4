document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.querySelector('.next-btn');
  const rightSide1 = document.querySelector('.right-side-1');
  const rightSide2 = document.querySelector('.right-side-2');
  const call = document.querySelector('.call');
  const btnTrustPaul = document.getElementById('btn-trust-paul');
  const btnNoTrustPaul = document.getElementById('btn-no-trust-paul');
  const alertTrust = document.getElementById('trust');
  const alertPaul = document.getElementById('alert-paul');

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

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    window.location.href = '2pype-maman.html';
  });

  const showAlert = (alertId) => {
    document.getElementById(alertId).style.display = 'block';
    overlay.style.display = 'block';
  };

  const hideAlert = (alertId) => {
    document.getElementById(alertId).style.display = 'none';
    overlay.style.display = 'none';
  };
});
