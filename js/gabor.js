var i = 0
while (i < gameOfThronesCharacters.length) {
  if (gameOfThronesCharacters.hasOwnProperty(i)) {
    document.querySelector('.table__body').innerHTML +=
    `<tr>
    <td>${gameOfThronesCharacters[i].name}</td>
    <td><img class='proba' src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"></td>
    <td>${gameOfThronesCharacters[i].organization}</td>
    <td contenteditable="false">${gameOfThronesCharacters[i].bio}</td>
    <td><img src="./img/icons/edit.png" alt="edit" onclick="editRow()" class="table-edit${[i]}"></td>
    <td><img src="./img/icons/delete.png" alt="delete" onclick="deleteRow()" class="table-remove"></td>
    </tr>`;
  }
  i++;
}

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
  var charactersByName = gameOfThronesCharacters.sort(compareByName);
  var i = 0;
  document.querySelector('.table__body').innerHTML = "";
  while (i < charactersByName.length) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      document.querySelector('.table__body').innerHTML +=
        `<tr>
        <td>${gameOfThronesCharacters[i].name}</td>
        <td><img class='proba' src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"></td>
        <td>${gameOfThronesCharacters[i].organization}</td>
        <td>${gameOfThronesCharacters[i].bio}</td>
        <td><img src="./img/icons/edit.png" alt="edit" class="table-edit"></td>
        <td><img src="./img/icons/delete.png" alt="delete" onclick="deleteRow()" class="table-remove"></td>
        </tr>`;
    }
    i++;
  }
}

function descByName() {
  var charactersByName = gameOfThronesCharacters.sort(compareByName);
  var i = charactersByName.length - 1;
  document.querySelector('.table__body').innerHTML = "";
  while (i >= 0) {
    if (gameOfThronesCharacters.hasOwnProperty(i)) {
      document.querySelector('.table__body').innerHTML +=
        `<tr>
        <td>${gameOfThronesCharacters[i].name}</td>
        <td><img class='proba' src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"></td>
        <td>${gameOfThronesCharacters[i].organization}</td>
        <td>${gameOfThronesCharacters[i].bio}</td>
        <td><img src="./img/icons/edit.png" alt="edit" class="table-edit"></td>
        <td><img src="./img/icons/delete.png" alt="delete" onclick="deleteRow()" class="table-remove"></td>
        </tr>`;
    }
    i -= 1;
  }
}