const express = require("express");
const cors = require("cors");
const path = require("path"); 
const app = express();
const PORT = 3007;

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname)); 
let perfumes = [
    { id: 1, volume: 50, price: 1200, brand: "Chanel" },
    { id: 2, volume: 150, price: 2500, brand: "Dior" },
    { id: 3, volume: 30, price: 800, brand: "Versace" },
    { id: 4, volume: 25, price: 1500, brand: "Gucci" },
    { id: 5, volume: 100, price: 2200, brand: "Armani" },
];

app.get("/perfumes", (req, res) => {
    res.json(perfumes);
});

app.get("/perfumes/search", (req, res) => {
    const { query, sort } = req.query;
    const searchQuery = query.toLowerCase();
    let filteredPerfumes = perfumes.filter(perfume =>
        perfume.brand.toLowerCase().includes(searchQuery)
    );

    // Сортування знайдених елементів за вказаним критерієм
    if (sort === "price") {
        filteredPerfumes.sort((a, b) => a.price - b.price);
    } else if (sort === "volume") {
        filteredPerfumes.sort((a, b) => a.volume - b.volume);
    }

    res.json(filteredPerfumes);
});


app.get("/perfumes/sort/price", (req, res) => {
    const sortedPerfumes = [...perfumes].sort((a, b) => a.price - b.price);
    res.json(sortedPerfumes);
});

app.get("/perfumes/sort/volume", (req, res) => {
    const sortedPerfumes = [...perfumes].sort((a, b) => a.volume - b.volume);
    res.json(sortedPerfumes);
});

let currentMaxId = perfumes.reduce((maxId, perfume) => Math.max(maxId, perfume.id), 0);

app.post("/perfumes", (req, res) => {
    const { volume, price, brand } = req.body;

    if (!volume || !price || !brand) {
        return res.status(400).json({ message: "All fields are required." });
    }

    currentMaxId += 1;

    const newPerfume = {
        id: currentMaxId,
        volume,
        price,
        brand,
    };

    perfumes.push(newPerfume);
    res.status(201).json(newPerfume);
});

app.patch("/perfumes/:id", (req, res) => {
    const perfumeId = parseInt(req.params.id, 10);
    const { volume, price, brand } = req.body;
    const perfume = perfumes.find(p => p.id === perfumeId);

    if (perfume) {
        perfume.volume = volume || perfume.volume;
        perfume.price = price || perfume.price;
        perfume.brand = brand || perfume.brand;
        res.status(200).json(perfume);
    } else {
        res.status(404).json({ message: "Perfume not found" });
    }
});

app.delete("/perfumes/:id", (req, res) => {
    const perfumeId = parseInt(req.params.id, 10);
    perfumes = perfumes.filter(p => p.id !== perfumeId);
    res.status(204).send();
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "lab5.html")); 
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

