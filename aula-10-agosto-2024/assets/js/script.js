/**
 * Itens das colunas
 */
const colName = [
  "product_id",
  "product_name",
  "product_brand",
  "product_stock",
  "product_price_cost",
  "product_price",
];

/**
 * Pega a table de produtos
 *
 * var {HTMLElement} productsListTable
 */
const productsListTable = document.getElementById("products-list");

/**
 * Cria um elemento tbody
 *
 * var {HTMLTableRowElement} tableBody
 */
const tableBody = document.createElement("tbody");

/**
 * Cria um elemento tr
 *
 * var {HTMLTableRowElement} tableRow
 */
const tableRow = document.createElement("tr");

let id = 1;

/**
 * Adiciona produto
 */
function addProduct() {
  const formAddProduct = document.getElementById("formAddProduct");
  const formData = new FormData(formAddProduct);
  formData.set("product_id", id);

  const productData = Object.fromEntries(formData);
  const productDataKey = Object.keys(productData);

  const row = document.createElement("tr");

  for (let i = 0; i < colName.length; i++) {
    const td = document.createElement("td");
    td.innerText = productData[colName[i]];
    row.appendChild(td);

    console.log(productData[colName[i]]);
  }

  tableBody.appendChild(row);

  id++;
}

productsListTable.appendChild(tableBody);
