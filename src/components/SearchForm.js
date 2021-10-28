import React, { useEffect } from 'react';
import { useRef } from "react";
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('');
//Set the focus of cursor on the search cocktail input.
    useEffect(() => {
        searchValue.current.focus();
    }, []);

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    };
    //If the search value is empty and i press enter, the page is not refreshing.
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <section className="section search">
            <form className="search-form" onSubmit={ handleSubmit }>
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text" id="name" ref={ searchValue } onChange={ searchCocktail } />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
