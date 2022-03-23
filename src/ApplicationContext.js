import { createContext, useState } from "react";

export const ShopContext = createContext()

export const ShopProvider = props => {
    const [categories, setCategories] = useState([{"name":"zakaria"}, {"name1":"zakaria1"}])
    return (
        <ShopContext.Provider value={categories}>
            {props.children}
        </ShopContext.Provider>
    )
}