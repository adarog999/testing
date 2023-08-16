


const func = async () => {
    const fetchData = await fetch('https://fakestoreapi.com/products',{
        credentials: 'omit',
    })
    const response = await fetchData.json()

    let displayData = response.map(object => {
        const {title,price,image,id} = object

        return `
            <div>
            <a href="home.html#/${id}">View Product</a>
                <p>${title}</p>
                <p>${price}</p>
                <img src="${image}"/>
            <div>
        `
    })
    document.body.innerHTML = displayData
}
func()

const url = 'https://shopee-e-commerce-data.p.rapidapi.com/shopee/shop/items/v2?site=%3CREQUIRED%3E&shop_id=357690612&page=1&pageSize=20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'shopee-e-commerce-data.p.rapidapi.com'
	}
};
