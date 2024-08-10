// Pega o elemento html de acordo com o id passado como parametro
const productsListTable = document.getElementById("products-list");

// Cria uma elemento de acordo com o parametro passado na função
const tableBody = document.createElement("tbody");
const tableRow = document.createElement("tr");

const tableCellId = document.createElement("td");
tableCellId.innerText = 1;
tableRow.appendChild(tableCellId);

const tableCellProduct = document.createElement("td");
tableCellProduct.innerText = "Tênis Jordan Air";
tableRow.appendChild(tableCellProduct);

const tableCellBrand = document.createElement("td");
tableCellBrand.innerText = "Nike";
tableRow.appendChild(tableCellBrand);

const tableCellStock = document.createElement("td");
tableCellStock.innerText = 380;
tableRow.appendChild(tableCellStock);

const tableCellPriceCost = document.createElement("td");
tableCellPriceCost.innerText = 340.89;
tableRow.appendChild(tableCellPriceCost);

const tableCellPrice = document.createElement("td");
tableCellPrice.innerText = 1.999;
tableRow.appendChild(tableCellPrice);

const tableCellAction = document.createElement("td");

const tableEditButton = document.createElement("button");
tableEditButton.innerText = "Editar";
tableEditButton.className = "btn btn-primary";

tableCellAction.append(tableEditButton);

tableRow.appendChild(tableCellAction);

tableBody.appendChild(tableRow);
productsListTable.appendChild(tableBody);
