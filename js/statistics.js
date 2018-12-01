function housesList() {
  var t = [];
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].house) {
      if (!t.includes(gameOfThronesCharacters[i].house)) {
        t.push(gameOfThronesCharacters[i].house);
      }
    }
  }


  return t;
}

// végrehajtás
housesList();

// write
t = housesList();
for (i = 0; i < t.length; i++) {
  document.querySelector('#solution').innerHTML +=  t[i]+'<br> ';
}

