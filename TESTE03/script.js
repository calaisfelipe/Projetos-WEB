const divResult = document.querySelector('#resultado')


const url = 'https://pokeapi.co/api/v2/'
const pokemon = 'pikachu'

//Requisição
fetch(`${url}pokemon/${pokemon}`, {
    method:'GET',
    headers:{  'Content-Type':'application/json'
    }
})
.then((response) => response.json()) //Converte de json para objeto javascript
.then((data) => {

    //tratamento dos dados
  let results = data     
  const obj = Object.entries(results)
  const obj2 = Object.keys(results)
  const obj3 = Object.values(results)
  console.log(obj)
  console.log(obj2)
  console.log(obj3)

  divResult.innerHTML += results.name


})
.catch((err) => console.log(err)) //tratamento dos erros possiveis. no caso se der erro eu só pedi pra imprimir no console.







