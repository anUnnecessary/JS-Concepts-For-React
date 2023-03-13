const products = [
    {name: 'laptop', price: 35000, brand: 'lenovo thinkpad', color: 'silver'},
    {name: 'phone', price: 27000, brand: 'lenovo thinkpad', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 350, brand: 'rayban', color: 'black'},
    {name: 'camera', price: 98000, brand: 'canon', color: 'pink'},
]
const brands = products.map(product => product.brand)
// console.log(brands)
const prices = products.map(product => product.price)
// console.log(prices)

products.forEach(product => console.log(product));

products.forEach(product => {

})

// 3. filter
 const cheap = products.filter(product => product.price <= 5000);
//  console.log(cheap)

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);


//4. find
const special = products.find(product => product.name.includes('n'));
console.log(special);