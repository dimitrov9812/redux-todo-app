import React from 'react';

const Link = ({ active, onClick, children }) => {
    return (
        <button onClick={onClick} disabled = { active }>
            {children}
        </button>
    )
}

export default Link;