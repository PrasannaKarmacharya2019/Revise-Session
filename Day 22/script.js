 let backendProdcuts=[];
//  Fetch API using async/await
 const getProducts= async() =>
{
const response= await fetch('https://dummyjson.com/products');
// console.log(response);
const product = await response.json();
console.log(product);
//object destructuring 
const {limit, products}= product;
// console.log( products);
// console.log(limit);

backendProdcuts=products;

// Local Storage
localStorage.setItem('products', JSON.stringify(products));
}  
 getProducts();

if(localStorage.getItem('products') !== null) {
//   getting items from local storage
    backendProdcuts=localStorage.getItem('products');
   const products= JSON.parse(backendProdcuts);
//    console.log(products);   

   products.forEach((product) => {
     console.log(product);
     const div=document.createElement('div');
     div.className="card";
     div.style.width='150px';
const image=document.createElement('img');
image.className="h-90 w-100";
image.src=product.thumbnail;
div.append(image);

const h5=document.createElement('h5');
h5.innerText=product.title;

    //  append divs in container to HTML
     const container=document.getElementById('container');
     container.append(div);
        div.append(h5);
   });

}
   else {

    console.log('No products found in local storage');
}


