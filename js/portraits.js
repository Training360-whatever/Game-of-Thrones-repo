var p = 0
while (p < gameOfThronesCharacters.length) {
  if (gameOfThronesCharacters.hasOwnProperty(p)) {
    document.querySelector('.portrai').innerHTML +=
      `
      <div class="prt"> 
      <img src="${gameOfThronesCharacters[p].portrait}" alt="${gameOfThronesCharacters[p].name}">
    <br>
    ${gameOfThronesCharacters[p].name}
    
      </div>`;
  }

  p++;
}