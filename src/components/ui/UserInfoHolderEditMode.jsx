// role : takes the user inputs and find it in user database

// react imports
import { useContext, useState, useMemo } from "react";
import { SiteContext } from "../../App";
import { useTranslation } from "react-i18next";

import * as MUI from "../../utils/MUI";
import * as UI from "../../utils/UI";
import * as helpers from "../../utils/helpers";
export default function UserInfoHolderEditMode({
  userdata,
  setUser,
  setEditMode,
}) {
  const dataPrepration = helpers.requestData(userdata,"profile")
  const [formData, setFormData] = useState(userdata);

  const inputs = (items) =>
    items.map(([data, Icon, name, section], index) => (
      <UI.InputBasic
        key={`editItem_${index}`}
        name={name}
        type="text"
        editMode={true}
        defaultValueInput={data}
        icon={<Icon />}
        placeholder={name}
        // isValid={isValid}
        onChange={helpers.handleChange((section ? section : ""), setFormData)}
      />
    ));

  return (
    <>
      <MUI.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "var(--gapOfItems)",
        }}
      >
        <MUI.FormControl>
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--gapOfItems)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {inputs(dataPrepration.slice(0,-2))}
            {/* {switchers(dataPrepration.slice(-2))} */}

            <UI.ButtonBasic
              task={() => {
                helpers.handelSubmit("personalInfo",formData, setUser)
                setEditMode((prev) => !prev);
              }}
              type="submit"
              title={"Submit"}
              // to={ "/signup" }
              color={"white"}
            />
          </MUI.Box>
        </MUI.FormControl>
      </MUI.Box>
    </>
  );
}
