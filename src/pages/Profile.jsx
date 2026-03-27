// role:Profile page
import { useState } from "react";
import * as UI from "../barrels/UI";
import * as MUI from "../barrels/MUI";
import { useUserData } from "../providers/UserData";
import useRequestText from "../hook/useRequestText";

export default function Profile() {
  const { fetchedUserdata } = useUserData();
  const [editMode, setEditMode] = useState(false);
  const { text } = useRequestText("profile");

  const capitalize = (name = "") =>
    name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <UI.SharedNavigation
        variant="profile"
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <MUI.Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >

        <MUI.Typography variant="welcomingToUserNormal">
          {`${text.greeting}, `}
          <MUI.Typography variant="titleWelcoming">
            {capitalize(fetchedUserdata?.personalInfo?.firstName)}
          </MUI.Typography>
        </MUI.Typography>
        {editMode && (
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "var(--GlobalgapOfGrids)",
              alignItems: "center",
            }}
          >
            <UI.SwitchLanguage />
            <UI.ToggleTheme />
          </MUI.Box>
        )}
      </MUI.Box>
      <UI.LayoutHandeler
        style={{
          marginTop: { xs: "5vw", special: "3vw" },
          width: "100%",
          height: "fit-content",
        }}
      >
        <UI.UserInfoHolder
          userdata={fetchedUserdata}
          setEditMode={setEditMode}
          editMode={editMode}
        />
      </UI.LayoutHandeler>
    </>
  );
}
