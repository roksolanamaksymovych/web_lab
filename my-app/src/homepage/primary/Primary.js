import React from 'react';

function PrimaryButton({ text, onClick }) {
    return (
        <button className="primary-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default PrimaryButton;
