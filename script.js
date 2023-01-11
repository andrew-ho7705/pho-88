const appetizerContainer = document.getElementsByClassName('.appetizers');

function displayAppetizers() {
  fetch('../menuItems.json')
    .then(response => response.json())
    .then(items => {
        items.Appetizers.forEach(item => {
          let text = document.createElement('p');
          text = item.Appetizers.id;
          appetizerContainer.appendChild(text);
        });
    });
}
