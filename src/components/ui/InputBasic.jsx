// *role :  on reuqest make input *
// material ui elements
import * as MUI from "../../barrels/MUI"
export default function InputBasic({
  name,
  label,
  type,
  placeholder,
  Icon,
  isValid,
  value,
  onChange,
  inputRef,
  error,
}) {


return (
<MUI.Box sx={{width:"100%",display:"flex", flexDirection:"column", 
  gap:"5px" }}>
  <MUI.Typography 
  variant="textLabel"
  sx={{width:"100%", alignSelf:"left"}}
  component={"label"} htmlFor={name}>{label}</MUI.Typography>
    <MUI.TextField
      error={!!error}
      id= {error ? "outlined-error" : name}
      helperText={!!error && error?.message}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      inputRef={inputRef}
      hiddenLabel

      variant="outlined"
      FormHelperTextProps={{
        sx: {
          fontSize: "var(--textLabel)",
        }
      }}
      sx={{
        
        // delet the calender and spins 
        "& input[type=number]": {
              MozAppearance: "textfield",
            },
            "& input[type=number]::-webkit-outer-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input::-webkit-calendar-picker-indicator": {
            display: "none",
          },

      width: "100%",
      "& .MuiOutlinedInput-root": {
        border: "1px solid var(--black-bg)",
        background:"var(--white-bg)",
        height: "var(--buttonAndInputSize)",
        borderRadius: "25px",
        "& fieldset": {
          color:"black",
          padding:"0",
          borderRadius: "25px",
        },
        "& .MuiOutlinedInput-input::placeholder": {
          opacity: 0.6, 
        },
        "&:hover fieldset": {
          border: "1px solid var(--orange)"
        },

        "&.Mui-focused fieldset": {
          border: "1px solid var(--orange)",
        },

        "& input": {
          paddingX: 3,
          height: "100%",
        }
      },
    }}
      InputProps={{
        endAdornment: (
          <MUI.InputAdornment
            sx={{ color: isValid ? "green" : "black" }}
            position= "end"
          >
            <Icon/>
          </MUI.InputAdornment>
        ),
      }}
    />
</MUI.Box>

)
}


