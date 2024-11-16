import React from 'react';

function Select({ label, options, onChange }) {
    return (
        <div className="select-container">
            {label && <label>{label}</label>}
            <select onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
