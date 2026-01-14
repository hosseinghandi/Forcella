// to do : change the layout of the filters
// *role: inform menu context about how render the items based on the user filter inputs* //

// UI component
import Button from "../ui/Button";

// Material ui component
import { Box } from "@mui/material";

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
      return (
        <Button
          key={category}
          shrink={true}
          type="submit"
          title={category}
          to={`/applayout/menu/${category}`}
          nonActive = {true ? filterkey !== category : false}
          color={colorText}
          disabled={false}
        />
      );
    });


  return (
    <Box
      sx={{
        mt: "20px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "var(--gray)",
        borderRadius: "25px",
      }}
    >
      <Box
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
        <Box
          sx={{
            display: "flex",
            flexGrow : 1,
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: "4px",
          }}
        >
          {/* LEFT CONTENT */}
          <Button
                key={"All"}
                shrink={true}
                type="link"
                title={"All"}
                to={`/applayout/menu`}
                color={colorText}
                nonActive={!filterkey ?  false : true}
                disabled={false}
          />
            {categoriesBtn()}

               <Button
                key={"offered"}
                shrink={true}
                type="submit"
                title={"Offered"}
                to={`/applayout/menu/offered`}
                color={colorText}
                nonActive={filterkey ==="offered" ?  false : true}
                disabled={false}
          />

          {/* TOGGLE ICON */}
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
