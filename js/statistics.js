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
  // var szoveg = '';
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
    szoveg += '<tr><td>' +  houses[i].house + ' </td><td><img src=' +  houses[i].image + ' alt=' +  houses[i].house + '> </td><td>' +  parseInt(houses[i].sum,10) + ' </td></tr>';
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
  // var szoveg = '';
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
  var szoveg='<tr><th>alive</th><th>dead</th></tr>';

  for (var i = 0; i < al.length; i++) {
    listAl += al[i] + '<br>';
  }
  listAl += '</div>';


  for ( i = 0; i < de.length; i++) {
    listDe += de[i] + '<br>';
  }
  listDe += '</div>';
  szoveg+='<tr><td>'+listAl+'</td><td>'+listDe+'</td></tr>';
  szoveg+='<tr><th>number of alive members</th><th>number of dead members</th></tr>';
  szoveg+='<tr><td>'+parseInt(al.length,10)+'</td><td>'+parseInt(de.length,10)+'</td></tr>';

  // var szoveg = '<tr><th>name of house</th><th>crest</th><th>number of members</th></tr>';

  document.querySelector('#solutionMembers').innerHTML = '';
  document.querySelector('#solutionMembers').innerHTML = szoveg;
  //alert(szoveg);
}
// végrehajtás
// housesList();
// housesInit();
// housesSum();
// deadList();
// document.querySelector('#solution').innerHTML = '';
// btnElement = document.getElementById('showHouses');
// btnElement.addEventListener('click', writeHouses() );
writeHouses();
writeMembers();
// write

//arr = aliveList();
//for (i = 0; i < arr.length; i++) {
 // document.querySelector('#solution').innerHTML += arr[i] + ' <br>';
//}
// for (i = 0; i < arr.length; i++) {
// document.querySelector('#solution').innerHTML += '<div width: 500px;>' + arr[i].house + '  <img src=' + arr[i].image + ' alt=' + arr[i].house + '>házak tagja ' + arr[i].sum + ' </div>';
// }
