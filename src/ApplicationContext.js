import { createContext, useState } from "react";

export const ShopContext = createContext()

export const ShopProvider = props => {
    const [categories, setCategories] = useState([])
    
    return (
        <ShopContext.Provider value={[categories, setCategories]}>
            {props.children}
        </ShopContext.Provider>
    )
}