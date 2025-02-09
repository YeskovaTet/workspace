let product = JSON.parse(localStorage.getItem("product")) || {
    title: "Velobike",
    img: "https://www.velocarnac.com/wp-content/uploads/2023/01/Velo-de-ville-630x378.jpg",
    count: 10,
    favorite: false
};

function update() {
    document.getElementById("title").innerText = product.title;
    document.getElementsByClassName("image").src = product.image;
    document.getElementById("count").innerText = product.count;
    document.getElementById("favorite").classList.toggle('active', product.favorite);
}

function increaseCount() {
    product.count++;
    saveAndUpdate();
}

function decreaseCount() {
    if (product.count > 0) {
        product.count--;
        saveAndUpdate();
    }
}

function toggleFavorite() {
    product.favorite = !product.favorite;
    saveAndUpdate();
}

function saveAndUpdate() {
    localStorage.setItem("product", JSON.stringify(product));
    update();
}
document.getElementById("increase").addEventListener("click", increaseCount);
document.getElementById("decrease").addEventListener("click", decreaseCount);
document.getElementById("favorite").addEventListener("click", toggleFavorite);
update();
