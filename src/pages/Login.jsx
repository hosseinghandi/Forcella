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
      <UI.SharedNavigation varient={"navigation"} photobaner={true} />
      <UI.LayoutType1>
        <MUI.FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--GlobalgapOfItems)",
            width: { xs: "100%", lg: "60%" },
          }}
        >
          <UI.Error message={"this is a placeholder for error"} />
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
            to={"/applayout/menu"}
            color={"white"}
          />
        </MUI.FormControl>
      </UI.LayoutType1>
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
