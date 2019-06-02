import React from 'react';

class ItemStatusFilter extends React.Component{
    constructor(){
        super();
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'}
        ];
    }

    render() {
        const { filter, onFilterChange } = this.props;
        return(
            <div className="btn-group">
                {this.buttons.map(({name, label}) => {
                    const isActive = filter === name;
                    const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

                    return (
                        <button type="button"
                                key={name} 
                                className={`btn ${clazz}`}
                                onClick={() => onFilterChange(name)}>{label}</button>
                    );
                })}
            </div>
        );
    }
}

export default ItemStatusFilter;