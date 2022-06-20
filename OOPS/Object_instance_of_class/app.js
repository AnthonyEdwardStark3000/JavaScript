class Product{
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}  //class with fields in it.

class ProductList { 
    products = [ 
        new Product('pillow', 'https://m.media-amazon.com/images/I/712r720VYHL._SL1280_.jpg',12.78, 'Used for sleeping'), // creating object
        new Product('check', 'https://tellygupshup.com/wp-content/uploads/2022/02/Robert-Downey-Jr..jpg',12.78, 'Used for sleeping'), // creating object
        new Product('dummy product', 'https://d23.com/app/uploads/2019/08/2019-disneylegend-rdj-780x440.jpg',12.78, 'Used for sleeping'), // creating object
    ];

    constructor(){}

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list'; //for css
        for(let product of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item'; //for css
            prodEl.innerHTML=`
            <div>
            <img src="${product.imageUrl}" alt="${product.title}">
            <div class="product-item__content">
            <h2>${product.title}</h2>
            <h2>\$${product.price}</h2>
            <p>${product.description}</p>
            <button>Add to cart</button>
            </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

// const productList = {
//     products: [

//         // {
//         //     title: 'pillow',
//         //     imageUrl: 'https://m.media-amazon.com/images/I/712r720VYHL._SL1280_.jpg',
//         //     price: 12.5,
//         //     description: 'Used for sleeping'
//         // },
//         // {
//         //     title: 'check',
//         //     imageUrl: 'https://tellygupshup.com/wp-content/uploads/2022/02/Robert-Downey-Jr..jpg',
//         //     price: 16.5,
//         //     description: 'Used for checking'
//         // },
//         // {
//         //     title: 'dummy product',
//         //     imageUrl: 'https://d23.com/app/uploads/2019/08/2019-disneylegend-rdj-780x440.jpg',
//         //     price: 2.5,
//         //     description: 'dummy'
//         // },
//     ],
//     render(){
//         // const renderHook = document.getElementById('app');
//         // const prodList = document.createElement('ul');
//         // prodList.className = 'product-list'; //for css
//         // for(product of this.products){
//         //     const prodEl = document.createElement('li');
//         //     prodEl.className = 'product-item'; //for css
//         //     prodEl.innerHTML=`
//         //     <div>
//         //     <img src="${product.imageUrl}" alt="${product.title}">
//         //     <div class="product-item__content">
//         //     <h2>${product.title}</h2>
//         //     <h2>\$${product.price}</h2>
//         //     <p>${product.description}</p>
//         //     <button>Add to cart</button>
//         //     </div>
//         //     </div>
//         //     `;
//         //     prodList.append(prodEl);
//         // }
//         // renderHook.append(prodList);
//     }
// };
// productList.render();

class ProductItem{
    constructor(product){
        this.product = product;
    }

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list'; //for css
        for(let product of this.products){
            const prodItem = new ProductItem(product);
            const prodEl = document.createElement('li');
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList;
productList.render();


