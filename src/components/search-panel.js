import React from "react";

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return (
        <input className="form-control search-input" style={searchStyle} placeholder={searchText} />
    )
};

export default SearchPanel;