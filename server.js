const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());


app.use('/static', express.static(path.join(__dirname, 'public', 'static')));

const perfumes = [
  { id: 1, title: 'Perfume 1', description: 'Perfumes are captivating blends of scents that evoke emotions and memories.', price: 50, volume: 30, imageSrc: '/static/perfume1.jpg' },
  { id: 2, title: 'Perfume 2', description: 'Wearing a signature scent can boost your confidence and leave a lasting impression.', price: 75, volume: 50, imageSrc: '/static/perfume1.jpg' },
  { id: 3, title: 'Perfume 3', description: 'Explore the world of perfumes to find the perfect aroma that resonates with you.', price: 120, volume: 100, imageSrc: '/static/perfume1.jpg' },
  { id: 4, title: 'Perfume 4', description: 'Experience a scent that embodies elegance and sophistication.', price: 200, volume: 150, imageSrc: '/static/perfume1.jpg' },
  { id: 5, title: 'Perfume 5', description: 'A fragrance that leaves a trail of mystery wherever you go.', price: 95, volume: 75, imageSrc: '/static/perfume1.jpg' },
  { id: 6, title: 'Perfume 6', description: 'An aromatic blend of floral and citrus notes for a fresh feel.', price: 65, volume: 40, imageSrc: '/static/perfume1.jpg' },
];

app.get('/api/perfumes', (req, res) => {
  const { searchTerm = '', price, volume } = req.query;

  let filteredPerfumes = perfumes.filter(perfume =>
    perfume.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  if (price) filteredPerfumes = filteredPerfumes.filter(perfume => perfume.price <= parseInt(price, 10));
  if (volume) filteredPerfumes = filteredPerfumes.filter(perfume => perfume.volume <= parseInt(volume, 10));

  res.json(filteredPerfumes);
});

app.get('/api/perfumes/:id', (req, res) => {
  const perfumeId = parseInt(req.params.id, 10);
  const perfume = perfumes.find((p) => p.id === perfumeId);
  if (perfume) {
    res.json(perfume);
  } else {
    res.status(404).json({ error: "Perfume not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
