import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('p');
    const [cocktails, setCocktails] = useState([]);
    //Warning from react:
    //React Hook useEffect has a missing dependency: 'fetchDrinks'.
    // Either include it or remove the dependency array

    //If i add it as a dependency will get an infinite loop here because i change my cocktails useState
    //So i need to add useCallback and then add it as a dependency.
    //useCallback = Only if something changes in this function (the search term let's say)...then
    //create it from the scratch
    const fetchDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${ url }${ searchTerm }`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                    return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass };
                });
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);
    //If i add fetchDrknks as a dependency here i will have an infinite loop
    //so i will use useCallback
    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks]);

    return (
        <AppContext.Provider value={ { loading, cocktails, setSearchTerm } }>
            { children }
        </AppContext.Provider>);
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
