import SharedNavigation from "../components/shared/SharedNavigation"
import Filter from "../components/ui/filter"
import SpecialCard from "../components/ui/SpecialCard"
import PizzaHolder from "../components/ui/PizzaHolder"
import { useTranslation } from "react-i18next"
import pizzaData from "../data/pizzza.json"

export default function Menu() {
    const {t} = useTranslation() 
    const pizzaInfo = t("metadata.pizza",{ returnObjects: true })
    
    console.log(Object.keys(pizzaInfo))
    const PizzaList = (pizzaInfo) => {
        return Object.keys(pizzaInfo).map( (index) =>(
            <PizzaHolder  
            name={pizzaInfo[index].name}
            price={pizzaData[index].price}
            img={pizzaData[index].image}  
            discount={pizzaData[index].isOffered}
            time={pizzaData[index].time}
            id={pizzaData[index].id}

            />
        )
        )
    }
    
    return ( 
        <>
        <SharedNavigation distance={true} backTo={"/welcome"}/>
        <Filter />
        <SpecialCard />
        <div className="grid gap-[20px]">
        {PizzaList(pizzaInfo)}
        </div>
        </>
)
}