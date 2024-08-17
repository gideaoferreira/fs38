let id = 1;

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
 * Array com todos os produtos da loja para fazer um loop e exibir na tabela
 *
 * @var {Array} products
 */
const products = [];

function listProducts() {
  let products = JSON.parse(localStorage.getItem("products"));

  for (let x = 0; x <= products.length - 1; x++) {
    const produto = products[x];
    const row = document.createElement("tr");

    for (let i = 0; i < colName.length; i++) {
      const td = document.createElement("td");
      td.innerText = produto[colName[i]];
      row.appendChild(td);
    }
    tableBody.appendChild(row);
  }
  id++;
}

/**
 * Adiciona produto
 */
function addProduct() {
  /** Limpa do body */
  tableBody.innerHTML = "";
  let products = JSON.parse(localStorage.getItem("products"));

  /** Pega o formulário e seta como FormData */
  const formAddProduct = document.getElementById("formAddProduct");
  const formData = new FormData(formAddProduct);
  formData.set("product_id", id);

  /** Extrai o objeto do formulário - Chave: Valor */
  const productData = Object.fromEntries(formData);

  /** Adiciona ao array de produtos */
  products.push(productData);
  localStorage.setItem("products", JSON.stringify(products));

  for (let x = 0; x <= products.length - 1; x++) {
    const produto = products[x];
    const row = document.createElement("tr");

    for (let i = 0; i < colName.length; i++) {
      const td = document.createElement("td");
      td.innerText = produto[colName[i]];
      row.appendChild(td);
    }
    tableBody.appendChild(row);
  }
  id++;
}

productsListTable.appendChild(tableBody);

listProducts();
