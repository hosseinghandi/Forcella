// *role: help user to navigate through app*
import { Link } from "react-router-dom";
import * as MUI from "../../../barrels/MUI"
import * as requests from "../../../barrels/requests"
import { useTheme } from "../../../providers/Theme"

export default function NavBar({ current, pizzaLikedNum, pizzaInCartNum }) {
  const pathList = requests.requestList("nav_path_list")
  const { mode } = useTheme()

  const navBarSetup = {
    dark: {
      background: "var(--orange)",
      icon: {
        active: "var(--black-bg)",
        inactive: "var(--white-bg)",
        hover: "var(--black-bg)",
      },
      badge: {
        active: { background: "var(--white-bg)", text: "var(--black-bg)"},
        inactive: { background: "var(--black-bg)", border: "none",  text:"var(--white-bg)" },
        hover: { background: "var(--white-bg)", text: "var(--black-bg)" },
      },
    },
    light: {
      background: "var(--black-bg)",
      icon: {
        active: "var(--orange)",
        inactive: "var(--white-bg)",
        hover: "var(--orange)",
      },
      badge: {
        active: { background: "var(--white-bg)", border: "none", text: "var(--black-bg)" },
        inactive: { background: "var(--orange)", border: "none", text:"var(--white-bg)" },
        hover: { background: "var(--white-bg)", text: "var(--black-bg)" },
      },
    },
  }

  const theme = mode ? navBarSetup.dark : navBarSetup.light
  
  const isActivePage = (page) => 
  page === "cart" ? 
  current.split("/").at(-1) === "payment" || current.split("/").at(-1) === page :  
  current.split("/").at(-1) === page 

  const isParentPage = (page) => !current.includes("wish") && current.includes(page)
  const showBadge = (page) =>
    (page.includes("cart") && pizzaInCartNum !== 0) ||
    (page.includes("wish") && pizzaLikedNum !== 0)

  return (
    <MUI.Box
      sx={{
        height: "var(--filterAndNavSize)",
        position: { xs: "fixed", special: "unset", lg: "unset" },
        left: { xs: "0" },
        bottom: { xs: "20px" },
        width: "100%",
        px: {
          xs: "var(--spacing-global-padding-x-mobile)",
          md: "var(--spacing-global-padding-x-tablet)",
          special: "unset"
        },
        zIndex: 999,
      }}
    >
      <MUI.Box
        component="nav"
        role="navigation"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: "100%",
          borderRadius: "25px",
          backgroundColor: theme.background,
        }}
      >
        {pathList.map(({ link, page, Icon }) => {
          const active = isActivePage(page)
          const parent = isParentPage(page)

          const iconColor = active || parent ? theme.icon.active : theme.icon.inactive
          const badgeSetup = active ? theme.badge.active : theme.badge.inactive
          return (
            <Link to={link} key={page} replace>
              <MUI.Box
                sx={{
                  color: iconColor,
                  transform: active ? "scale(1.25)" : parent ? "scale(1.3)" : "scale(1)",
                  transition: "all 0.25s ease-in-out",
                  "&:hover": {
                    ...(!active && { scale: 1.3 }),
                    color: theme.icon.hover,
                    "& .MuiBadge-badge": {
                      backgroundColor: theme.badge.hover.background,
                      color:  theme.badge.hover.text,
                    }
                  },
                }}
              >
                {showBadge(page) ? (
                  <MUI.Badge
                    showZero={false}
                    // anchorOrigin={{ vertical: "top", horizontal: "left" }}               
                    badgeContent={
                      page.includes("cart") ? pizzaInCartNum :
                      page.includes("wish") ? pizzaLikedNum : null
                    }
                    sx={{
                      "& .MuiBadge-badge": {
                        right: "60%",
                        bottom:"100%",
                        backgroundColor: badgeSetup.background,
                        color: badgeSetup.text,
                        transform: active ? "scale(0.7)" : "scale(0.8)",

                      },
                    }}
                  >
                    <Icon sx={{
                      width: "var(--iconsize)",
                      height: "var(--iconsize)",
                    }} />
                  </MUI.Badge>
                ) : (
                  <Icon sx={{
                    width: "var(--iconsize)",
                    height: "var(--iconsize)",
                  }} />
                )}
              </MUI.Box>
            </Link>
          )
        })}
      </MUI.Box>
    </MUI.Box>
  )
}