import React from 'react';

const ItemStatusFilter = ({ filter, onFilterChange }) => {
    const buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];
    return (
        <div className='btn-group'>
            {buttons.map(({ name, label }) => {
                const isActive = filter === name;
                const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

                return (
                    <button type='button'
                        key={name}
                        className={`btn ${clazz}`}
                        onClick={() => onFilterChange(name)}>{label}</button>
                );
            })}
        </div>
    );
};

export default ItemStatusFilter;