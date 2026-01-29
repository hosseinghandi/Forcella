// to do : change the layout of the filters
// *role: inform menu context about how render the items based on the user filter inputs* //

import * as MUI from "../../barrels/MUI"
import * as UI from "../../barrels/UI"


import { useParams } from "react-router-dom";
// translation import
import { useTranslation } from "react-i18next";

export default function Filter({colorText}) {
  const { t } = useTranslation();
  const message = {
    search: t("metadata.pizza.searchPizza"),
    categories: t("metadata.pizza.categories", { returnObjects: true }),
  };

  // control later which one is selected or active
  // const [current, setCurrent] = useState("all")
  const {filterkey} = useParams()

  const categoriesBtn = () =>
    message.categories.map((category) => {

      const path = category === "All" || category === "Tutto" ?  
      `/applayout/menu` : 
      `/applayout/menu/${category}` 

      const isActive = (path) => {
        if (path === `/applayout/menu` && !filterkey) return false
        else if (filterkey !== category) return true
      }
      
      return (
        <UI.ButtonBasic
          key={category}
          shrink={true}
          type="submit"
          title={category}
          to={path}
          nonActive = {isActive(path)}
          color={colorText}
          disabled={false}
        />
      );
    });


  return (
        <MUI.Box
          sx={{
            mt: "20px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "var(--gray)",
            borderRadius: "25px",
          }}
        >
          <MUI.Box
            sx={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              px: "12px",
              "&:focus-within": {
                borderColor: "var(--color-orange)",
              },
            }}
          >
            <MUI.Box
              sx={{
                display: "flex",
                flexGrow : 1,
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: "4px",
              }}
            >
                {categoriesBtn()}
              <MUI.Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
              </MUI.Box>
            </MUI.Box>
          </MUI.Box>
        </MUI.Box>
  );
}
