// role : takes the user inputs and find it in user database

import useRequestText from "../hook/useRequestText";
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
import { useState } from "react";
import { useTheme } from "../providers/Theme";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../providers/UserData";

// utiles
// import {isValid} from "../utils/validator";

export default function Login() {
  // required context to render ui elements
  const navigate = useNavigate()
  const { colors } = useTheme();
  // text to render
  const data =  useRequestText("login")
  const {fetchedUserdata} = useUserData()
  const text = data.text
  const listOfInputs = data.inputsList
  const [show, setshow] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [loading, setIsLoading] = useState(false)

   const {
    control,
    // register,
    handleSubmit,
    formState: { errors},
  } = useForm({
      defaultValues: Object.fromEntries(data.inputsList.map( input => [input.name, ""]))
  })

  const onSubmit = () => {
    setshow(true)
  }
  
  const capitlize = (name) => name.charAt(0).toUpperCase() + name.slice(1)

  return false ? (
    <>
      <UI.SharedNavigation varient={"login"}/>
      <UI.LayoutHandeler 
      style={ {
                marginTop:{xs:"20vh", lg:"unset"},
                width:"100%", 
                height:{xs:"50vh" ,lg:"85vh"},
                }}
      >
        <MUI.Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--GlobalgapOfItems)", 
            width: {xs:"100%", 
              sm:"clamp(28.13rem, 13.89vi + 22.92rem, 43.75rem)"},
            }}
        >
            <MUI.Box sx={{minHeight:"60px", display:"flex", flexDirection:"column", gap:"calc(var(--GlobalgapOfItems)/2)"}}>
              <MUI.Typography variant="textNormal">{text.subtitle}</MUI.Typography>
              { notFound && <UI.Error message={text.error}/>}
            </MUI.Box>
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: { xs: "center", lg: "flex-start" },
              gap: "var(--GlobalgapOfInputs)",
            }}
          >
          <UI.InputControllerGroup
              inputs={listOfInputs}
              control={control}
              errors={errors}
            />

          </MUI.Box>
          <MUI.Link
           href=""
            sx={{
              color: colors.text,
              width: "100%",
              textAlign: "left",
            }}
          >
            {text.forget}
          </MUI.Link>

          <UI.ConfirmationDialog 
            onClose={!show}
            open={show}
            actOnPositive={() => 
             {  setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false)
                    navigate("/menu")
                }, 2000 ) 
             }
             
            }
            actOnNegative={() => {
              setshow(!show) 
              setNotFound(true)
            }}
            message={text.userCommunication}
            positiveBtnName={text.button.goToMenu}
            negativeBtnName={text.button.stayHere}
          
          />
          <UI.ButtonBasic
            type="submit"
            title={text.button.login}
            color={"white"}
          />
        </MUI.Box>
      </UI.LayoutHandeler>
    </>
  ) : (
      <UI.WelcomingToUser 
          greeting={text.LandingPage.greeting}
          mainMessage={text.LandingPage.message}
          subMessage={text.LandingPage.subMessage}
          userName={capitlize(fetchedUserdata.personalInfo.firstName)}
      />
    )
}



// // validator
// const validation = useMemo( () => {
//   const validation = {};
//   for (const [key, value] of Object.entries(formData)) {
//     validation[key] = isValid(key,value)};
//   return {validation}
// }, [formData]);
