import React from 'react';

import './item-add-form.css';

class ItemAddForm extends React.Component {

	state = {
		text: '',
		isInvalid: false
	};

	handleChange = (evt) => {
		this.setState({ text: evt.target.value });
	}

	handleSubmit = (evt) => {
		evt.preventDefault();
		const text = this.state.text.trim();
		if (text.length > 0) {
			this.props.onAdd(text);
			this.setState({
				text: '',
				isInvalid: false
			});
		} else {
			this.setState({ isInvalid: true });
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='item-add-form d-flex'>
				<input type='text'
					className={`form-control ${this.state.isInvalid ? 'is-invalid' : ''}`}
					placeholder='What needs to be done'
					value={this.state.text}
					onChange={this.handleChange} />
				<button type='submit' className='btn btn-outline-secondary'>
					Add Item
				</button>
			</form>
		);
	}
}

export default ItemAddForm;