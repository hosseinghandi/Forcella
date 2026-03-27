// role : Sign up page
import useRequestText from "../hook/useRequestText";
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
import { useForm } from "react-hook-form";
import useAddUser from "../hook/useAddUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: "",
      email: "",
      optional: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      password: "",
      phone: "",
      zipcode: "",
    },
  });

  const data = useRequestText("signup", getValues);
  const text = data.text;
  const personalInputs = data.personalInputs;
  const fullWidthInput = [data.addressInputs[0]];
  const halfWidthInputs = data.addressInputs.slice(1);
  const addUser = useAddUser();

  // a fake welcoming process
  const onsubmit = (formData) => {
    setIsLoading(true);
    setTimeout(() => {
      addUser(formData);
      setIsLoading(false);
      navigate("/menu");
    }, 2000);
  };

  return !isLoading ? (
    <>
      <UI.SharedNavigation variant="signup" />
      <UI.LayoutHandeler
        style={{
          marginTop: { xs: "5vh", lg: "10vh", xl: "5vh" },
          width: "100%",
          height: { xs: "fit-content" },
        }}
      >
        <MUI.Box
          component={"form"}
          onSubmit={handleSubmit(onsubmit)}
          sx={{
            width: {
              xs: "100%",
              special: "clamp(43.75rem, 65.41vi + 1.89rem, 100rem)",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* main flex wrapper*/}
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "column" },
              gap: "calc(var(--GlobalgapOfInputs)*2)",
              width: "100%",
            }}
          >
            <MUI.Typography variant="textNormal">
              {text.subtitle}
            </MUI.Typography>
            {/* personal and address wrapper */}
            <MUI.Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                // side gap
                gap: "calc(var(--GlobalgapOfInputs) * 10)",
              }}
            >
              {/* personal wrapper */}
              <MUI.Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--GlobalgapOfInputs)",
                  width: { xs: "100%", lg: "50%" },
                }}
              >
                <MUI.Typography
                  variant="textNormal"
                  sx={{ fontWeight: "bold" }}
                >
                  {text.sections.personalInfo.title}
                </MUI.Typography>
                <UI.InputControllerGroup
                  inputs={personalInputs}
                  control={control}
                  errors={errors}
                />
              </MUI.Box>
              {/*  address wrapper */}
              <MUI.Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--GlobalgapOfInputs)",
                  width: { xs: "100%", lg: "50%" },
                }}
              >
                <MUI.Typography
                  variant="textNormal"
                  sx={{ fontWeight: "bold" }}
                >
                  {text.sections.address.title}
                </MUI.Typography>
                <UI.InputControllerGroup
                  inputs={fullWidthInput}
                  control={control}
                  errors={errors}
                />
                <MUI.Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "var(--GlobalgapOfInputs)",
                  }}
                >
                  <UI.InputControllerGroup
                    inputs={halfWidthInputs}
                    control={control}
                    errors={errors}
                  />
                </MUI.Box>
                <MUI.Box sx={{ marginTop: "calc(var(--textLabel) + 10px)" }}>
                  <UI.ButtonBasic
                    type="submit"
                    title={text.button.signup}
                    aria-label="Sign up in application"
                  />
                </MUI.Box>
              </MUI.Box>
            </MUI.Box>
          </MUI.Box>
        </MUI.Box>
      </UI.LayoutHandeler>
    </>
  ) : (
    <UI.WelcomingToUser
      subMessage={text.LandingPage.subMessage}
      mainMessage={text.LandingPage.mainMessage}
      greeting={text.LandingPage.greeting}
    />
  );
}
