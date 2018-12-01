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
  var houses = housesInit();
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
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
  for (var i = 0; i < houses.length; i++) {
    szoveg += '<tr><td>' +  houses[i].house + ' </td><td><img src=' +  houses[i].image + ' alt=' +  houses[i].house + '> </td><td>' +  parseInt(houses[i].sum, 10) + ' </td></tr>';
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
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if ( !gameOfThronesCharacters[i].dead) {
      al.push(gameOfThronesCharacters[i].name);
    }
  }
  al.sort();
  return al;
}

function writeMembers() {
  var al = aliveList();
  var de = deadList();
  var listAl = '<div "style=width:50%; float:left;">';
  var listDe = '<div "style=width:50%; float:right;">';
  var szoveg = '<tr><th>alive</th><th>dead</th></tr>';
  for (var i = 0; i < al.length; i++) {
    listAl += al[i] + '<br>';
  }
  listAl += '</div>';
  for ( i = 0; i < de.length; i++) {
    listDe += de[i] + '<br>';
  }
  listDe += '</div>';
  szoveg += '<tr><td>' + listAl + '</td><td>' + listDe + '</td></tr>';
  szoveg += '<tr><th>number of alive members</th><th>number of dead members</th></tr>';
  szoveg += '<tr><td>' + parseInt(al.length, 10) + '</td><td>' + parseInt(de.length, 10) + '</td></tr>';
  document.querySelector('#solution').innerHTML = '';
  document.querySelector('#solution').innerHTML = szoveg;
}

function orgesList() {
  var t = [];
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].organization) {
      if (!t.includes(gameOfThronesCharacters[i].organization)) {
        t.push(gameOfThronesCharacters[i].organization);
      }
    }
  }
  return t;
}


function orgesInit() {
  var obj = {};
  var orges = orgesList();
  var arr = [];
  for (var i = 0; i < orges.length; i++) {
    obj = {};
    obj.org = orges[i];
    obj.sum = 0;
    arr.push(obj);
  }
  return arr;
}

function orgSum() {
  var orges = orgesInit();
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if ( gameOfThronesCharacters[i].organization) {
      for (var j = 0; j < orges.length; j++)  {
        if (gameOfThronesCharacters[i].organization === orges[j].org) {
          orges[j].sum += 1;
          j = orges.length;
        }
      }
    }
  }
  return orges;
}

function writeOrgs() {
  var orges = orgSum();
  var szoveg = '<tr><th>name of organization</th><th>number of members</th></tr>';
  for (var i = 0; i < orges.length; i++) {
    szoveg += '<tr><td>' +  orges[i].org + ' </td><td>' +  parseInt(orges[i].sum, 10) + ' </td></tr>';
  }
  document.querySelector('#solution').innerHTML = '';
  document.querySelector('#solution').innerHTML = szoveg;
}
function writeNothing() {
  document.querySelector('#solution3').innerHTML = '';
}

function writeList(n) {
  var whatList = 0;

  switch (n) {
  case 1:writeHouses();
    break;
  case 2:writeMembers();
    break;
  case 3:writeOrgs();
    break;
  default:writeNothing();
  }
}
