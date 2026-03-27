// role : provide the rawPizzaData requird to render the UIs
import { useTranslation } from "react-i18next";
import { createContext , useContext, useMemo} from "react";

const PizzaDataContext = createContext(null);


export default function PizzaDataProvider({children}) {

    const {t} = useTranslation()
    // do not change unless the language changes
    const pizzaRawData = useMemo( () => 
        t("pizza.items", { returnObjects: true }), 
        [t]) ;
    
    return(
        <PizzaDataContext.Provider value={pizzaRawData}>
            {children}
        </PizzaDataContext.Provider>
    )
}

export const usePizzaData= () => useContext(PizzaDataContext)