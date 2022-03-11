// Criando um elemento
let umNovoParagrafo = document.createElement("p");
// Criando um novo texto
let textoNovo = document.createTextNode("Algum exemplo");
// Add um texto ao novo elemento
umNovoParagrafo.appendChild(textoNovo);

// Selecionando elementos aninhados
let paragrafoDeDentroDaDiv = document.querySelector("div div p");
// Selecionando elemento pai por ID com querySelector
let elementoPai = document.querySelector("#segundaDiv");
//Inserir parágrafo antes da div
elementoPai.insertBefore(umNovoParagrafo, paragrafoDeDentroDaDiv);

// Criar um novo item na lista
let umNovoItemDelista = document.createElement("li");
// Criar o texto
let textoDali = document.createTextNode("Feijão");
// Add o texto no Item da lista
umNovoItemDelista.appendChild(textoDali);
// Add o item da lista e seu texto na lista ordenada (ol)
document.getElementById("minha-lista").appendChild(umNovoItemDelista);


let novoItemlista = document.createElement("li");
let outroTexto = document.createTextNode( "Arroz");


novoItemlista.appendChild(outroTexto);

let listItemBanana = document.getElementById( "banana");
let pai = listItemBanana.parentNode;

pai.appendChild(novoItemlista)

// substituindo um elemento pelo outro utilizando replace
let elementoP = document.getElementById('paragrafo');
let paiDoElementoP = elementoP.parentNode;

let umSpan = document.createElement("span");
let textoNovoDoSpan = document.createTextNode("Nosso SPAN");
umSpan.appendChild(textoNovoDoSpan);

paiDoElementoP.replaceChild(umSpan, elementoP);
