// to do : change the layout of the filters
// *role: inform menu context about how render the items based on the user filter inputs* //

import * as MUI from "../../barrels/MUI"
import * as UI from "../../barrels/UI"
import useRequestData from "../../hook/useRequestText";

import { useParams } from "react-router-dom";
export default function Filter({colorText}) {

  const categories = useRequestData("categories")

  const {filterkey} = useParams()

  const categoriesBtn = () =>
      categories.map((category) => {
      const path = category === "All" || category === "Tutte" ?  
      `/menu` : 
      `/menu/${category}` 

      const isActive = (path) => {
        if (path === `/menu` && !filterkey) return false
        else if (filterkey !== category) return true
      }
      return (
        <MUI.Grid 
        key={category}
        size="auto">
        <UI.ButtonBasic
          shrink={true}
          type="submit"
          title={category}
          to={path}
          nonActive = {isActive(path)}
          color={colorText}
          disabled={false}
        />
        </MUI.Grid>
      );
    });


  return (
        <MUI.Card
          sx={{
            // this gap the spac for mobiole which put space within the arrow and filter 
            mt:{xs:"var(--GlobalgapOfGrids)",md:"unset"},
            height:{xs:"fit-content", special:"var(--filterAndNavSize)" },
            flexDirection: "column",
            justifyContent:"center",
            width: "100%",
            backgroundColor: "var(--gray)",
            borderRadius: "var(--radius)"
          }}
        >
            <MUI.Grid 
            width={"100%"}
            container
            rowSpacing={{xs:"var(--GlobalgapOfGrids)", sm:"calc(var(--GlobalgapOfGrids) / 2)" }} 
            columnSpacing={{xs:"var(--GlobalgapOfGrids)", sm:"calc(var(--GlobalgapOfGrids) / 2)"}}
            justifyContent={{sm:"space-evenly"}} 
            >
              {categoriesBtn()}
            </MUI.Grid>
        </MUI.Card>
  );
}
