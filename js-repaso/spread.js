// a b y c parametros

const fn = (a ,b , c) =>  console.log(a , b , c);

// 1 2 4 argumentos
const arr = [1,2,4];

// fn(arr[0], arr[1], arr[2]);
fn(...arr);

const arr1 = [5,6];

// const arr2 =  arr.concat(arr1);
const arr2 = [...arr, ...arr1]

console.log(arr2);

const object = { a: 1, b: 2};

const object2 = { a:5 ,  c: 'Chanchito feliz'};

const object3 = {...object, ...object2}
console.log(object3);