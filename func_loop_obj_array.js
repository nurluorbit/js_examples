function ArrayPlus (inputArray){
  return (Number(inputArray.join(''))+1).toString().split('').map(Number)
}

let Arraycim = ArrayPlus([1,0,3]);
console.log(Arraycim)

function nameobjectier(array=[]) {
  output = {}

  for (i in array) {
      if(!array[i].name) {
          console.log(`There isn't any key called name in ${Number(i)+1} element.`)
          continue
      }

      let data = Object.entries(array[i]).filter(a => !a.includes('name'))

      output[array[i].name] = Object.fromEntries(data)
  }

  return output;
}

let info = [{
  "name": "Jason",
  "gender": "M",
  "age": 27
},
{
  "name": "Rosita",
  "gender": "F",
  "age": 23
},
{
  "name": "Leo",
  "gender": "M",
  "age": 19
}];

console.log(nameobjectier(info))
