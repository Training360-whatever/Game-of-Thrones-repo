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
      <td><img src='./img/icons/edit.png' alt='edit' onclick='editRow(${[i]})' class='table-edit'></td>
      <td><img src='./img/icons/delete.png' alt='delete' onclick='deleteRow()' class='table-remove'></td>
      </tr>`;
    }
    i++;
  }
  houseOrOrganizationOrElse();
}

initialListing();

function deleteRow() {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  tr.parentNode.removeChild(tr);
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
      <td><img src='./img/icons/edit.png' alt='edit' onclick='editRow(${[i]})' class='table-edit'></td>
      <td><img src='./img/icons/delete.png' alt='delete' onclick='deleteRow()' class='table-remove'></td>
      </tr>`;
    }
    i -= 1;
  }
  houseOrOrganizationOrElse();
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
      <td><img src='./img/icons/edit.png' alt='edit' onclick='editRow(${[i]})' class='table-edit'></td>
      <td><img src='./img/icons/delete.png' alt='delete' onclick='deleteRow()' class='table-remove'></td>
      </tr>`;
    }
    i -= 1;
  }
  houseOrOrganizationOrElse();
}
