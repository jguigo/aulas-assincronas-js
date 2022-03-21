let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
const teste2 = () => {
console.log('ORRRRRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
console.log('Criar uma função')
}
btn1.addEventListener('click', teste2)

btn2.addEventListener('click',()=>{
    btn1.removeEventListener('click', teste2)
})

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', event=>{
    console.log(event);
})

//evitando propagação
function msg(event){
    event.stopPropagation();  //impede a propagação
    console.log('cliquei no button');
}
let p = document.querySelector('#paragrafo-da-propagacao');
let btn4 = document.createElement('button');
btn4.innerText = 'botão da propagação'
btn4.addEventListener('click', msg)
p.appendChild(btn4);

p.addEventListener('click',()=>{
    console.log('clicaram no paragrafo')
})

//evitando que um comportamento padrão aconteça.
let link = document.querySelector('a');
link.addEventListener('click', (event)=>{
    event.preventDefault(); //só vai funcionar se acontecer dentro da função que ele quer executar 
    console.log('não vai fazer alguma coisa');
})