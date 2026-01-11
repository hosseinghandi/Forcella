import { useTranslation } from "react-i18next";
// react imports
import { useContext } from "react";
import { siteContext } from "../App";

// ui compoenents
import Logo from "../components/shared/Logo";
import SwitchLabels from "../components/ui/SwitchLabels";
import BubbleToggel from "../components/ui/BubbleToggel";
import Button from "../components/ui/Button";
import ToggleTheme from "../components/ui/ToggleTheme";
import SiteWrapper from "../components/shared/SiteWrapper";
import Header from "../components/shared/Header";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Welcome() {
  const { lan, setLang, mode, setMode, colorTheme } = useContext(siteContext);
  const { t } = useTranslation();

  const messages = {
    welcome: t("metadata.welcoming.static"),
    info: t("metadata.welcoming.info", { returnObjects: true }),
  };


  const button = {
    login: t("metadata.button.login"),
    signup: t("metadata.button.signup"),
    continue: t("metadata.button.continue"),
  };

  return (
    <SiteWrapper>
      {/* page wrapper  */}
      <Header position={false}>
        <Logo color={colorTheme} />
        <SwitchLabels value={lan} setValue={setLang} mode={mode} />
        <ToggleTheme value={mode} setValue={setMode} colorTheme={colorTheme} />
      </Header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Text section */}
        <Box
          sx={{
            textAlign: "left",
            width: "100%",
          }}
        >
          <Typography
            variant="titleWelcoming"
          >
            {messages.welcome}
          </Typography>

          <BubbleToggel dataList={messages.info} colorTheme={colorTheme} />
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "40px",
            width: "100%",
          }}
        >
          <Button
            title={button.login}
            to="/login"
            color="white"
            disable={false}
          />
          <Button
            title={button.signup}
            to="/signup"
            color="white"
            disable={false}
          />
          <Button
            title={button.continue}
            to="/applayout/menu"
            color="white"
            disable={false}
          />
        </Box>
      </Box>
    </SiteWrapper>
  );
}
