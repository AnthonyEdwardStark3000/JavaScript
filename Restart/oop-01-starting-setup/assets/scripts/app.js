class Product {
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
}

class ShoppingCart {
    
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart(){
        console.log('add to cart');
        console.log(this.product);
    }


    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to cart</button>
          </div>
        </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click',this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product('Pillow','http://google.com','Pillow is a pillow',12),
        new Product('Carpet','http://google.com','Carpet is a Carpet',19),
    ] 
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
        const prodItem = new ProductItem(prod);  
        const prodEl = prodItem.render();
        prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();
productList.render();