

fetch("https://dummyjson.com/products")

.then((data) => {
      console.log("value:",data);
    return data.json();
})  
.then((dat)=>{
     console.log("value:",dat);
});
   