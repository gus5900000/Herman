document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('http://51.81.42.10:3050/get_product', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({key: 'HermannAPI-25TYI4927POIU'})
        }).then(response => response.json())
        .then(response => {
            console.log(response.length)
            for(var attributename in response){
                console.log(response[attributename])
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${response[attributename].image}" alt="${response[attributename].product_label}">
                    <h2>${response[attributename].product_label}</h2>
                    <p>${response[attributename].product_label}</p>
                    <p class="price">${response[attributename].price} €</p>
                    <button data-product-id="${response[attributename].product_name}">Buy now !</button>
                `;
                productList.appendChild(productElement);
            }
            document.querySelectorAll('.product button').forEach(button => {
                button.addEventListener('click', () => {
                    
                });
            });    
        })
});
