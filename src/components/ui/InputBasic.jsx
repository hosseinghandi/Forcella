// *role : create Input base on props
//  note: the inputs then are used in the
// react form hook that should be used by "controll"
import * as Icons from "../../barrels/Icons";
import * as MUI from "../../barrels/MUI";
export default function InputBasic({
  name,
  label,
  type,
  placeholder,
  Icon,
  value,
  onChange,
  inputRef,
  error,
}) {
  return (
    <MUI.Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <MUI.Typography
        variant="textLabel"
        sx={{ width: "100%", alignSelf: "flex-start" }}
        component={"label"}
        htmlFor={name}
      >
        {label}
      </MUI.Typography>
      <MUI.TextField
        error={!!error}
        aria-invalid={!!error}
        id={name}
        aria-describedby={error ? `${name}-error` : undefined}
        helperText={error?.message}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        inputRef={inputRef}
        variant="outlined"
        FormHelperTextProps={{
          sx: {
            fontSize: "var(--textLabel)",
          },
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
            background: "var(--white-bg)",
            height: "var(--buttonAndInputSize)",
            borderRadius: "25px",
            "& fieldset": {
              color: "black",
              padding: "0",
              borderRadius: "25px",
            },
            "& .MuiOutlinedInput-input::placeholder": {
              opacity: 0.6,
            },
            "&:hover fieldset": {
              border: "1px solid var(--orange)",
            },

            "&.Mui-focused fieldset": {
              border: "1px solid var(--orange)",
            },

            "& input": {
              paddingX: 3,
              height: "100%",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <MUI.InputAdornment position="end">
              {/* fallback to icon circle if not exist */}
              {Icon ? <Icon /> : <Icons.Circle />}
            </MUI.InputAdornment>
          ),
        }}
      />
    </MUI.Box>
  );
}
