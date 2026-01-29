import { useTranslation } from "react-i18next";
import { createContext , useContext} from "react";

export const PizzaDataContext = createContext(null);


export default function PizzaDataProvider({children}) {

    const {t} = useTranslation()
    const pizzaRawData = t("pizza.items", { returnObjects: true });
    
    return(
        <PizzaDataContext.Provider value={pizzaRawData}>
            {children}
        </PizzaDataContext.Provider>
    )
}

export const usePizzaData= () => useContext(PizzaDataContext)