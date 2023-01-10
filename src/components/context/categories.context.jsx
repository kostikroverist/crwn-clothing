import { createContext, useState, useEffect } from 'react'


import SHOP_DATA from '../../shop-data.js'

import { getCategoriesAndDocoments } from '../../utils/firebase/firebise.utils';


export const CategoriesContext = createContext({
    categoriesMap: {},

});


export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});


    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocoments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap }
    console.log(SHOP_DATA)

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}