// *role :  on reuqest make input *
// material ui elements

import * as MUI from "../../barrels/MUI"
import * as Icon from "../../barrels/Icons"
import {useTheme} from "../../providers/Theme"
export default function InputBasic({
  name,
  label,
  type,
  placeholder,
  Icon,
  error,
  isValid,
  background,
  defaultValueInput,
  editMode,
  onChange,
}) {
  
return (
<MUI.Box sx={{width:"100%"}}>
  <MUI.Typography 
  variant="textLabel"
  sx={{width:"100%", alignSelf:"left"}}
  component={"label"} htmlFor={name}>{label}</MUI.Typography>
    <MUI.TextField
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      hiddenLabel
      variant="outlined"
      sx={{
      width: "100%",
      "& .MuiOutlinedInput-root": {
        background:"var(--white-text)",
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



// return (
  //   <MUI.TextField
  //     required
  //     label={label && label}
  //     name={name}
  //     placeholder={inputProps.placeholder}
  //     value={defaultValueInput && defaultValueInput}
  //     fullWidth
  //     maxRows={4}
  //     onChange={(event) => onChange(event)}
  //     InputLabelProps={
  //       {shrink:false}
  //     }
  //     multiline
  //     InputProps={{
  //       endAdornment: (
  //         <MUI.InputAdornment
  //           sx={{ color: isValid ? "green" : "black" }}
  //           position= "end"
  //         >
  //           {icon}
  //         </MUI.InputAdornment>
  //       ),
  //     }}
  //     sx={{
  //       "& .MuiInputLabel-root": {
  //         width: "100%",
  //         paddingLeft: 2,
  //         top: "50%",
  //         transform: "translateY(-50%)",
  //         ...(editMode && {paddingLeft: 6}),
  //         color: colors.text 
          
  //       },
  //       "& .MuiInputLabel-shrink": {
  //         top: "0",
  //         fontSize: "1rem",
  //       },
  //       "& .MuiOutlinedInput-root": {
  //         display:"flex",
  //         backgroundColor: background ? background : "white",
  //         borderRadius: "25px",
  //         width:"100%",
  //         height: "var(--inputSize)",
  //         ...(editMode && {flexDirection:"row-reverse"})
  //       },
  //       "& .MuiOutlinedInput-input": {
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       },
  //       ...(!NoBorder && {
  //         "& .MuiOutlinedInput-notchedOutline": {
  //           borderWidth: 1,
  //           borderColor: "black",
  //         },
  //         "&:hover .MuiOutlinedInput-notchedOutline": {
  //           borderWidth: 1,
  //           borderColor: "black",
  //         },
  //         "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
  //           {
  //             borderWidth: 1,
  //             borderColor: "black",
  //           },
  //       }),
  //     }}
  //   />
  // );



  

  //  <MUI.TextField
  //       required
  //         label={"password"}
  //         name={name}
  //         placeholder={inputProps.placeholder}
  //         value={defaultValueInput && defaultValueInput}
  //         fullWidth
  //         sx={{
  //             width: "100%",
  //             "& .MuiInputLabel-root": {
  //               width: "100%",
  //               paddingLeft: 2,
  //               fontSize:"20px",
  //               ...(editMode && {paddingLeft: 6}),
  //               color: colors.text 
                
  //             },
  //             "& .MuiOutlinedInput-root": {
  //               borderRadius: "var(--radius)", // ✅ border radius goes here
  //             },
  //             "& .MuiOutlinedInput-notchedOutline": {
  //               fontSize:"20px",
  //               borderRadius: "var(--radius)", // ✅ important for outline shape
  //             },
  //           }}
  //         slotProps={{
  //           input: {
  //             startAdornment: 
  //             <MUI.InputAdornment 
  //             position="start">
  //               {label}</MUI.InputAdornment>,
  //           },
  //         }}
  //       />