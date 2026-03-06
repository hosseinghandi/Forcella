// *Role : take the datalist pssing through props 
//  and render the bubbles to navigate through*

// required material
import * as MUI from "../../barrels/MUI"
// required imports
import { useState } from "react";
import { useTheme } from "../../providers/Theme";

export default function BubbleToggle({ dataList}) {
  const [index, setIndex] = useState(0);
  const {colors} = useTheme()
  return (
    <MUI.Box sx={{maxWidth:"150ch", mt: "var(--GlobalgapOfItems)" }}>
      {/* Content */}
      <MUI.Box 
      id={`tabpanel${index}`}
      role="tabpanel"
      aria-labelledby={`tab-${index}`}
      sx={{
        height:{xs:"calc(320px - 20vw)", 
          special:"calc(320px - 15vw)", 
          lg:"calc(320px - 13vw)", 
        xl:"calc(320px - 9vw)"}
      }}
      >
        <MUI.Typography 
        sx={{lineHeight:1.2}}
        variant="textWelcomingInfo" 
          >
          {dataList[index]}
        </MUI.Typography>
      </MUI.Box>

      {/* Bubbles wrapper */}
      <MUI.Box
        role="tablist"
        aria-label="tab navigations"
        sx={{
          display: "flex",
          gap: "var(--bubbleDimension)",
          width: "100%",
          height : "var(--bubbleDimension)",
          alignItems: "center",
          margin:"10px",
          justifyContent: "center",
        }}
      >
        {dataList.map((_, i) => {
          const active = index === i;

          return (
            <MUI.IconButton
              key={i}
              id={`tab-${i}`}
              onClick={() => setIndex(i)}
              aria-controls={`tabpanel${i}`}
              aria-selected = {active}
              tabIndex={active ? 0 : -1}
              role="tab"
              sx={{
                width: "var(--bubbleDimension)",
                height: "var(--bubbleDimension)",
                borderRadius: "50%",
                backgroundColor: active ? colors.text : "#B55638",
                transform :  active ? "scale(1.3)" : 'scale(1)',
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                backgroundColor: active ? colors.text : "#B55638",
              }
              }
            }
            />
          );
        })}
      </MUI.Box>
    </MUI.Box>
  );
}
