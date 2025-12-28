import SharedNavigation from "../components/shared/SharedNavigation"
import Filter from "../components/ui/filter"
import SpecialCard from "../components/ui/SpecialCard"
export default function Menu() {
    return ( 
        <>
        <SharedNavigation backTo={"/welcome"}/>
        <Filter />
        <SpecialCard />
        </>
)
}