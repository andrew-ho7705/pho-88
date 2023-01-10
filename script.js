const appetizerContainer = document.getElementsByClassName('.appetizers');

fetch('./menuItems.json')
    .then(response => response.json())
    .then(items => {
        
    });