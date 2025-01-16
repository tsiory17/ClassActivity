const cards = document.querySelectorAll(".product-card");
cards.forEach(card => {
    card.addEventListener("click", function () {
        const price = card.querySelector("p");
        alert(`the price is $ ${price.innerHTML}`);
    });
});
