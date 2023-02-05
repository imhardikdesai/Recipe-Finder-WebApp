import { useEffect, useState } from "react";
import RecipeContext from "./RecipeContext";
// import RecipeData from "../db/RecipeData";


const RecipeState = (props) => {

    const [query, setQuery] = useState('')
    const [fetchedData, setFetchedData] = useState([])

    const apiKey = '1d2df2fba8e92f32cb1529918247fe32'
    const id = 'f0bf1ca6'
    const url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${apiKey}`


    const handleFetchRecipe = (event) => {
        if (event.key === "Enter") {
            fetchRecipe(url)
            setQuery('')
        }
    };

    const fetchRecipe = (fetchURL) => {
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => setFetchedData(data.hits))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchRecipe(`https://api.edamam.com/search?q=cheery&app_id=${id}&app_key=${apiKey}`)
    }, [])

    return (
        <RecipeContext.Provider value={{ query, setQuery, handleFetchRecipe, fetchedData }}>
            {props.children}
        </RecipeContext.Provider >
    )
}

export default RecipeState