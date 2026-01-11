// react imports
import { useState,createContext, useContext } from "react"
import { useTranslation } from "react-i18next"

import { siteContext } from "../App"

import SharedNavigation from "../components/shared/SharedNavigation"
// import Filter from "../components/shared/Filter"
import SpecialCard from "../components/ui/SpecialCard"
import PizzaHolder from "../components/ui/PizzaHolder"
import PizzaInfo from "../components/ui/PizzaInfo"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

export const menuContext= createContext()

export default function Menu() {
    const {userdata} = useContext(siteContext)
    const  {pizzaInCart, likedPizzasId} = userdata
    console.log(likedPizzasId)
    const {t} = useTranslation() 
    const [requestedFilter, setFilter] = useState("all")
    const [search, setSearch] = useState(null)
    const [info, setInfo] = useState(null)
    console.log()

    const pizzaData = t("pizzaItems", {returnObjects : true})
    const offeredPizza = pizzaData.filter((el)=> el.offered.active)
    const requestedpizzaInfo = info ? pizzaData.filter((el)=> el.id === info)[0] : null

    // // pizza info is included of all text that hsould be translate 

    return ( 
        <menuContext.Provider value={{requestedFilter}}>
            <SharedNavigation distance={true} backTo={"/welcome"} filter={true}/>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                        {/* Special Offer */}
                        <Grid>
                        <SpecialCard offered={offeredPizza} />
                        </Grid>

                        {/* Pizza list */}
                        {pizzaData.map((pizza) => (
                        <Grid
                            sx={{width:"100%"}}
                            key={pizza.id}
                            // xs={12}      // 📱 mobile → 1 column
                            // sm={6}       // 📱 tablet → 2 columns
                            // md={4}       // 💻 desktop → 3 columns
                        >
                            <PizzaHolder
                            name={pizza.name}
                            price={pizza.price}
                            img={pizza.image}
                            discount={[pizza.offered.active, pizza.offered.percentage]}
                            time={pizza.time}
                            id={pizza.id}
                            liked={console.log(likedPizzasId.includes(Number(pizza.id)))}
                            added={true}
                            setInfo={setInfo}
                            review={pizza.review}
                            />
                        </Grid>
                        ))}

                        {/* Pizza info modal / section */}
                    </Grid>
                        {requestedpizzaInfo && (
                            <PizzaInfo requestedpizzaInfo={requestedpizzaInfo} setInfo={setInfo} />
                        )}
        </menuContext.Provider >
)
}