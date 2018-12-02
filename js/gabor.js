function houseOrOrganizationOrElse() {
  var i = 0;
  while (i < gameOfThronesCharacters.length) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      if (gameOfThronesCharacters[i].organization) {
        document.querySelector(`#house${[i]}`).innerHTML +=
          `${gameOfThronesCharacters[i].organization}`;
        document.querySelector(`#logo${[i]}`).innerHTML +=
          `<img src='./img/houses/${gameOfThronesCharacters[i].organization}.png' alt='${gameOfThronesCharacters[i].organization}-logo'>`;
      } else if (gameOfThronesCharacters[i].house) {
        document.querySelector(`#house${[i]}`).innerHTML +=
          `${gameOfThronesCharacters[i].house}`;
        document.querySelector(`#logo${[i]}`).innerHTML +=
          `<img src='./img/houses/${gameOfThronesCharacters[i].house}.png' alt='${gameOfThronesCharacters[i].house}-logo'>`;
      } else if (gameOfThronesCharacters[i].alias) {
        document.querySelector(`#house${[i]}`).innerHTML +=
          `alias:<br>${gameOfThronesCharacters[i].alias}`;
      }
    }
    i++;
  }
}

function svgDeleteAndEditSymbol() {
  var i = 0;
  while (i < gameOfThronesCharacters.length) {
    document.querySelector(`#table-remove-${[i]}`).innerHTML =
      `<svg onclick='deleteRow(${[i]})' viewBox='0 0 200 200' width='40'><g class='iksz' transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
    fill='#000000' stroke='none'>
    <path d='M195 1800 l-200 -200 300 -300 300 -300 -300 -300 -300 -300 203 -202 202 -203 300 300 300 300 300 -300 300 -300 202 203 203 202 -300 300
    -300 300 300 300 300 300 -203 202 -202 203 -300 -300 -300 -300 -298 298 c-163 163 -299 297 -302 297 -3 0 -95 -90 -205 -200z'/>
    </g></svg>`;
    document.querySelector(`#table-edit-${[i]}`).innerHTML =
      `<svg onclick='editRow(${[i]})' viewBox='0 0 200 200' width='40'><g class='edit-symbol' transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
    fill='#000000' stroke='none'>
    <path d='M1144 1438 l-460 -463 -78 -187 c-73 -175 -77 -188 -64 -214 27 -57 46 -54 261 37 l196 83 451 451 c421 422 450 453 450 485 0 32 -12 48 -118 153
    -97 97 -122 117 -147 117 -27 0 -88 -58 -491 -462z m539 140 l-53 -53 -50 50 -50 49 52 53 53 53 50 -50 50 -50 -52 -52z m-170 -76 l47 -47 -310 -310 -310
    -310 -50 50 -50 50 307 307 c169 170 310 308 313 308 3 0 27 -21 53 -48z'/>
    <path d='M122 1614 l-22 -15 0 -734 c0 -654 2 -735 16 -749 14 -14 95 -16 745 -16 716 0 729 0 749 20 19 19 20 33 20 395 0 362 -1 376 -20 395 -26 26 -81
    26 -103 2 -15 -17 -17 -55 -17 -345 l0 -327 -630 0 -630 0 0 625 0 625 330 0 c317 0 331 1 350 20 11 11 20 33 20 50 0 17 -9 39 -20 50 -19 19 -33 20 -393
    20 -321 0 -376 -2 -395 -16z'/>
    </g></svg>`;
    i++;
  }
}

function initialListing() {
  var i = 0;
  while (i < gameOfThronesCharacters.length) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      document.querySelector('.table__body').innerHTML +=
        `<tr>
      <td>${gameOfThronesCharacters[i].name}</td>
      <td><img src='${gameOfThronesCharacters[i].portrait}' alt='${gameOfThronesCharacters[i].name}'></td>
      <td id='house${[i]}'></td>
      <td id='logo${[i]}'></td>
      <td contenteditable=false id='bio-editable${[i]}'>${gameOfThronesCharacters[i].bio}</td>
      <td id='table-edit-${[i]}'></td>
      <td id='table-remove-${[i]}'></td>
      </tr>`;
    }
    i++;
  }
  houseOrOrganizationOrElse();
  svgDeleteAndEditSymbol();
}

initialListing();

function deleteRow(i) {
  var td = document.getElementById(`table-remove-${[i]}`)
  var tr = td.parentNode;
  tr.parentNode.removeChild(tr)
}

function editRow(i) {
  var bioText = document.getElementById(`bio-editable${[i]}`);
  bioText.contentEditable = true;
  bioText.focus();
}

function compareByName(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function compareByHouse(a, b) {
  if (a.house < b.house)
    return -1;
  if (a.house > b.house)
    return 1;
  return 0;
}

function compareByOrganization(a, b) {
  if (a.organization < b.organization)
    return -1;
  if (a.organization > b.organization)
    return 1;
  return 0;
}

function ascByName() {
  gameOfThronesCharacters.sort(compareByName);
  document.querySelector('.table__body').innerHTML = '';
  initialListing();
}

function descByName() {
  gameOfThronesCharacters.sort(compareByName);
  var i = gameOfThronesCharacters.length - 1;
  document.querySelector('.table__body').innerHTML = '';
  while (i >= 0) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      document.querySelector('.table__body').innerHTML +=
        `<tr>
      <td>${gameOfThronesCharacters[i].name}</td>
      <td><img src='${gameOfThronesCharacters[i].portrait}' alt='${gameOfThronesCharacters[i].name}'></td>
      <td id='house${[i]}'></td>
      <td id='logo${[i]}'></td>
      <td contenteditable=false id='bio-editable${[i]}'>${gameOfThronesCharacters[i].bio}</td>
      <td id='table-edit-${[i]}'></td>
      <td id='table-remove-${[i]}'></td>
      </tr>`;
    }
    i -= 1;
  }
  houseOrOrganizationOrElse();
  svgDeleteAndEditSymbol();
}

function ascByHouse() {
  gameOfThronesCharacters.sort(compareByHouse);
  gameOfThronesCharacters.sort(compareByOrganization);
  document.querySelector('.table__body').innerHTML = '';
  initialListing();
}

function descByHouse() {
  gameOfThronesCharacters.sort(compareByHouse);
  gameOfThronesCharacters.sort(compareByOrganization);
  var i = gameOfThronesCharacters.length - 1;
  document.querySelector('.table__body').innerHTML = '';
  while (i >= 0) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      document.querySelector('.table__body').innerHTML +=
        `<tr>
      <td>${gameOfThronesCharacters[i].name}</td>
      <td><img src='${gameOfThronesCharacters[i].portrait}' alt='${gameOfThronesCharacters[i].name}'></td>
      <td id='house${[i]}'></td>
      <td id='logo${[i]}'></td>
      <td contenteditable=false id='bio-editable${[i]}'>${gameOfThronesCharacters[i].bio}</td>
      <td id='table-edit-${[i]}'></td>
      <td id='table-remove-${[i]}'></td>
      </tr>`;
    }
    i -= 1;
  }
  houseOrOrganizationOrElse();
  svgDeleteAndEditSymbol();
}
