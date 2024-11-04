let map_arr=[1,2,3,4,5]
let res=map_arr.map((Element,ind,arr)=>{
    return Element*Element
})
console.log(res)

const names=["alice","bob","charlie"]
const res_map=names.map((ele,ind,arr)=>{
    return ele.toUpperCase();
})
console.log(res_map)

const products=[
    {name:"Laptop",price:1000},
    {name:"phone",price:500},
    {name:"tablet",price:700}
];

const fil_price=products.filter(product=>product.price>500).map(product=>product.price);
console.log(fil_price)

const purchase=[
    {price:10,quantity:2},
    {price:5,quantity:4},
    {price:8,quantity:1}
];

const tot=purchase.reduce((pr,it)=>{
    return pr + (it.price * it.quantity)
},0)
console.log(tot)