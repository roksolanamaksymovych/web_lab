import React, { useState } from 'react';
import Select from '../select/Select';
import PrimaryButton from '../primary/Primary';
import '../filter/Filter.css';
import '../search/Search.css'; 



function Filters({ onFilterChange }) {
    const [price, setPrice] = useState('');
    const [volume, setVolume] = useState('');
    const [search, setSearch] = useState('');

    const handleApply = () => {
        onFilterChange({ price, volume, search: search.trim() });  
    };

    return (
        <div className="filters">
            <div className="select-container">
                <label>Price</label>
                <Select 
                    options={[
                        { value: '', label: 'Any' },
                        { value: '1', label: 'Below $50' },
                        { value: '2', label: '$50 - $100' },
                        { value: '3', label: '$100 - $200' },
                        { value: '4', label: 'Above $200' }
                    ]}
                    onChange={(e) => setPrice(e.target.value)} 
                />
            </div>
            <div className="select-container">
                <label>Volume</label>
                <Select 
                    options={[
                        { value: '', label: 'Any' },
                        { value: '1', label: 'Under 50ml' },
                        { value: '2', label: '50ml - 100ml' },
                        { value: '3', label: '100ml - 150ml' },
                        { value: '4', label: 'Above 150ml' }
                    ]}
                    onChange={(e) => setVolume(e.target.value)} 
                />
            </div>

          
            <div className="select-container">
                <label>Search</label>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}  
                />
            </div>

            <div className="primary-button-container">
                <PrimaryButton text="Apply" onClick={handleApply} />
            </div>
        </div>
    );
}

export default Filters;
