function createGallery() {
  // gameOfThronesCharacters
  var galleryElement = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    galleryElement += `
    <div class="galleryElement">
    <img src="${gameOfThronesCharacters[i].picture}"
    alt="${gameOfThronesCharacters[i].name}" >
    </div>
    `;
  }
  document.querySelector('.galleryBody').innerHTML = galleryElement;
}

createGallery();
