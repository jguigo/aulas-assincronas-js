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