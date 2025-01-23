import '../SCSS/product.scss'

const cards = document.querySelectorAll(".product-card");
cards.forEach(card => {
    card.addEventListener("click", function () {
        const price = card.querySelector("p");
        const name = card.querySelector("h2")
        alert(`the price  of ${name.innerHTML} is $ ${price.innerHTML} `);
    });
});