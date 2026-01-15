// *role : take the datalist and render the bubbles as designed*
// react imports
import { useState } from "react";
// material ui components
import * as MUI from "../../utils/MUI"

export default function BubbleToggle({ dataList, colorTheme }) {
  const [index, setIndex] = useState(0);
  return (
    <MUI.Box sx={{ mt: "10px" }}>
      {/* Content */}
      <MUI.Box sx={{minHeight: "80px"}}>
        <MUI.Typography variant="textNormal" 
          >
          {dataList[index]}
        </MUI.Typography>
      </MUI.Box>

      {/* Bubbles */}
      <MUI.Box
        sx={{
          display: "flex",
          gap: "16px",
          width: "100%",
          height : "22px",
          alignItems: "center",
          justifyContent: "center",
          mt: "24px",
        }}
      >
        {dataList.map((_, i) => {
          const active = index === i;

          return (
            <MUI.IconButton
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`select item ${i + 1}`}
              sx={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: active ? colorTheme : "#B55638",
                scale :  active ? "1.3" : "1",
                transition: "scale 0.3s ease-in-out",
                "&:hover": {
                backgroundColor: active ? colorTheme : "#B55638",
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
