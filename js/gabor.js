function houseOrOrganizationOrElse() {
  var i = 0
  while (i < gameOfThronesCharacters.length) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      if (gameOfThronesCharacters[i].organization) {
      document.querySelector(`#house${[i]}`).innerHTML +=
        `${gameOfThronesCharacters[i].organization}`;
      } else if (gameOfThronesCharacter[i].house) {
      document.querySelector(`#house${[i]}`).innerHTML +=
        `${gameOfThronesCharacters[i].house}`;
      } else if (gameOfThronesCharacters[i].alias) {
      document.querySelector(`#house${[i]}`).innerHTML +=
        `${gameOfThronesCharacters[i].alias}`;
      }
    }
    i++;
  }
}

function initialListing() {
  var i = 0
  while (i < gameOfThronesCharacters.length) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      document.querySelector('.table__body').innerHTML +=
        `<tr>
      <td>${gameOfThronesCharacters[i].name}</td>
      <td><img src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"></td>
      <td id="house${[i]}"></td>
      <td>${gameOfThronesCharacters[i].bio}</td>
      <td><img src="./img/icons/edit.png" alt="edit" class="table-edit"></td>
      <td><img src="./img/icons/delete.png" alt="delete" onclick="deleteRow()" class="table-remove"></td>
      </tr>`;
    }
    i++;
  }
  houseOrOrganizationOrElse()
}


initialListing()

function deleteRow() {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}

function editRow() {

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

function ascByName() {
  gameOfThronesCharacters.sort(compareByName);
  document.querySelector('.table__body').innerHTML = "";
  initialListing();
}

function descByName() {
  gameOfThronesCharacters.sort(compareByName);
  var i = gameOfThronesCharacters.length - 1;
  document.querySelector('.table__body').innerHTML = "";
  while (i >= 0) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      document.querySelector('.table__body').innerHTML +=
        `<tr>
        <td>${gameOfThronesCharacters[i].name}</td>
        <td><img src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"></td>
        <td>${gameOfThronesCharacters[i].organization}</td>
        <td>${gameOfThronesCharacters[i].bio}</td>
        <td><img src="./img/icons/edit.png" alt="edit" class="table-edit"></td>
        <td><img src="./img/icons/delete.png" alt="delete" onclick="deleteRow()" class="table-remove"></td>
        </tr>`;
    }
    i -= 1;
  }
}

function ascByHouse() {
  gameOfThronesCharacters.sort(compareByHouse);
  document.querySelector('.table__body').innerHTML = "";
  initialListing();
}

function descByHouse() {
  gameOfThronesCharacters.sort(compareByHouse);
  var i = gameOfThronesCharacters.length - 1;
  document.querySelector('.table__body').innerHTML = "";
  while (i >= 0) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      document.querySelector('.table__body').innerHTML +=
        `<tr>
        <td>${gameOfThronesCharacters[i].name}</td>
        <td><img src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"></td>
        <td>${gameOfThronesCharacters[i].organization}</td>
        <td>${gameOfThronesCharacters[i].bio}</td>
        <td><img src="./img/icons/edit.png" alt="edit" class="table-edit"></td>
        <td><img src="./img/icons/delete.png" alt="delete" onclick="deleteRow()" class="table-remove"></td>
        </tr>`;
    }
    i -= 1;
  }
}