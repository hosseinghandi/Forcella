// *role :  on reuqest make input *
// material ui elements

import * as MUI from "../../barrels/MUI"

export default function InputBasic({
  name,
  label,
  icon,
  error,
  isValid,
  background,
  NoBorder,
  defaultValueInput,
  editMode,
  onChange,
  ...inputProps
}) {
  return (
    <MUI.TextField
      required
      label={label && label}
      name={name}
      placeholder={inputProps.placeholder}
      defaultValue={defaultValueInput && defaultValueInput}
      fullWidth
      onChange={() => onChange(event)}
      
      InputProps={{
        endAdornment: (
          <MUI.InputAdornment
            sx={{ color: isValid ? "green" : "black" }}
            position= "end"
          >
            {icon}
          </MUI.InputAdornment>
        ),
      }}
      sx={{
        "& .MuiInputLabel-root": {
          width: "100%",
          paddingLeft: 2,
          top: "50%",
          transform: "translateY(-50%)",
          ...(editMode && {paddingLeft: 6})
          
        },
        "& .MuiInputLabel-shrink": {
          top: "0",
          fontSize: " 0.75rem",
        },
        "& .MuiOutlinedInput-root": {
          display:"flex",
          backgroundColor: background ? background : "white",
          borderRadius: "25px",
          width:"100%",
          height: "var(--inputSize)",
          ...(editMode && {flexDirection:"row-reverse"})
        },
        "& .MuiOutlinedInput-input": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ...(!NoBorder && {
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 1,
            borderColor: "black",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderWidth: 1,
            borderColor: "black",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderWidth: 1,
              borderColor: "black",
            },
        }),
      }}
    />
  );
}
