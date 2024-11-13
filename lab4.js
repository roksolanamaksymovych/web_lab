class Perfume {
    constructor(volume, price, brand) {
        this.volume = volume;  
        this.price = price;    
        this.brand = brand;   
    }
}

const perfumes = [
    new Perfume(50, 1200, "Chanel"),
    new Perfume(150, 2500, "Dior"),
    new Perfume(30, 800, "Versace"),
    new Perfume(25, 1500, "Gucci"),
    new Perfume(100, 2200, "Armani")
];

const perfumesList = document.getElementById("perfumesList");
const createPerfumeButton = document.getElementById("createPerfumeButton");
const sortPriceButton = document.getElementById("sortPrice");
const sortVolumeButton = document.getElementById("sortVolume");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const calculateButton = document.getElementById("calculateButton");
const totalPriceDisplay = document.getElementById("totalPrice");
const modal = document.getElementById("modal");
const perfumeForm = document.getElementById("perfumeForm");
const brandInput = document.getElementById("brandInput");
const volumeInput = document.getElementById("volumeInput");
const priceInput = document.getElementById("priceInput");
const savePerfumeButton = document.getElementById("savePerfumeButton");
const closeButton = document.querySelector(".close");

let currentPerfumes = [];
let editPerfumeIndex = null;  

const perfumeTemplate = ({ volume, price, brand }, index) => `
<tr>
    <td>${brand}</td>
    <td>${volume} ml</td>
    <td>${price} грн</td>
    <td><button class="edit-button" data-index="${index}">Edit</button></td>
</tr>`;


const renderPerfumesList = (perfumes) => {
    perfumesList.innerHTML = ""; 
    for (const [index, perfume] of perfumes.entries()) {
        perfumesList.insertAdjacentHTML("beforeend", perfumeTemplate(perfume, index));  
    }
    currentPerfumes = perfumes;  
};

renderPerfumesList(perfumes);


searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    const foundPerfumes = perfumes.filter(
        (perfume) => perfume.brand.toLowerCase().includes(query)
    );

    if (foundPerfumes.length > 0) {
        renderPerfumesList(foundPerfumes);
    } else {
        perfumesList.innerHTML = "<tr><td colspan='4'>Парфуми не знайдені</td></tr>";
    }
});


sortPriceButton.addEventListener("click", () => {
    const sortedPerfumes = [...currentPerfumes].sort((a, b) => a.price - b.price);
    renderPerfumesList(sortedPerfumes);
});


sortVolumeButton.addEventListener("click", () => {
    const sortedPerfumes = [...currentPerfumes].sort((a, b) => a.volume - b.volume);
    renderPerfumesList(sortedPerfumes);
});


calculateButton.addEventListener("click", () => {
    const total = currentPerfumes.reduce((acc, { price }) => acc + price, 0);
    totalPriceDisplay.textContent = `Total Price: ${total} грн`;
});


createPerfumeButton.addEventListener("click", () => {
    editPerfumeIndex = null;  
    modal.style.display = "block"; 
    perfumeForm.reset(); 
});


closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});



const isUniqueBrand = (brand) => {
    return !currentPerfumes.some((perfume) => perfume.brand.toLowerCase() === brand.toLowerCase());
};


perfumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newBrand = brandInput.value.trim();
    const newVolume = parseInt(volumeInput.value);
    const newPrice = parseFloat(priceInput.value);

  
    if (editPerfumeIndex === null && !isUniqueBrand(newBrand)) {
        alert("Парфум з такою назвою вже існує!");
        return; 
    }

    if (editPerfumeIndex !== null) {
        currentPerfumes[editPerfumeIndex] = new Perfume(newVolume, newPrice, newBrand);
    } else {
        currentPerfumes.push(new Perfume(newVolume, newPrice, newBrand));
    }

    renderPerfumesList(currentPerfumes);
    modal.style.display = "none"; 
});


perfumesList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        editPerfumeIndex = event.target.dataset.index; 
        const perfumeToEdit = currentPerfumes[editPerfumeIndex];

        brandInput.value = perfumeToEdit.brand;
        volumeInput.value = perfumeToEdit.volume;
        priceInput.value = perfumeToEdit.price;

        modal.style.display = "block"; 
    }
});
