let id = 0;

const products = [];
function add() {
  id++;
  let inputProduto = document.getElementById("inputProduto").value;
  let inputMarca = document.getElementById("inputMarca").value;
  let inputEstoque = document.getElementById("inputEstoque").value;
  //   let inputCusto = document.getElementById("inputCusto").value;
  //   let inputVenda = document.getElementById("inputVenda").value;

  const dataProduct = {
    id,
    produto: inputProduto,
    marca: inputMarca,
    estoque: inputEstoque,
  };

  products.push(dataProduct);

  console.log(products);
}
