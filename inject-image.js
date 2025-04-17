const img = document.createElement('img');
img.src = 'https://olivery4.github.io/mockumentary/silver-drop.png';
img.style.position = 'fixed';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';
img.style.zIndex = '10000';
img.style.width = '150px'; // optional size
img.style.height = 'auto';

document.body.appendChild(img);
