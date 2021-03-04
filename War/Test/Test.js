/*
const pokemon = [ 
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
 ];


 pokemon.map((el, index) => {
     let capFirstLetter = el.name.charAt(0).toUpperCase();
     let restOfName = el.name.slice(1);
     let modifiedName = `${capFirstLetter}${restOfName}`
     console.log(modifiedName);
     //console.log(el.name);
 })

const name = 'flavio'
const nameCapitalized = `${name.charAt(0).toUpperCase()}${name.slice(1)}`
console.log(nameCapitalized);
*/

function getStrings(city) {
    city = city.toLowerCase();
    let obj = {};
    let str = '';

    for (let elem of city) {
        if (!(elem in obj)) {
            obj[elem] = '*';
        } else {
            obj[elem] += '*';
        }
    }

    for (let key in obj) {
        if (key !== ' ') {
            str += key + ':' + obj[key] + ',';
        }
    }
    return str.slice(0, str.length - 1);
}

console.log(getStrings('Chicago'));





const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(object[property]);
}

const arr = (num) => {
 const newArray = [];
  while (num > 0) {
    newArray.push(num - 1);
    num --;
  }
     return newArray.reverse();
  }
  console.log(arr(4));

  const formatMoney = (amount) => {
    return `$${amount.toFixed(2).trim()}`
  };
  console.log(formatMoney(3));
  console.log(formatMoney(3.1));

  // 8kyu - Square(n)Sum
  let squareSum = (num) => {
      let total = 0;
    num.map((el, index) => {
        total += Math.pow(el,2) 
    })
    return total;
  }
  console.log(squareSum([1,2,2]));


  // 8kyu - Even or Odd
  const even_or_odd = (num) => {
      return (num % 2 !== 0) ? 'Odd' : 'Even';
  }
    console.log(even_or_odd(10));
  
  // 7kyu - Unique String Characters
  const solve = (a, b) => {
      let newString = '';
    for (let i = 0; i < a.length; i++){
        if (!b.includes(a[i])) {
            newString += a[i];
        }
    }
    for (let j = 0; j < b.length; j++){
        if (!a.includes(b[j])) {
            newString += b[j];
        }
    }
        return newString;
}
  console.log(solve('xyabb', 'xzca'));