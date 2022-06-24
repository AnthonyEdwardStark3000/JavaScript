class Product {
    title = 'Object Oriented Programming';
    imageUrl;
    description; 
    price;

    constructor(title,image, price,description){
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = description;
    };
}

class ProductItem {
    constructor(product){
        this.product = product;
    }

    render(){
        const prodEl = document.createElement('li');
          prodEl.className = 'product-item';
          prodEl.innerHTML = `
            <div>
              <img src="${this.product.imageUrl}" alt="${this.product.title}" >
              <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          `;
          return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A pillow','https://m.media-amazon.com/images/I/712r720VYHL._SL1280_.jpg',300,'check the rendering in UI'
        ),
        new Product(
            'RDJ','https://tellygupshup.com/wp-content/uploads/2022/02/Robert-Downey-Jr..jpg',500,'check the rendering in UI'
        ),
        new Product(
            'Robert','https://d23.com/app/uploads/2019/08/2019-disneylegend-rdj-780x440.jpg',500,'check the rendering in UI'
        ),
    ];
    constructor(){};
    
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        console.log(this.products);
        for (const prod of this.products) {
           const productItem = new productItem(prod);
           const productElement = productItem.render(); 
          prodList.append(productElement);
        }
        renderHook.append(prodList);
      }
}
    const productList = new ProductList();
    productList.render();
    