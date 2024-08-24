let id = localStorage.getItem("id") || 1;

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
const products = JSON.parse(localStorage.getItem("products")) || [];

function listProducts() {
  for (let x = 0; x <= products.length - 1; x++) {
    const produto = products[x];
    const row = document.createElement("tr");

    for (let i = 0; i < colName.length; i++) {
      const td = document.createElement("td");
      td.innerText = produto[colName[i]];
      row.appendChild(td);
    }

    const tdActions = document.createElement("td");
    tdActions.className = "d-flex justify-content-end gap-3";

    const seeButton = document.createElement("button");
    seeButton.className = "btn btn-info";
    seeButton.innerText = "Ver";

    const editButton = document.createElement("button");
    editButton.className = "btn btn-primary";
    editButton.innerText = "Editar";

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.innerText = "Deletar";

    deleteButton.setAttribute("data-bs-toggle", "modal");
    deleteButton.setAttribute("data-bs-target", "#modalDeletar");
    deleteButton.onclick = () => confirmarDeletarProduto(x);

    tdActions.appendChild(seeButton);
    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    row.appendChild(tdActions);

    tableBody.appendChild(row);
  }
}

function verProduto() {}

function editarProduto() {}

let indexBeingDeleted;

function confirmarDeletarProduto(index) {
  indexBeingDeleted = index;

  document.getElementById(
    "deleteContent"
  ).innerText = `${products[index].product_id} ${products[index].product_name} ${products[index].product_brand} ${products[index].product_stock} `;
}

function deletarProduto() {
  /** Limpa do body */
  tableBody.innerHTML = "";

  products.splice(indexBeingDeleted, 1);
  localStorage.setItem("products", JSON.stringify(products));
  listProducts();
}

/**
 * Adiciona produto
 */
function addProduct() {
  /** Limpa do body */
  tableBody.innerHTML = "";

  /** Pega o formulário e seta como FormData */
  const formAddProduct = document.getElementById("formAddProduct");
  const formData = new FormData(formAddProduct);
  formData.set("product_id", id);

  /** Extrai o objeto do formulário - Chave: Valor */
  const productData = Object.fromEntries(formData);

  /** Adiciona ao array de produtos */
  products.push(productData);
  localStorage.setItem("products", JSON.stringify(products));

  listProducts();
  id++;
  localStorage.setItem("id", id);
}

productsListTable.appendChild(tableBody);

listProducts();
