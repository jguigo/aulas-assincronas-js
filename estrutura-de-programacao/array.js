let meuArray = ['guilherme', 'larissa', 'google', 'amazon', 'twitter'];

console.log(meuArray.join(', '));

console.log(meuArray.includes('larissa'));

let arrayDeNumeros = [];

arrayDeNumeros.push(1);
arrayDeNumeros.push(2);
arrayDeNumeros.push(3);

console.log(arrayDeNumeros);

arrayDeNumeros = [...arrayDeNumeros, 4,5,6];
console.log(arrayDeNumeros);

let soma = 0;
for (let i = 0; i < arrayDeNumeros.length; i++) {
    soma += arrayDeNumeros[i];
    console.log(soma);
}
let soma2 = 0;
arrayDeNumeros.map(item => {
    soma2+=item;
    console.log(soma2);
})


//REVER ESSA PARTE DE REDUCER MANIPULANDO ARRAYS II
//REVER ESSA PARTE DE REDUCER MANIPULANDO ARRAYS II
//REVER ESSA PARTE DE REDUCER MANIPULANDO ARRAYS II
//REVER ESSA PARTE DE REDUCER MANIPULANDO ARRAYS II
const reducer = (previ, current) => previ + current;
const resultado = arrayDeNumeros.reduce(reducer);
console.log(resultado);


//REVERSE
console.log(meuArray.reverse());


//forEach
meuArray.forEach(nomes =>{
    console.log(nomes);
})
