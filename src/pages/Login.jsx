// role : Login page
import useRequestText from "../hook/useRequestText";
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
import { useState } from "react";
import { useTheme } from "../providers/Theme";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../providers/UserData";
import useUpdateUser from "../hook/useUserUpdate";

export default function Login() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const { text, inputsList } = useRequestText("login");
  const { fetchedUserdata } = useUserData();
  const [notFound, setNotFound] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const {setLoginUser} = useUpdateUser()
  const isUserExist = (insertedEmail) => {
    return fetchedUserdata?.personalInfo?.email === insertedEmail 
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: Object.fromEntries(
      inputsList.map((input) => [input.name, ""]),
    ),
  });

  const onSubmit = (fromData) => {
    const exist = isUserExist(fromData.email)
    if (exist) {
      setLoginUser(true)
      setIsLoading(true);
        setTimeout(() => {
          navigate("/menu");
        }, 2000);
    } else {
      setNotFound(true)
    }
  };


  const capitalize = (name = "") =>
    name.charAt(0).toUpperCase() + name.slice(1);

  return !loading ? (
    <>
      <UI.SharedNavigation variant="login" />
      <UI.LayoutHandeler
        style={{
          marginTop: { xs: "20vh", lg: "unset" },
          width: "100%",
          height: { xs: "50vh", lg: "85vh" },
        }}
      >
        <MUI.Box
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--GlobalgapOfItems)",
            width: {
              xs: "100%",
              sm: "clamp(28.13rem, 13.89vi + 22.92rem, 43.75rem)",
            },
          }}
        >
          <MUI.Box
            role="status"
            aria-live="polite"
            sx={{
              minHeight: "60px",
              display: "flex",
              flexDirection: "column",
              gap: "calc(var(--GlobalgapOfItems)/2)",
            }}
          >
            <MUI.Typography component={"p"} variant="textNormal">
              {text.subtitle}
            </MUI.Typography>
            {notFound && <UI.Error message={text.error} />}
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
              inputs={inputsList}
              control={control}
              errors={errors}
            />
          </MUI.Box>
          <MUI.Link
            aria-label="Forgot password"
            href="/login"
            sx={{
              color: colors.text,
              width: "100%",
              textAlign: "left",
            }}
          >
            {text.forget}
          </MUI.Link>
          <UI.ButtonBasic
            type="submit"
            title={text.button.login}
            aria-label="login to the app"
          />
        </MUI.Box>
      </UI.LayoutHandeler>
    </>
  ) : (
    <UI.WelcomingToUser
      greeting={text.LandingPage.greeting}
      mainMessage={text.LandingPage.message}
      subMessage={text.LandingPage.subMessage}
      userName={capitalize(fetchedUserdata?.personalInfo?.firstName)}
    />
  );
}
