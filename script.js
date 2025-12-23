const topInput = document.getElementById("topColor");
const bottomInput = document.getElementById("bottomColor");

const topClothes = document.getElementById("topClothes");
const bottomClothes = document.getElementById("bottomClothes");

topInput.addEventListener("input", () => {
    topClothes.setAttribute("fill", topInput.value);
});

bottomInput.addEventListener("input", () => {
    bottomClothes.setAttribute("fill", bottomInput.value);
});