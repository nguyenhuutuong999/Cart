var initialState = [
    {
        id: 1,
        name: "IP 7 Plus",
        image : "https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600.jpg",
        description: "Product of Apple",
        price: 1000,
        inventory: 10,
        rating : 3,
    },
    {
        id: 2,
        name: "IP 8 Plus",
        image: "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600.jpg",
        description: "Product of Apple",
        price: 1200,
        inventory: 10,
        rating : 4,
    },
    {
        id: 3,
        name: "IP X",
        image: "https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-h2-400x460.png",
        description: "Product of Apple",
        price: 1500,
        inventory: 10,
        rating: 5,
    },
    {
        id: 3,
        name: "IP X",
        image: "https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-h2-400x460.png",
        description: "Product of Apple",
        price: 1500,
        inventory: 10,
        rating: 5,
    },

]
const product = (state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}
export default product;