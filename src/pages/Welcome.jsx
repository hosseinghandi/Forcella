import { useTranslation } from "react-i18next";
// react imports

import * as MUI from "../barrels/MUI"
import * as UI from "../barrels/UI"

export default function Welcome() {
  const { t } = useTranslation();
  return (
    <>
      <UI.SharedNavigation varient={"welcoming"} photobaner={true}/>
      <MUI.Box sx={{
        width:"100%", 
        height:{lg:"80vh"},
        display:"flex", 
        justifyContent:{
          xs: "center",
          md: "flex-end"
          }}}>
      <MUI.Box
        sx={{
          px : {
            sm: "var(--welcome-content-padding-tablet)",
          },
          width:{
            lg: "65%",
          },
          
          
          display: "flex",
          flexDirection: "column",
          gap:"var(--infoItemHolderGap)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Text section */}
        <MUI.Box
          sx={{
            textAlign: "left",
            width: "100%",

          }}
        >
          <MUI.Typography
            variant="titleWelcoming"
          >
            {t("pages.welcoming.title")}
          </MUI.Typography>

          <UI.BubbleToggel 
          dataList={
            t("pages.welcoming.content.highlights", 
            { returnObjects: true })} />
        </MUI.Box>

        {/* Buttons */}
        <MUI.Box
          sx={{
            display: "flex",
            flexDirection: 
            { xs: "column",
              sm: "column",
              md:"row"
            },
            gap: "10px",
            width: "100%",
          }}
        >
          <UI.ButtonBasic
            title={t("ui.buttons.login")}
            to="/login"
            color="white"
            disabled={false}
          />
          <UI.ButtonBasic
            title={t("ui.buttons.signup")}
            to="/signup"
            color="white"
            disabled={false}
          />
          
        </MUI.Box>
      </MUI.Box>
      </MUI.Box>
    </>
  );
}
