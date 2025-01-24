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
  cookiePopup.style.position = 'relative';
  cookiePopup.style.margin = '20px auto';
  cookiePopup.style.backgroundColor = 'white';
  cookiePopup.style.borderRadius = '10px';
  cookiePopup.style.backgroundImage = "url('../elements/pictures/backgrounds/cookie.png')";
  cookiePopup.style.backgroundSize = 'contain'; // Ensures the image is fully visible without being cropped
  cookiePopup.style.backgroundRepeat = 'no-repeat'; // Prevents the image from repeating
  cookiePopup.style.backgroundPosition = 'center';
  cookiePopup.style.width = '80%';
  cookiePopup.style.height = '60%';
  cookiePopup.style.padding = '20px';
  cookiePopup.style.textAlign = 'center';
  cookiePopup.style.display = 'flex';
  cookiePopup.style.flexDirection = 'column';
  cookiePopup.style.justifyContent = 'space-between';
  cookiePopup.style.position = 'relative';

  // Add the button
  const acceptButton = document.createElement('button');
  acceptButton.innerText = 'Accept';
  acceptButton.onclick = acceptCookies;

  // Style the button (retro Windows XP style)
  acceptButton.style.position = 'absolute';
  acceptButton.style.bottom = '10px'; // Position inside the image
  acceptButton.style.right = '10px'; // Position inside the image
  acceptButton.style.padding = '10px 20px';
  acceptButton.style.fontSize = '16px';
  acceptButton.style.border = '2px solid #A0A0A0';
  acceptButton.style.borderRadius = '4px';
  acceptButton.style.backgroundColor = '#E0E0E0';
  acceptButton.style.color = 'black';
  acceptButton.style.fontFamily = 'Tahoma, sans-serif'; // Classic Windows font
  acceptButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3), -1px -1px 2px white inset';
  acceptButton.style.cursor = 'pointer';

  // Add hover effect (subtle glow)
  acceptButton.onmouseover = function () {
    acceptButton.style.backgroundColor = '#D0D0D0';
    acceptButton.style.boxShadow = '2px 2px 8px rgba(0, 0, 0, 0.4), -1px -1px 2px white inset';
  };
  acceptButton.onmouseout = function () {
    acceptButton.style.backgroundColor = '#E0E0E0';
    acceptButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3), -1px -1px 2px white inset';
  };

  cookiePopup.appendChild(acceptButton);

  rightSideHud.appendChild(cookiePopup);
}


function acceptCookies() {
  const rightSideHud = document.getElementById('rightSideHud');
  rightSideHud.innerHTML = ''; // Clear the content of the right-side HUD

  const winPopup = document.createElement('div');
  winPopup.style.position = 'relative';
  winPopup.style.margin = '20px auto';
  winPopup.style.backgroundImage = "url('../elements/pictures/backgrounds/iphone.png')";
  winPopup.style.backgroundSize = 'contain'; // Ensures the image is fully visible without cropping
  winPopup.style.backgroundRepeat = 'no-repeat';
  winPopup.style.backgroundPosition = 'center';
  winPopup.style.width = '80%';
  winPopup.style.height = '60%';
  winPopup.style.padding = '20px';
  winPopup.style.textAlign = 'center';
  winPopup.style.display = 'flex';
  winPopup.style.flexDirection = 'column';
  winPopup.style.justifyContent = 'flex-end'; // Align buttons to the bottom
  winPopup.style.position = 'relative';

  // Create the "Close" button
  const closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.onclick = errorPopup;

  // Style the "Close" button (retro Windows XP style)
  closeButton.style.position = 'absolute';
  closeButton.style.bottom = '10px';
  closeButton.style.left = '10px';
  closeButton.style.padding = '10px 20px';
  closeButton.style.fontSize = '16px';
  closeButton.style.border = '2px solid #A0A0A0';
  closeButton.style.borderRadius = '4px';
  closeButton.style.backgroundColor = '#E0E0E0';
  closeButton.style.color = 'black';
  closeButton.style.fontFamily = 'Tahoma, sans-serif';
  closeButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3), -1px -1px 2px white inset';
  closeButton.style.cursor = 'pointer';

  // Add hover effect for "Close" button
  closeButton.onmouseover = function () {
    closeButton.style.backgroundColor = '#D0D0D0';
    closeButton.style.boxShadow = '2px 2px 8px rgba(0, 0, 0, 0.4), -1px -1px 2px white inset';
  };
  closeButton.onmouseout = function () {
    closeButton.style.backgroundColor = '#E0E0E0';
    closeButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3), -1px -1px 2px white inset';
  };

  // Create the "Accept" button
  const acceptButton = document.createElement('button');
  acceptButton.innerText = 'Accept';
  acceptButton.onclick = acceptPopup;

  // Style the "Accept" button (retro Windows XP style)
  acceptButton.style.position = 'absolute';
  acceptButton.style.bottom = '10px';
  acceptButton.style.right = '10px';
  acceptButton.style.padding = '10px 20px';
  acceptButton.style.fontSize = '16px';
  acceptButton.style.border = '2px solid #A0A0A0';
  acceptButton.style.borderRadius = '4px';
  acceptButton.style.backgroundColor = '#E0E0E0';
  acceptButton.style.color = 'black';
  acceptButton.style.fontFamily = 'Tahoma, sans-serif';
  acceptButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3), -1px -1px 2px white inset';
  acceptButton.style.cursor = 'pointer';

  // Add hover effect for "Accept" button
  acceptButton.onmouseover = function () {
    acceptButton.style.backgroundColor = '#D0D0D0';
    acceptButton.style.boxShadow = '2px 2px 8px rgba(0, 0, 0, 0.4), -1px -1px 2px white inset';
  };
  acceptButton.onmouseout = function () {
    acceptButton.style.backgroundColor = '#E0E0E0';
    acceptButton.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3), -1px -1px 2px white inset';
  };

  // Append buttons to the popup
  winPopup.appendChild(closeButton);
  winPopup.appendChild(acceptButton);

  rightSideHud.appendChild(winPopup);
}

