import React from "react";

const Searchbox = ({ searchfield, searchChange}) => {
    return (
        <div className="pa2">
        <input 
        className="pa2 ba b--green bg-lightest-blue" 
        type='search' 
        placeholder="Find your Robot!" 
        onChange={searchChange}
        />
        </div>
    );
}

export default Searchbox;