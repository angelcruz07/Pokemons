
//Funciones
function fn (){
  this.prop = "propiedad"
  //  return 'chanchito feliz'
}

fn.prototype.lala = function functionDePrototipo(){

}

const r = new fn()

console.log(r.__proto__);

// fat arrow funtion

const fatFn = () =>{
  return 'chancito feliz'
}

const r1 = fatFn()

console.log(r1);