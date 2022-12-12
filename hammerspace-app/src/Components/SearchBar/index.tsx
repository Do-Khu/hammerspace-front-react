import React, { useState } from "react";
import { Input, Button , Container} from './styles';

interface IFSearchBar {
    onChange: any,
    onClick: any
}

const SearchBar = (props: IFSearchBar) => {
   
    return (
        
        <Container>
            <h1>Add or Delete cards in your inventory</h1>
            <div>
                <Input
                    name="search"
                    placeholder="Search a Card"
                    onChange={props.onChange}
                    type="text"
                />
                <Button type="button" onClick={props.onClick} />
            </div>
        </ Container>
    );
}

export default SearchBar;