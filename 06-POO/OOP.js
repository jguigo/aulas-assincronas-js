function Animal(patas){
   this.patas = patas
}

//criando metodo da classe Animal
Animal.prototype.respirar = function respirar() {
   console.log("esse animal esta respirando");
}

//trabalhando com heranças
function Cachorro(patas){
   //call para pegar a herança de Animal, neste caso Animal é a Classe pai!
   Animal.call(this, patas);
}

// Cachorro herda de animal
// mas porque eu preciso fazer isso aqui????????? -> fica para estudos.
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro; //essa linha faz o que? eu estaria definindo o que é o constructor?!
Cachorro.prototype.latir = function(){
   console.log('Cachorro está latindo');
}
//aqui eu estou instanciando uma classe!
let cachorro = new Cachorro(4);
cachorro.respirar();
cachorro.latir();


//A partir do ES6
//A partir do ES6
//A partir do ES6

//utilizamos a palavra reservada class
class Animal2{
   //aqui dizemos quem é o constructor
   constructor(patas){
      this.patas = patas
   }

   //aqui dizemos quem são os prototype
   respirar() {
      console.log("esse animal esta respirando");
   }

}

//para herdar animal
class Cachorro2 extends Animal2 { //com o extends a gente diz por JS que Cachorro esta herdando de animal!
   constructor(patas){
      super(patas)//O super, a gente informa quais os atributos ele esta herdando!
   }
   
   respirar(){//sobrescrevendo funções!! 
      super.respirar(); //hendou do pai
      console.log("respitando da forma correta");//acrescentou mais coisas
   }

   latir(){
      console.log("O cachorro está latindo")
   }
}

let cachorro1 = new Cachorro2(4);
cachorro1.latir();
cachorro1.respirar();