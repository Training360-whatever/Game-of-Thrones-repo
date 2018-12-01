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
  return houses;
}

function writeHouses() {
  var houses = housesSum();
  var szoveg = '<tr><th>name of house</th><th>crest</th><th>number of members</th></tr>';
  for (i = 0; i < houses.length; i++) {
    szoveg += '<tr><td>' +  houses[i].house + ' </td><td><img src=' +  houses[i].image + ' alt=' +  houses[i].house + '> </td><td>' +  houses[i].sum + ' </td></tr>';
  }
  document.querySelector('#solution').innerHTML = '';
  document.querySelector('#solution').innerHTML = szoveg;
}


function deadList() {
  var t = [];
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead) {
      if (!t.includes(gameOfThronesCharacters[i].dead)) {
        t.push(gameOfThronesCharacters[i].name);
      }
    }
  }
  t.sort();
  return t;
}

function aliveList() {
  var al = [];
  var szoveg = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if ( !gameOfThronesCharacters[i].dead) {
      al.push(gameOfThronesCharacters[i].name);
    }
  }
  al.sort();
  return al;
}
// végrehajtás
// housesList();
// housesInit();
// housesSum();
// deadList();
// document.querySelector('#solution').innerHTML = '';
// btnElement = document.getElementById('showHouses');
// btnElement.addEventListener('click', writeHouses() );
// writeHouses();
// write
arr = aliveList();
for (i = 0; i < arr.length; i++) {
  document.querySelector('#solutions').innerHTML += arr[i] + ' <br>';
}
// for (i = 0; i < arr.length; i++) {
// document.querySelector('#solution').innerHTML += '<div width: 500px;>' + arr[i].house + '  <img src=' + arr[i].image + ' alt=' + arr[i].house + '>házak tagja ' + arr[i].sum + ' </div>';
// }
