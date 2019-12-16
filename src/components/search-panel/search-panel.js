import React, { Component } from "react";

import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        const searchText = 'Type here to search';
        const searchStyle = {
            fontSize: '20px'
        };
        return (
            <input
                className="form-control search-input"
                style={searchStyle}
                placeholder={searchText}
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        )
    }
}