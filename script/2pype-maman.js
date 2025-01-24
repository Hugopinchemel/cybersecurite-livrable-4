document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.querySelector('.next-btn');
  const rightSide1 = document.querySelector('.right-side-1');
  const rightSide2 = document.querySelector('.right-side-2');
  const call = document.querySelector('.call');
  const btnTrustMaman = document.getElementById('btn-trust-maman');
  const btnNoTrustMaman = document.getElementById('btn-no-trust-maman');
  const alertTrust = document.getElementById('trust');
  const alertMaman = document.getElementById('alert-maman');

  nextBtn.addEventListener('click', () => {
    rightSide1.style.display = 'none';
    rightSide2.style.display = 'none';
    call.style.display = 'grid';
  });

  btnTrustMaman.addEventListener('click', () => {
    alertTrust.style.display = 'block';
  });

  btnNoTrustMaman.addEventListener('click', () => {
    alertMaman.style.display = 'block';
  });

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    window.location.href = '2pype-louis.html';
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
