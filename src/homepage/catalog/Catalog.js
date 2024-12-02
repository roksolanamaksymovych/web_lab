import React, { useState, useEffect } from 'react';
import { fetchPerfumes } from '../../api'; 
import Filters from '../filter/Filter'; 
import Search from '../search/Search';
import Loader from '../loader/Loader'; 
import ProductItem from '../productitem/ProductItem'; 
import { Link } from 'react-router-dom';  

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const [price, setPrice] = useState('');
  const [volume, setVolume] = useState('');
  const [search, setSearch] = useState('');

  
  const resetFilters = () => {
    setPrice('');
    setVolume('');
    setSearch('');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);  
        const data = await fetchPerfumes({
            searchTerm: search, 
            price: price,
            volume: volume
          });
          
        setProducts(data);
        setLoading(false); 
      } catch (error) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [price, volume, search]); 

  if (loading) return <Loader />;  
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="catalog-page">
      <h1>Catalog</h1>

      <div className="filters-container">
        <Filters
          setPrice={setPrice}
          setVolume={setVolume}
        />
        <Search searchValue={search} onSearchChange={setSearch} />
      </div>

      <div className="filters-actions">
        <button className="reset-button" onClick={resetFilters}>Reset Filters</button>
      </div>

      <div className="products-container">
        <div className="products">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.imageSrc} alt={product.title} className="product-image" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Volume: {product.volume}ml</p>
                
                <Link to={`/product/${product.id}`}>
                  <button className="more-button">More</button>
                </Link>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
