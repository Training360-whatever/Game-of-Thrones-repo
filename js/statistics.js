function housesList() {
  var t = [];
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].house) {
      if (!t.includes(gameOfThronesCharacters[i].house)) {
        t.push(gameOfThronesCharacters[i].house);
      }
    }
  }
  t.sort();
  return t;
}

function housesInit() {
  var obj = {};
  var arr = [];
  var houses = housesList();
  for (var i = 0; i < houses.length; i++) {
    obj = {};
    obj.house = houses[i];
    obj.image = 'img/houses/' + houses[i] + '.png';
    obj.sum = 0;
    arr.push(obj);
  }
  return arr;
}

function housesSum() {
  var szoveg = '';
  var houses = housesInit();
  for (i = 0; i < gameOfThronesCharacters.length; i++) {
    if ( gameOfThronesCharacters[i].house) {
      for (var j = 0; j < houses.length; j++)  {
        if (gameOfThronesCharacters[i].house === houses[j].house) {
          houses[j].sum += 1;
          j = houses.length;
        }
      }
    }
  }

  // document.querySelector('#solution').innerHTML = szoveg;

  // write
  // for (i = 0; i < t.length; i++) {
  // document.querySelector('#solution').innerHTML += ', ' + t[i];
  // }

  return houses;
}

// végrehajtás
// housesList();
// housesInit();
housesSum();

// write
arr = housesSum();

for (i = 0; i < arr.length; i++) {
  document.querySelector('#solution').innerHTML += '<div width: 500px;>' + arr[i].house + '  <img src=' + arr[i].image + ' alt=' + arr[i].house + '>házak tagja ' + arr[i].sum + ' </div>';
}
