// *role: inform menu context about how render the items based on the user filter inputs* //

// Icons
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";

// UI component
import Button from "../ui/Button";

// Material ui component
import { Box, TextField } from "@mui/material";

// react imports
import { useState } from "react";

// translation import
import { useTranslation } from "react-i18next";

export default function Filter() {
  const { t } = useTranslation();
  const message = {
    search: t("metadata.pizza.searchPizza"),
    categories: t("metadata.pizza.categories", { returnObjects: true }),
  };

  const categoriesBtn = () =>
    message.categories.map((category) => {
      return (
        <Button
          key={category}
          shrink={true}
          type="submit"
          title={category}
          to={`/applayout/menu/${category}`}
          color={"white"}
          disabled={false}
        />
      );
    });

  const [filter, setFilter] = useState(false);
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
          height: "40px",
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
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: "8px",
          }}
        >
          {/* LEFT CONTENT */}
          {filter ? (
            categoriesBtn()
          ) : (
            <TextField
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ width: "100%" }}
              placeholder={message.search}
            />
          )}

          {/* TOGGLE ICON */}
          <Box
            onClick={() => setFilter((prev) => !prev)}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {filter ? <CloseIcon /> : <FilterAltIcon />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
