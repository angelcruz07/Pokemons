// const url = 'https://jsonplaceholder.typicode.com/users'


// fetch(url, {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json'
//   }

// })

// .then((response) => response.json())
// .then(data => console.log(data));


const url = 'https://jsonplaceholder.typicode.com/users';

const fn = async() => {
 const response = await fetch(url, {
  method: 'POST',
  headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
  },
  body: JSON.stringify({
    data: "Chancito feliz", 
    website:"Chanchos.com"
  })
})
const data = await response.json()
console.log(data);
}
fn()