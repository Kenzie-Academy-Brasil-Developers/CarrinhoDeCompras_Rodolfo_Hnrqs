const productsCart = [
    {
        id: 1,
        name: "Item 1",
        price: 10.00
    },
    {
        id: 2,
        name: "Item 2",
        price: 12.00
    },
    {
        id: 3,
        name: "Item 3",
        price: 15.00
    },
    {
        id: 4,
        name: "Item 4",
        price: 20.00
    },
    {
        id: 5,
        name: "Item 5",
        price: 13.00
    }
]
const body = document.querySelector("body");

let main = document.createElement("main");
body.appendChild(main);

let title = document.createElement("h1");
main.appendChild(title);
title.innerText = "Carrinho de Compras";

let sectionLista = document.createElement("section");
main.appendChild(sectionLista);

let lista = document.createElement("ul");
sectionLista.appendChild(lista);

let soma = 0;

for (let i = 0; i <= productsCart.length-1; i++){
    let item = document.createElement("li");
    let nome = document.createElement("p");
    nome.innerText = `${productsCart[i].name}: `;
    item.appendChild(nome);
    let price = document.createElement("span");
    price.innerText = `R$${productsCart[i].price},00`
    item.appendChild(price);
    lista.appendChild(item);
    soma += productsCart[i].price;
}

let sectionFinalizar = document.createElement("section");
main.appendChild(sectionFinalizar);

let div1 = document.createElement("div");
sectionFinalizar.appendChild(div1);

let valorSoma = document.createElement("p");
div1.appendChild(valorSoma);
valorSoma.innerText = `Valor Total dos Produtos:`
valorSoma.setAttribute("class", "somaValor");

let valorProdutos = document.createElement("span");
div1.appendChild(valorProdutos);
valorProdutos.innerText = `R$${soma},00`;
valorProdutos.setAttribute("class", "somaTotal");

let button = document.createElement("button");
sectionFinalizar.appendChild(button);
button.setAttribute("class", "botao");
button.setAttribute("value", "Finalizar Compras");
button.setAttribute("type", "submit");
button.innerText = "Finalizar Compras";