import React from "react";
import './search.css'

const Search = props => (
    <form 
        action="" 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input
            ref={props.setRef}
            type="text" 
            className="Search-input"
            placeholder="¿Que desea buscar?"
            onChange={props.handleChange}
            value={props.value}
            // defaultValue="Luis Fonsi"
        />
    </form>
)


export default Search;