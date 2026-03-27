// role : take the datalist and make selective tab to navigate content

import * as MUI from "../../barrels/MUI";
import { useState } from "react";
import { useTheme } from "../../providers/Theme";

export default function BubbleToggle({ dataList }) {
  const [index, setIndex] = useState(0);
  const { colors } = useTheme();
  return (
    <MUI.Box sx={{ maxWidth: "150ch", mt: "var(--GlobalgapOfItems)" }}>
      {/* Content */}
      <MUI.Box
        role="tabpanel"
        aria-labelledby={`tab-${index}`}
        id={`tabpanel-${index}`}
        sx={{
          height: {
            xs: "calc(320px - 20vw)",
            special: "calc(320px - 15vw)",
            lg: "calc(320px - 13vw)",
            xl: "calc(320px - 9vw)",
          },
        }}
      >
        <MUI.Typography component={"p"} sx={{ lineHeight: 1.2 }} variant="textWelcomingInfo">
          {dataList[index]}
        </MUI.Typography>
      </MUI.Box>

      {/* Bubbles wrapper */}
      <MUI.Box
        role="tablist"
        aria-label="content navigation"
        sx={{
          display: "flex",
          gap: "var(--bubbleDimension)",
          width: "100%",
          height: "var(--bubbleDimension)",
          alignItems: "center",
          margin: "10px",
          justifyContent: "center",
        }}
      >
        {dataList.map((_, i) => {
          const isActive = index === i;
          return (
            <MUI.IconButton
              role="tab"
              aria-label={`Show item ${i + 1}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${i}`}
              id={`tab-${i}`}
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: "var(--bubbleDimension)",
                height: "var(--bubbleDimension)",
                borderRadius: "50%",
                backgroundColor: isActive ? colors.text : "#B55638",
                transform: isActive ? "scale(1.3)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: isActive ? colors.text : "#B55638",
                },
              }}
            />
          );
        })}
      </MUI.Box>
    </MUI.Box>
  );
}
