function performSearch() {
  const query = document.getElementById('searchInput').value;
  const resultsList = document.getElementById('resultsList');

  // Clear previous results
  resultsList.innerHTML = '';

  if (query.trim() === '') {
    alert('Please enter a search term.');
    return;
  }

  // Simulate results with descriptions and URLs
  const sources = [
    {
      title: `Wikipedia - ${query}`,
      url: 'https://www.wikipedia.org',
      description: `Find information about ${query} on Wikipedia.`
    },
    {
      title: `${query} News - Sud Ouest`,
      url: 'https://www.sudouest.fr',
      description: `Latest news about ${query} from Sud Ouest.`
    },
    {
      title: `${query} - Official Page`,
      url: 'https://www.officialsite.com',
      description: `The official page for ${query}.`
    },
    {
      title: `${query} Reviews - TrustPilot`,
      url: 'https://www.trustpilot.com',
      description: `Check reviews about ${query} on TrustPilot.`
    },
    {
      title: `${query} Forum Discussions`,
      url: 'https://www.forum.com',
      description: `Join discussions about ${query} on this forum.`
    }
  ];

  sources.forEach(source => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const url = document.createElement('div');
    const description = document.createElement('div');

    link.href = '#'; // Prevent default link navigation
    link.textContent = source.title;
    link.onclick = () => showCookiePopup(); // Show cookie popup on click

    url.textContent = source.url;
    url.className = 'url';

    description.textContent = source.description;
    description.className = 'description';

    listItem.appendChild(link);
    listItem.appendChild(url);
    listItem.appendChild(description);
    resultsList.appendChild(listItem);
  });
}

function showCookiePopup() {
  const rightSideHud = document.getElementById('rightSideHud');
  rightSideHud.innerHTML = ''; // Clear the content of the right-side HUD

  const cookiePopup = document.createElement('div');
  cookiePopup.style.position = 'fixed';
  cookiePopup.style.top = '50%';
  cookiePopup.style.left = '50%';
  cookiePopup.style.transform = 'translate(-50%, -50%)';
  cookiePopup.style.backgroundColor = 'white';
  cookiePopup.style.border = '2px solid black';
  cookiePopup.style.padding = '20px';
  cookiePopup.style.zIndex = '1000';
  cookiePopup.style.textAlign = 'center';
  cookiePopup.innerHTML = `
                <p>Do you accept cookies?</p>
                <button onclick="acceptCookies()">Accept</button>
            `;

  document.body.appendChild(cookiePopup);
}

function acceptCookies() {
  const cookiePopup = document.querySelector('div[style*="z-index: 1000"]');
  if (cookiePopup) cookiePopup.remove();

  const winPopup = document.createElement('div');
  winPopup.style.position = 'fixed';
  winPopup.style.top = '50%';
  winPopup.style.left = '50%';
  winPopup.style.transform = 'translate(-50%, -50%)';
  winPopup.style.backgroundColor = 'white';
  winPopup.style.border = '2px solid black';
  winPopup.style.padding = '20px';
  winPopup.style.zIndex = '1000';
  winPopup.style.textAlign = 'center';
  winPopup.innerHTML = `
                <p>Congratulations! You won an iPhone!</p>
                <button onclick="errorPopup()">Close</button>
                <button onclick="acceptPopup()">Accept</button>/

            `;

  document.body.appendChild(winPopup);
}

function errorPopup() {
  const winPopup = document.querySelector('div[style*="z-index: 1000"]');
  if (winPopup) winPopup.remove();

  const errorPopup = document.createElement('div');
  errorPopup.style.position = 'fixed';
  errorPopup.style.top = '50%';
  errorPopup.style.left = '50%';
  errorPopup.style.transform = 'translate(-50%, -50%)';
  errorPopup.style.backgroundColor = 'white';
  errorPopup.style.border = '2px solid black';
  errorPopup.style.padding = '20px';
  errorPopup.style.zIndex = '1000';
  errorPopup.style.textAlign = 'center';
  errorPopup.innerHTML = `
                <p>Bravo</p>
                <button onclick="closePopup()">Close</button>
            `;

  document.body.appendChild(errorPopup);
}

function acceptPopup() {
  const winPopup = document.querySelector('div[style*="z-index: 1000"]');
  if (winPopup) winPopup.remove();

  const acceptPopup = document.createElement('div');
  acceptPopup.style.position = 'fixed';
  acceptPopup.style.top = '50%';
  acceptPopup.style.left = '50%';
  acceptPopup.style.transform = 'translate(-50%, -50%)';
  acceptPopup.style.backgroundColor = 'white';
  acceptPopup.style.border = '2px solid black';
  acceptPopup.style.padding = '20px';
  acceptPopup.style.zIndex = '1000';
  acceptPopup.style.textAlign = 'center';
  acceptPopup.innerHTML = `
                <p>Piegé</p>
                <button onclick="closePopup()">Close</button>
            `;

  document.body.appendChild(acceptPopup);
}

function closePopup() {
  const popup = document.querySelector('div[style*="z-index: 1000"]');
  if (popup) popup.remove();
}
