import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        const {onChangeHandler, placeholders, className} = this.props;
        return (
            <input 
                className={`search-box ${className}`} 
                type='search' 
                placeholder={placeholders} 
                onChange={onChangeHandler}
            >
            </input>
        );
    }
}

export default SearchBox;