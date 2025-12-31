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

// shared ui
import SharedNavigation from "../components/shared/SharedNavigation";
import Container from "../components/shared/Container";
import Header from "../components/shared/Header";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

// utiles
import { isValid } from "../utils/validator";
import InputGroup from "../components/ui/InputGroup";

export default function SignUp() {
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
    head: t("metadata.Signup.head"),

    personal: {
      title: t("metadata.Signup.personal.title"),
      name: t("metadata.Signup.personal.name", { returnObjects: true }),
      lastName: t("metadata.Signup.personal.lastName", { returnObjects: true }),
      email: t("metadata.Signup.personal.email", { returnObjects: true }),
      phoneNum: t("metadata.Signup.personal.phoneNum", { returnObjects: true }),
      password: t("metadata.Signup.personal.password", { returnObjects: true }),
      rePassWord: t("metadata.Signup.personal.rePassword", {
        returnObjects: true,
      }),
    },

    address: {
      title: t("metadata.Signup.address.title"),
      street: t("metadata.Signup.address.street", { returnObjects: true }),
      zipCode: t("metadata.Signup.address.zipCode", { returnObjects: true }),
      optional: t("metadata.Signup.address.optional", { returnObjects: true }),
    },

    button: t("metadata.button.signup"),
  };

  // list of inputs
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
    <Container>
      <Header position={true}>
        <SharedNavigation distance={false} backTo={"/welcome"} />
      </Header>
      <div className="flex flex-col gap-2 mb-[20px] h-[70px]">
        <p>{message.head}</p>
      </div>
      <form onSubmit={handelSubmit}>
        <div
          className="flex flex-col items-center 
                    justify-center gap-4"
        >
          <div className="flex flex-col gap-2 w-[100%]">
            <p className="font-bold">{message.personal.title}</p>
            <InputGroup
              listOfInputs={personlInputs}
              message={message}
              formData={formData}
              validation={validation}
              handleChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Address:</p>
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

            <div className="flex flex-row gap-2">
              <InputGroup
                listOfInputs={addressInputs}
                message={message}
                formData={formData}
                validation={validation}
                handleChange={handleChange}
              />
            </div>
          </div>
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
        </div>
      </form>
    </Container>
  );
}
