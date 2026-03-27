// *role: create a filter component which :
// A)gets a category list and cerate button corrispondingly
// B)gets the filterkey and enhance UI by
// reducing the opacity of teh unselected filter

import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import useRequestText from "../../hook/useRequestText";

import { useParams } from "react-router-dom";
export default function Filter() {
  const categories = useRequestText("categories");

  const { filterkey } = useParams();
  const categoriesBtn = () =>
    categories.map((category) => {
      const path =
        category === "All" || category === "Tutti"
          ? `/menu`
          : `/menu/${category}`;

      const isActive = (path) => {
        if ((path === `/menu` && !filterkey) || filterkey === category)
          return true;
        else return false;
      };

      return (
        <MUI.Grid key={category} size="auto">
          <UI.ButtonBasic
            shrink={true}
            title={category}
            to={path}
            isActive={isActive(path)}
          />
        </MUI.Grid>
      );
    });

  return (
    <MUI.Card
      sx={{
        mt: { xs: "var(--GlobalgapOfGrids)", md: "unset" },
        height: { xs: "fit-content", md: "var(--filterAndNavSize)" },
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "var(--gray)",
        borderRadius: "var(--radius)",
      }}
    >
      <MUI.Grid
        aria-label="Filter categories"
        width={"100%"}
        container
        rowSpacing={{
          xs: "var(--GlobalgapOfGrids)",
          sm: "calc(var(--GlobalgapOfGrids) / 2)",
        }}
        columnSpacing={{
          xs: "var(--GlobalgapOfGrids)",
          sm: "calc(var(--GlobalgapOfGrids) / 2)",
        }}
        justifyContent={{ sm: "space-evenly" }}
      >
        {categoriesBtn()}
      </MUI.Grid>
    </MUI.Card>
  );
}
