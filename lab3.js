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


const sortPriceButton = document.getElementById("sortPrice");
const sortVolumeButton = document.getElementById("sortVolume");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const calculateButton = document.getElementById("calculateButton");
const perfumesList = document.getElementById("perfumesList");
const totalPriceDisplay = document.getElementById("totalPrice");
const clearButton = document.getElementById("resetButton");


const perfumeTemplate = ({ volume, price, brand }) => `
<tr>
    <td>${brand}</td>
    <td>${volume} ml</td>
    <td>${price} грн</td>
</tr>`;


let currentPerfumes = [];

const renderPerfumesList = (perfumes) => {
    perfumesList.innerHTML = ""; 
    for (const perfume of perfumes) {
        addPerfumeToPage(perfume);  
    }
    currentPerfumes = perfumes;  
};


const addPerfumeToPage = ({ volume, price, brand }) => {
    perfumesList.insertAdjacentHTML(
        "beforeend",
        perfumeTemplate({ volume, price, brand })
    );
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
        perfumesList.innerHTML = "<tr><td colspan='3'>No perfumes found</td></tr>";
    }
});


clearButton.addEventListener("click", () => {
    searchInput.value = "";
    renderPerfumesList(perfumes);
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
    totalPriceDisplay.textContent = total + ' грн';
});
