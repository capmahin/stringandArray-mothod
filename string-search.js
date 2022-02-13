const products = [
  "Dell hardcore i29 200GB laptop",
  "iPhone 1tb camera flashlight phone",
  "yellow laptop with black camera",
  "pink color laptop",
];

const searching = "laptop";
//IndexOf
const output = [];
for (const product of products) {
  if (product.toLocaleLowerCase().indexOf(searching) != -1) {
    // output.push(product);
  }
}
// console.log(output);

//includes
for (const product of products) {
  if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
    // output.push(product);
  }
}
// console.log(output);

//startWith
for (const product of products) {
  if (product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())) {
    output.push(product);
  }
}
console.log(output);
