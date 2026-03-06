// role : takes the user inputs and find it in user database

import useRequestText from "../hook/useRequestText";
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";

// import * as provider from "../barrels/providers"
import { useTheme } from "../providers/Theme";

// utiles
// import {isValid} from "../utils/validator";

export default function Login() {
  // required context to render ui elements
  const { colors } = useTheme();
  // text to render
  const data =  useRequestText("login")
  const text = data.text
  const listOfInputs = data.inputsList

  return (
    <>
      <UI.SharedNavigation varient={"login"}/>
      <UI.LayoutHandeler 
      style={ {
                marginTop:{xs:"20vh", lg:"unset"},
                width:"100%", 
                height:{xs:"50vh" ,lg:"85vh"},
                }}
      >
        <MUI.FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--GlobalgapOfItems)", 
            width: {xs:"100%", 
              sm:"clamp(28.13rem, 13.89vi + 22.92rem, 43.75rem)"},
          }}
        >
          <MUI.Typography variant="textNormal">{text.subtitle}</MUI.Typography>
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: { xs: "center", lg: "flex-start" },
              gap: "var(--GlobalgapOfInputs)",
            }}
          >
            {listOfInputs.map(({label, icon, placeholder}) => (
              <UI.InputBasic
                label={label}
                key={label}
                name={label}
                type={label}
                Icon={icon}
                placeholder={placeholder}
                // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
              />
            ))}
          </MUI.Box>
          <MUI.Typography
          variant="textNormal"
            sx={{
              color: colors.text,
              width: "100%",
              textAlign: "left",
            }}
          >
            {text.forget}
          </MUI.Typography>

          <UI.ButtonBasic
            type="submit"
            title={text.button.login}
            to={"/menu"}
            color={"white"}
            disabled={true}
          />
        </MUI.FormControl>
      </UI.LayoutHandeler>
    </>
  );
}

// //states
// const [formData, setFormData] = useState({email: "",password: ""});
// const [error, setError] = useState("");

// // validator
// const validation = useMemo( () => {
//   const validation = {};
//   for (const [key, value] of Object.entries(formData)) {
//     validation[key] = isValid(key,value)};
//   return {validation}
// }, [formData]);

// // form handeler
// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setFormData((prevFormData) =>
//       ({ ...prevFormData, [name]: value }));
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
// };
