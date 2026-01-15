// role : takes the user data and save it to the user data json

// react imports
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import * as Icon from "../utils/Icons"
import * as MUI from "../utils/MUI"
import * as UI from "../utils/UI"

// utiles
import { isValid } from "../utils/validator";

// import context
import {useContext} from "react"
import { siteContext } from "../App";

export default function Signup() {
  const {colorTheme} = useContext(siteContext)
  // form state to save submitted data
  const [formData, setFormData] = useState({
    personalData: {
      name: "",
      lastName: "",
      email: "",
      phoneNum: "",
      password: "",
      rePassWord: "",
    },
    address: {
      address: "",
      zipCode: "",
      optional: "",
    },
  });

  // validation object
  const validation = useMemo(() => {
    const personal = {};
    const address = {};

    for (const [key, value] of Object.entries(formData.personalData)) {
      if (key === "rePassWord") continue;
      personal[key] = isValid(key, value);
    }
    for (const [key, value] of Object.entries(formData.address)) {
      address[key] = isValid(key, value);
    }

    personal.rePassWord =
      personal.password &&
      formData.personalData.password === formData.personalData.rePassWord;

    return { personal, address };
  }, [formData]);

  // button disabled
  const isFormValid =
    Object.values(validation.personal).every(Boolean) &&
    Object.values(validation.address).every(Boolean);

  // form handeler
  const handleChange = (section) => (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const handelSubmit = (e) => {
    console.log("the form is submitted");
    console.log(formData);
    e.preventDefault();
  };

  // text to render
  const { t } = useTranslation();
  const message = {
    head: t("metadata.signup.head"),

    personal: {
      title: t("metadata.signup.personal.title"),
      name: t("metadata.signup.personal.name", { returnObjects: true }),
      lastName: t("metadata.signup.personal.lastName", { returnObjects: true }),
      email: t("metadata.signup.personal.email", { returnObjects: true }),
      phoneNum: t("metadata.signup.personal.phoneNum", { returnObjects: true }),
      password: t("metadata.signup.personal.password", { returnObjects: true }),
      rePassWord: t("metadata.signup.personal.rePassword", {
        returnObjects: true,
      }),
    },

    address: {
      title: t("metadata.signup.address.title"),
      street: t("metadata.signup.address.street", { returnObjects: true }),
      zipCode: t("metadata.signup.address.zipCode", { returnObjects: true }),
      optional: t("metadata.signup.address.optional", { returnObjects: true }),
    },

    button: t("metadata.button.signup"),
  };

  const personlInputs = [
    ["name", <Icon.Person_outlined />, "text", "personal"],
    ["lastName", <Icon.Person_outlined />, "text", "personal"],
    ["email", <Icon.Email />, "email", "personal"],
    ["phoneNum", <Icon.Phone />, "tel", "personal"],
    ["password", <Icon.Key />, "password", "personal"],
    ["rePassWord", <Icon.Key />, "password", "personal"],
  ];
  const addressInputs = [
    ["zipCode", <Icon.Mailbox />, "number", "address"],
    ["optional", <Icon.Location />, "text", "address"],
  ];

  return (
    <UI.SiteWrapper>
      <UI.SharedNavigation navigation={true} position={"top"}/>
      <MUI.Box sx={{display: "flex", flexDirection: "column", gap: 2, marginBottom:4, height:10}}>
        <MUI.Typography variant="textHead" >{message.head}</MUI.Typography >
      
      <MUI.FormControl onSubmit={handelSubmit}>
        <MUI.Box sx={{display: "flex", flexDirection: "column", gap: 2,alignItems :"center", justifyContent: "center"}}
        >
          <MUI.Box sx={{display: "flex", flexDirection: "column", gap: 2,width: "100%"}}>
            <MUI.Typography variant="titleBold">{message.personal.title}</MUI.Typography>
            <UI.InputGroup
              listOfInputs={personlInputs}
              message={message}
              formData={formData}
              validation={validation}
              handleChange={handleChange}
            />
          </MUI.Box>
          <MUI.Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <MUI.Typography variant="titleBold">Address:</MUI.Typography>
            <UI.InputBasic
              label={message.address.street.Label}
              name="address"
              type="text"
              icon={<Icon.Location />}
              value={formData.address.address}
              isValid={validation.address.address}
              onChange={handleChange("address")}
              placeholder={message.address.street.placeHolder}
            />

            <MUI.Box sx={{display: "flex", flexDirection: "row", gap: 2}}>
              <UI.InputGroup
                listOfInputs={addressInputs}
                message={message}
                formData={formData}
                validation={validation}
                handleChange={handleChange}
              />
            </MUI.Box>
          </MUI.Box>
            <UI.ButtonBasic
              type="submit"
              title={"keep goining"}
              to={"/applayout/menu"}
              color={"white"}
              disabled={false}
            />
        </MUI.Box>
      </MUI.FormControl>
      </MUI.Box>
    </UI.SiteWrapper>
  );
}
