// role : takes the user data and save it to the user data json

// react imports
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
// ui elements
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
// shared ui
import SharedNavigation from "../components/shared/SharedNavigation";
import SiteWrapper from "../components/shared/SiteWrapper";
import Header from "../components/shared/Header";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

// utiles
import { isValid } from "../utils/validator";
import InputGroup from "../components/ui/InputGroup";

export default function Signup() {
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

  // list of inputs
  // [Field,icon, type, section]
  const personlInputs = [
    ["name", <PersonOutlinedIcon />, "text", "personal"],
    ["lastName", <PersonOutlinedIcon />, "text", "personal"],
    ["email", <EmailOutlinedIcon />, "email", "personal"],
    ["phoneNum", <PhoneIphoneOutlinedIcon />, "tel", "personal"],
    ["password", <KeyOutlinedIcon />, "password", "personal"],
    ["rePassWord", <KeyOutlinedIcon />, "password", "personal"],
  ];
  const addressInputs = [
    ["zipCode", <MarkunreadMailboxOutlinedIcon />, "number", "address"],
    ["optional", <LocationOnOutlinedIcon />, "text", "address"],
  ];

  return (
    <SiteWrapper>
      <Header position={true}>
        <SharedNavigation distance={false} backTo={"/welcome"} />
      </Header>
      <Box sx={{display: "flex", flexDirection: "column", gap: 2, marginBottom:4, height:10}}>
        <Typography variant="textHead" >{message.head}</Typography >
      
      <FormControl onSubmit={handelSubmit}>
        <Box sx={{display: "flex", flexDirection: "column", gap: 2,alignItems :"center", justifyContent: "center"}}
        >
          <Box sx={{display: "flex", flexDirection: "column", gap: 2,width: "100%"}}>
            <Typography variant="titleBold">{message.personal.title}</Typography>
            <InputGroup
              listOfInputs={personlInputs}
              message={message}
              formData={formData}
              validation={validation}
              handleChange={handleChange}
            />
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
            <Typography variant="titleBold">Address:</Typography>
            <Input
              label={message.address.street.Label}
              name="address"
              type="text"
              icon={<LocationOnOutlinedIcon />}
              value={formData.address.address}
              isValid={validation.address.address}
              onChange={handleChange("address")}
              placeholder={message.address.street.placeHolder}
            />

            <Box sx={{display: "flex", flexDirection: "row", gap: 2}}>
              <InputGroup
                listOfInputs={addressInputs}
                message={message}
                formData={formData}
                validation={validation}
                handleChange={handleChange}
              />
            </Box>
          </Box>
          <div className="w-[100%] mb-10">
            {/* <Button
              type="submit"
              title={true ? "Registrati" : "Sign up"}
              to={"/applayout/menu"}
              color={"white"}
              disabled={!isFormValid}
            /> */}
            <Button
              type="submit"
              title={"keep goining"}
              to={"/applayout/menu"}
              color={"white"}
              disabled={false}
            />
          </div>
        </Box>
      </FormControl>
      </Box>
    </SiteWrapper>
  );
}
