// *role :  on reuqest make input *
// material ui elements
import { TextField, InputAdornment } from "@mui/material";

export default function Input({
  name,
  label,
  icon,
  error,
  isValid,
  background,
  NoBorder,
  ...inputProps
}) {
  return (
    <TextField
      label={name}
      placeholder={inputProps.placeholder}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment
            sx={{ color: isValid ? "green" : "black" }}
            position="end"
          >
            {icon}
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiInputLabel-root": {
          width: "100%",
          paddingLeft: 2,
          top: "50%",
          transform: "translateY(-50%)",
        },
        "& .MuiInputLabel-shrink": {
          top: "0",
          fontSize: " 0.75rem",
        },
        "& .MuiOutlinedInput-root": {
          backgroundColor: background ? background : "white",
          borderRadius: "25px",
          height: "45px",
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
