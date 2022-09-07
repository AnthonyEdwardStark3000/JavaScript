// const productList = {
//     products: [
//         {
//             title:'Pillow',
//             imageUrl:'http://google.com',
//             price:12,
//             description: 'Pillow is a pillow'
//         },
//         {
//             title:'Carpet',
//             imageUrl:'http://google.com',
//             price:19,
//             description: 'Carpet is a Carpet'
//         },
//     ],
//     render(){
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';
//         for(const prod of this.products){
//           const prodEl = document.createElement('li');
//           prodEl.className = 'product-item';
//           prodEl.innerHTML = `
//           <div>
//             <img src="${prod.imageUrl}" alt="${prod.title}">
//             <div class="product-item__content">
//             <h2>${prod.title}</h2>
//             <h3>\$${prod.price}</h3>
//             <p>${prod.description}</p>
//             <button>Add to cart</button>
//             </div>
//           </div>
//           `;
//           prodList.append(prodEl);
//         }
//         renderHook.append(prodList);
//     }
// };

// productList.render();