let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
const mousedown = (e) => {
    e.stopPropagation();
    console.log('clicou')
}
const mouseup = (e) => {
    e.stopPropagation();
    console.log('soltou')
}
// btn1.addEventListener('mousedown', mousedown)
// btn1.addEventListener('mouseup', mouseup)
btn1.addEventListener('dblclick', () => console.log('double click'))

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

// p.addEventListener('click',()=>{
//     console.log('clicaram no paragrafo')
// })

//evitando que um comportamento padrão aconteça.
let link = document.querySelector('a');
link.addEventListener('click', (event)=>{
    event.preventDefault(); //só vai funcionar se acontecer dentro da função que ele quer executar 
    console.log('não vai fazer alguma coisa');
})

//evento na tela inteira
// window.addEventListener('mousedown', ()=>{
//     console.log('clicou com o botão do mouse');
// })
// window.addEventListener('mouseup', ()=>{
//     console.log('soltou o botão do mouse');
// })

window.addEventListener('keydown', (e)=>{
    if(e.key==='Enter'){
        console.log('Pressionou o enter');
    }
    else if(e.key==='q'){
        console.log('Pressionou o q');
    }
})

window.addEventListener('keyup', (e)=>{
    if(e.key==='Enter'){
        console.log('Soltou o enter');
    }
    else if(e.key==='q'){
        console.log('Soltou o q');
    }
})

//movimentação do mouse passando a localização exata!
// window.addEventListener('mousemove', (e)=>{
//     console.log('Horizontal: ', e.x);
//     console.log('Vertical: ', e.y);
// })

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 1000) console.log('Scroll vertical ',window.screenY);
})
window.addEventListener('scroll', ()=>{
    if(window.scrollX > 1000) console.log('Scroll Horizontal ',window.screenX);
})

let input = document.querySelector('input');
input.addEventListener('focus', ()=>{
    console.log('fui focado');
})
input.addEventListener('blur', ()=>{
    console.log('fui desfocado');
})

//evento de quando a página carrega.
window.addEventListener('load', ()=>{
    alert('a página foi carregada')
})

//pergunta se tem certeza que quer sair, ou atualiza a página, como por exemplo se tiver algum campo que foi preenchido e não solvou!
window.addEventListener('beforeunload', (e)=>{
    e.returnValue = null;
    // alert('a página foi carregada')
})