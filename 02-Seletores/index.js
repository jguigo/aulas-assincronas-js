// //pega os elementos por ID
// console.log(document.getElementById('primeiroh1'));

// //pega os elementos por TAG
// console.log(document.getElementsByTagName('h2'));

// //paga os elementos por CLASS
// console.log(document.getElementsByClassName('class-primeiroh1'));

// //pega os elementos por Query selector
// console.log(document.querySelector('#segundoh1').innerHTML);
// let teste = document.querySelector('');
// console.log(teste);

// //pega os elementos encadeados
// console.log(document.querySelector('ol li'));
// console.log(document.querySelector('div div p').innerHTML);

//criando elementos
// let umNovoElemento = document.createElement('div');
// let textNovo = document.createTextNode("Algum exemplo");

// umNovoElemento.appendChild(textNovo);
// let paragrafoDeDentroDaDiv = document.querySelector('div div p');
// let elementoPai = document.querySelector('div div');

// elementoPai.insertBefore(umNovoElemento, paragrafoDeDentroDaDiv);


// let novoLi = document.createElement('li');
// let textoLista = document.createTextNode('laranja')
// novoLi.appendChild(textoLista);

// // let elementoOl = document.querySelector('ol');
// // elementoOl.appendChild(novoLi)

// let listaOrdenada = document.getElementsByTagName('ol')[0];
// listaOrdenada.appendChild(novoLi);

// let liBanana = document.getElementById('banana');
// let pai = banana.parentNode;

// let liBanana = document.getElementById('banana');
// console.log(liBanana);

// let pai = liBanana.parentElement;
// console.log(pai);

// let liNovo = document.createElement('li')
// let texto = document.createTextNode('laranja')
// liNovo.appendChild(texto)
// pai.appendChild(liNovo);

// pai.insertBefore(liNovo, liBanana)