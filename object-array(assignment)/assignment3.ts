let inventory =[]; //array to store product information
type product={
    inventory?:[];
    name:string;
    model:number;
    cost:number;
    quantity:number;
};
const product1:product={
    name:'Clothes',
    model:1900,
    cost:4999,
    quantity:100,
};
const product2:product={
    name:'Socks',
    model:2000,
    cost:1500,
    quantity:500,
};
const product3:product={
    name:'Muffler',
    model:2001,
    cost:3000,
    quantity:200,
};
inventory.push(product1,product2,product3);//add to array
console.log(inventory);//list of all items
