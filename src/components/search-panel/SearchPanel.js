import React from 'react';
import './SearchPanel.css';

class SearchPanel extends React.Component {
    constructor(){
        super();
        this.state = {
            term: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(evt){
        const term = evt.target.value;
        this.setState({
            term: term
        });
        this.props.onSearchChange(term);
    }

    render(){
        return (
            <input
                type="text"
                className="form-control search-input" 
                placeholder="search"
                value={this.state.term}
                onChange={this.handleChange} />
        );
    }
}

export default SearchPanel;