function errorPopup() {
  const rightSideHud = document.getElementById('rightSideHud');
  rightSideHud.innerHTML = ''; // Clear the content of the right-side HUD

  const errorPopup = document.createElement('div');
  errorPopup.style.position = 'relative';
  errorPopup.style.margin = '20px auto';
  errorPopup.style.backgroundImage = "url('../elements/pictures/backgrounds/bulleok.jpg')";
  errorPopup.style.backgroundSize = 'contain'; // Ensures the image is fully visible without cropping
  errorPopup.style.backgroundRepeat = 'no-repeat';
  errorPopup.style.backgroundPosition = 'center';
  errorPopup.style.width = '80%';
  errorPopup.style.height = '60%';
  errorPopup.style.padding = '20px';
  errorPopup.style.textAlign = 'center';
  errorPopup.style.display = 'flex';
  errorPopup.style.flexDirection = 'column';
  errorPopup.style.justifyContent = 'center'; // Aligns content to the center
  errorPopup.style.cursor = 'pointer'; // Changes cursor to indicate it's clickable

  // Add an onclick event to the popup to redirect when clicked
  errorPopup.onclick = function () {
    window.location.href = 'nextpage.html'; // Replace 'nextpage.html' with your desired URL
  };

  // Add a message inside the popup (optional)
  const message = document.createElement('p');
  message.innerText = 'An error occurred. Click here to proceed.';
  message.style.margin = 'auto 0';
  message.style.fontSize = '18px';
  message.style.fontFamily = 'Tahoma, sans-serif';
  message.style.color = 'white';
  message.style.textShadow = '1px 1px 2px black';

  // Append the message to the popup
  errorPopup.appendChild(message);

  rightSideHud.appendChild(errorPopup);
}


function acceptPopup() {
  const rightSideHud = document.getElementById('rightSideHud');
  rightSideHud.innerHTML = ''; // Clear the content of the right-side HUD

  const acceptPopup = document.createElement('div');
  acceptPopup.style.position = 'relative';
  acceptPopup.style.margin = '20px auto';
  acceptPopup.style.backgroundImage = "url('../elements/pictures/backgrounds/bulle.png')";
  acceptPopup.style.backgroundSize = 'contain'; // Ensures the image is fully visible without cropping
  acceptPopup.style.backgroundRepeat = 'no-repeat';
  acceptPopup.style.backgroundPosition = 'center';
  acceptPopup.style.width = '80%';
  acceptPopup.style.height = '60%';
  acceptPopup.style.padding = '20px';
  acceptPopup.style.textAlign = 'center';
  acceptPopup.style.display = 'flex';
  acceptPopup.style.flexDirection = 'column';
  acceptPopup.style.justifyContent = 'center'; // Aligns content to the center
  acceptPopup.style.cursor = 'pointer'; // Changes the cursor to indicate it's clickable

  // Add an onclick event to redirect when the image is clicked
  acceptPopup.onclick = function () {
    window.location.href = 'target-page.html'; // Replace 'target-page.html' with your destination URL
  };

  // Add a message inside the popup (optional)
  const message = document.createElement('p');
  message.style.margin = 'auto 0';
  message.style.fontSize = '18px';
  message.style.fontFamily = 'Tahoma, sans-serif';
  message.style.color = 'white';
  message.style.textShadow = '1px 1px 2px black';

  // Append the message to the popup
  acceptPopup.appendChild(message);

  rightSideHud.appendChild(acceptPopup);
}


function closePopup() {
  const rightSideHud = document.getElementById('rightSideHud');
  rightSideHud.innerHTML = ''; // Clear the content of the right-side HUD
}
