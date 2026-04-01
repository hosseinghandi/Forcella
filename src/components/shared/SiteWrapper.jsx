// *role: act as sitewrapper and rendered of background
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import { useTheme } from "../../providers/Theme";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function SiteWrapper({ children }) {
  const { colors } = useTheme();
  const {t} = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t("app.title")}</title>
        <meta name="description" content={t("app.description")} />
      </Helmet>
      <MUI.Box
        component="main"
        sx={{
          py: {
            xs: "var(--spacing-global-padding-y-mobile)",
            md: "var(--spacing-global-padding-y-tablet)",
            special:"var(--spacing-global-padding-y-desktop)",
          },
          px: {
            xs: "var(--spacing-global-padding-x-mobile)",
            md: "var(--spacing-global-padding-x-tablet)",
            special: "var(--spacing-global-padding-x-desktop)",
          },
          backgroundColor: colors.theme,
          color: colors.text,
          minHeight: "100vh",
          position: "relative",
          zIndex: 0,
        }}
      >
        <UI.PhotoBaner />
        <MUI.Box sx={{ position: "relative", zIndex: 999 }}>{children}</MUI.Box>
      </MUI.Box>
    </>
  );
}
