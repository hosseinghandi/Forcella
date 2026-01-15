import { useTranslation } from "react-i18next";
// react imports
import { useContext } from "react";
import { siteContext } from "../App";

import * as MUI from "../utils/MUI"
import * as UI from "../utils/UI"


export default function Welcome() {
  const { lan, setLang, mode, setMode, colorTheme, colorText } = useContext(siteContext);
  const { t } = useTranslation();

  const messages = {
    welcome: t("metadata.welcoming.static"),
    info: t("metadata.welcoming.info", { returnObjects: true }),
  };

  const button = {
    login: t("metadata.button.login"),
    signup: t("metadata.button.signup"),
    continue: t("metadata.button.continue"),
  }
  
  return (
    <UI.SiteWrapper>
      <UI.SharedNavigation splash={true}/>
      <MUI.Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
            {messages.welcome}
          </MUI.Typography>

          <UI.BubbleToggel dataList={messages.info} colorTheme={colorTheme} />
        </MUI.Box>

        {/* Buttons */}
        <MUI.Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "40px",
            width: "100%",
          }}
        >
          <UI.ButtonBasic
            title={button.login}
            to="/login"
            color="white"
            disable={false}
          />
          <UI.ButtonBasic
            title={button.signup}
            to="/signup"
            color="white"
            disable={false}
          />
          <UI.ButtonBasic
            title={button.continue}
            to="/applayout/menu"
            color="white"
            disable={false}
          />
        </MUI.Box>
      </MUI.Box>
    </UI.SiteWrapper>
  );
}
