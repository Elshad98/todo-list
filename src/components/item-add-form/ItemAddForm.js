import React from 'react';
import './ItemAddForm.css';

class ItemAddForm extends React.Component {
	constructor(){
		super();

		this.state = {
			text: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt){
		this.setState({
			text: evt.target.value
		});
	}

	handleSubmit(evt){
		evt.preventDefault();
		const text = this.state.text.trim();
		if(text && isNaN(text)){
			this.props.onAdd(this.state.text);
			this.setState(state => ({text : ''}));
		}				
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit} className="item-add-form">
				<input type="text" value={this.state.text} onChange={this.handleChange} />
				<button type="submit" className="btn btn-outline-secondary">
					Add Item
				</button>
			</form>
        );
	}
}

export default ItemAddForm;