console.log("asd")

const locations = window.location.hash
console.log(locations.slice(2))

fetch(`https://fakestoreapi.com/products/${locations.slice(2)}`)
.then( res => res.json())
.then(object => {
    const {title,price,image} = object
    document.body.innerHTML = `
        <div>
        <a href="index.html">Go home</a>
        <p>${title}</p>
        <p>${price}</p>
        <img src="${image}"/>
        </div>
    `

})