// rest operator distinto contexto 

const rest = (a,b, ...argumentos)=>{

// parametro rest debe sel el ultimo parametro definido

  console.log(a, b);
  console.log(argumentos);
}

rest(1, 2 ,3, 4, 5, 6);



// metodo map
const arr = [1,2,3,4,5,6]

const mapped = arr.map((el) => el * 2)
console.log(mapped)


//metodo reduce 

const r1 = arr.reduce((acc ,el ) => acc + el, 0 )
console.log(r1);  