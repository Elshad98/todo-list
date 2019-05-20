import React from 'react';
import './ItemAddForm.css';

class ItemAddForm extends React.Component {
	render(){
		return (
            <div className="item-add-Form">
				<button className="btn btn-outline-secondary">
					Add Item
				</button>
			</div>
        );
	}
}

export default ItemAddForm;