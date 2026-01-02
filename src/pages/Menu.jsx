// react imports
import { useState,createContext } from "react"
import { useTranslation } from "react-i18next"

import SharedNavigation from "../components/shared/SharedNavigation"
import Filter from "../components/shared/Filter"
import SpecialCard from "../components/ui/SpecialCard"
import PizzaHolder from "../components/ui/PizzaHolder"
import PizzaInfo from "../components/ui/PizzaInfo"


export const menuContext= createContext()

export default function Menu() {
    const {t} = useTranslation() 
    const [filter, setFilter] = useState("all")
    const [search, setSearch] = useState(null)
    const [info, setInfo] = useState("1")

    const pizzaData = t("pizzaItems", {returnObjects : true})
    const offeredPizza = pizzaData.filter((el)=> el.offered.active)
    const pizzaInfo = pizzaData.filter((el)=> el.id === info)[0]

    // // pizza info is included of all text that hsould be translate 



    const pizzaListHtml = (pizzaData) => {
        return pizzaData.map( el =>(
            <PizzaHolder  
            name={el.name}
            price={el.price}
            img={el.image}  
            discount={[el.offered.active,el.offered.percentage]}
            time={el.time}
            id={el.id}
            review={el.review}
            infoFunction = {setInfo}
            />
        )
        )
    }

    


    return ( 
        <menuContext.Provider value={{filter,}}>
            <SharedNavigation distance={true} backTo={"/welcome"} filter={true}/>
            <div className="grid gap-[20px] mt-[20px]">
            <SpecialCard offered={offeredPizza}/>
            {pizzaListHtml(pizzaData)}
            {true && <PizzaInfo pizzaInfo={pizzaInfo} />} 
            </div>
        </menuContext.Provider >
)
}