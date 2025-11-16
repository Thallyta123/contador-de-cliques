const produtos = [
 { nome: "Tênis Nike Air", preco: 299.90, categoria: "calçados", imagem:
"https://picsum.photos/220?1" },
 { nome: "Camiseta Básica Branca", preco: 59.90, categoria: "camisetas", imagem:
"https://picsum.photos/220?2" },
 { nome: "Camiseta Preta Slim", preco: 79.90, categoria: "camisetas", imagem:
"https://picsum.photos/220?3" },
 { nome: "Chinelo Havaianas", preco: 39.90, categoria: "calçados", imagem:
"https://picsum.photos/220?4" },
 { nome: "Tênis Adidas Run", preco: 349.90, categoria: "calçados", imagem:
"https://picsum.photos/220?5" },
 { nome: "Camiseta Esportiva Dry", preco: 89.90, categoria: "camisetas", imagem:
"https://picsum.photos/220?6" },
];
const container = document.getElementById("produtos-container");
const botoesFiltro = document.querySelectorAll(".btn-filtro");
const inputBusca = document.getElementById("busca");
function exibirProdutos(lista) {
 container.innerHTML = "";
 lista.forEach(produto => {
 const card = document.createElement("div");
 card.classList.add("card");
 card.innerHTML = `
 <img src="${produto.imagem}" alt="${produto.nome}">
 <h3>${produto.nome}</h3>
 <p>R$ ${produto.preco.toFixed(2)}</p>
 `;
 container.appendChild(card);
 });
}
exibirProdutos(produtos);
// Filtro por categoria
botoesFiltro.forEach(btn => {
 btn.addEventListener("click", () => {
 const categoria = btn.dataset.categoria;
 if (categoria === "todos") {
 exibirProdutos(produtos);
 } else {
 const filtrados = produtos.filter(p => p.categoria === categoria);
 exibirProdutos(filtrados);
 }
 });
});
// Filtro por busca
inputBusca.addEventListener("input", e => {
 const termo = e.target.value.toLowerCase();
 const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
 exibirProdutos(filtrados);
});