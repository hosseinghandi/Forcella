// role: announce that the path does not exist, and search for the nearest page to navigate the user
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import { useTranslation } from "react-i18next";
export default function E404({ pathname }) {
  const { t } = useTranslation();
  const text = {
    title: t("ui.error404.title"),
    mainMessage: t("ui.error404.mainMessage"),
    subMessage: t("ui.error404.subMessage"),
    goto: t("ui.error404.buttonMessage.goto"),
    refresh: t("ui.error404.buttonMessage.refresh"),
  };
  // check where the user is lost and guide them to the nearest page
  const checkpath = (p) => {
    const checkPath = [
      "/welcome",
      "/login",
      "/signup",
      "/menu",
      "/profile",
      "/cart",
    ];
    const path = checkPath?.find((page) => p.includes(page));
    return (
      <UI.ButtonBasic
        title={path ? `${text.goto} ${path?.split("/")[1]}` : text.refresh}
        to={path ?? "/"}
        shrink={true}
      />
    );
  };

  return (
    <>
      <MUI.Box
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <MUI.Box
        role="status"
          sx={{
            maxWidth: "50%",
            display: "flex",
            gap: "var(--GlobalgapOfGrids)",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MUI.Typography variant="Error404">{text.title}</MUI.Typography>
          <MUI.Typography variant="textNormalTitles">
            {text.mainMessage}
          </MUI.Typography>
          <MUI.Typography variant="textNormal">
            {text.subMessage}
          </MUI.Typography>
          {checkpath(pathname)}
        </MUI.Box>
      </MUI.Box>
    </>
  );
}
