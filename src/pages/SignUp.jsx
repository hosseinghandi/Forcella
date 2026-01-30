// role : takes theuser data and save it to the user data json

// react imports
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import * as Icon from "../barrels/Icons"
import * as MUI from "../barrels/MUI"
import * as UI from "../barrels/UI"

// utiles
import { isValid } from "../utils/validator";


export default function Signup() {
  // const {colorTheme} = useContext(SiteContext)
  // form state to save submitted data

  // const [formData, setFormData] = useState({
  //   "personalInfo": {
  //   "firstName": "Jack",
  //   "lastName": "Walton",
  //   "email": "jackiwl@gamil.com",
  //   "phone": "+339 334 159 3024",
  //   "address": {
  //         "street": "124 Maple Grove Avenue, Newyork, America",
  //         "city": "Riverton",
  //         "zipcode": "90211"
  //   }
  // }
  // });

  // // validation object
  // const validation = useMemo(() => {
  //   const personal = {};
  //   const address = {};

  //   for (const [key, value] of Object.entries(formData.personalInfo)) {
  //     if (key === "rePassWord") continue;
  //     personal[key] = isValid(key, value);
  //   }
  //   for (const [key, value] of Object.entries(formData.personalInfo.address)) {
  //     address[key] = isValid(key, value);
  //   }

  //   personal.rePassWord =
  //     personal.password &&
  //     formData.personalData.password === formData.personalData.rePassWord;

  //   return { personal, address };
  // }, [formData]);

  // // button disabled
  // const isFormValid =
  //   Object.values(validation.personal).every(Boolean) &&
  //   Object.values(validation.address).every(Boolean);

  // // form handeler
  // const handleChange = (section) => (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [section]: {
  //       ...prev[section],
  //       [name]: value,
  //     },
      
  //   }));
  // };

  // const handelSubmit = (e) => {
  //   console.log("the form is submitted");
  //   console.log(formData);
  //   e.preventDefault();
  // };

  // text to render
  const { t } = useTranslation();
  const text = {
    title: t("pages.signup.title"),
    subtitle: t("pages.signup.subtitle"),
    sections: {
      personalInfo: {
        title: t("pages.signup.form.sections.personal.title"),
        inputs: {
          firstName: {
             label: t("ui.labels.firstName"),
            placeholder: t("pages.signup.form.sections.personal.fields.firstName.placeholder"),
            error: t("pages.signup.form.sections.personal.fields.firstName.error"),
          },
          lastName: {
             label: t("ui.labels.lastName"),
            placeholder: t("pages.signup.form.sections.personal.fields.lastName.placeholder"),
            error: t("pages.signup.form.sections.personal.fields.lastName.error"),
          },
          email: {
             label: t("ui.labels.email"),
            placeholder: t("pages.signup.form.sections.personal.fields.email.placeholder"),
            error: t("pages.signup.form.sections.personal.fields.email.error"),
          },
          phone: {
             label: t("ui.labels.phone"),
            placeholder: t("pages.signup.form.sections.personal.fields.phone.placeholder"),
            error: t("pages.signup.form.sections.personal.fields.phone.error"),
          },
          password: {
            label: t("ui.labels.password"),
            placeholder: t("pages.signup.form.sections.personal.fields.password.placeholder"),
            error: t("pages.signup.form.sections.personal.fields.password.error"),
          },
          confirmPassword: {
            label: t("ui.labels.confirmPassword"),
            placeholder: t("pages.signup.form.sections.personal.fields.confirmPassword.placeholder"),
            error: t("pages.signup.form.sections.personal.fields.confirmPassword.error"),
          },
        },
      },

      address: {
        title: t("pages.signup.form.sections.address.title"),
        inputs: {
          street: {
            label: t("ui.labels.street"),
            placeholder: t("pages.signup.form.sections.address.fields.street.placeholder"),
            error: t("pages.signup.form.sections.address.fields.street.error"),
          },
          zipcode: {
            label: t("ui.labels.zipcode"),
            placeholder: t("pages.signup.form.sections.address.fields.zipcode.placeholder"),
            error: t("pages.signup.form.sections.address.fields.zipcode.error"),
          },
          optional: {
            label: t("ui.labels.optional"),
            placeholder: t("pages.signup.form.sections.address.fields.optional.placeholder"),
          },
        },
      },
    },
    button:{
      signup:t("ui.buttons.signup")
    }
  };

  const personlInputs = [
    [text.sections.personalInfo.inputs.firstName.label, Icon.Person_outlined , text.sections.personalInfo.inputs.firstName.placeholder],
    [text.sections.personalInfo.inputs.lastName.label, Icon.Person_outlined , text.sections.personalInfo.inputs.lastName.placeholder],
    [text.sections.personalInfo.inputs.email.label, Icon.Email , text.sections.personalInfo.inputs.email.placeholder],
    [text.sections.personalInfo.inputs.phone.label, Icon.Phone , text.sections.personalInfo.inputs.phone.placeholder],
    [text.sections.personalInfo.inputs.password.label, Icon.Key , text.sections.personalInfo.inputs.password.placeholder],
    [text.sections.personalInfo.inputs.confirmPassword.label, Icon.Key , text.sections.personalInfo.inputs.confirmPassword.placeholder],
  ];

  const addressInputsFull = [
    [text.sections.address.inputs.street.label, Icon.Location , text.sections.address.inputs.street.placeholder],
  ];

  const addressInputsHalf = [
    [text.sections.address.inputs.zipcode.label, Icon.Mailbox , text.sections.address.inputs.zipcode.placeholder],
    [text.sections.address.inputs.optional.label, Icon.Location , text.sections.address.inputs.optional.placeholder],
  ]

  return (
    <>
      <UI.SharedNavigation varient={"navigation"} position={"top"}  photobaner={true}/>
      <MUI.Typography variant="textHead" >{text.subtitle}</MUI.Typography >
      <MUI.Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end", justifyContent:"center"}}>
      <MUI.Box sx={{display:"flex", flexDirection:{xs:"column", lg:"row"},gap:"calc(var(--GlobalgapOfInputs)*2)", width:{xs:"100%", lg:"80%"}}}>
      <MUI.Box sx={{display:"flex", flexDirection:"column", gap:"var(--GlobalgapOfInputs)", width:{xs:"100%", lg:"50%"}} }>
        <MUI.Typography variant="textHead" >{text.sections.personalInfo.title}</MUI.Typography >
          {personlInputs.map(([l, Icon, p]) => (
                        <UI.InputBasic
                          label={l}
                          key={l}
                          name={l}
                          type={l}
                          Icon={Icon}
                          placeholder={p}
                          // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                        />
                      ))}
      </MUI.Box>
      <MUI.Box sx={{display:"flex", flexDirection:"column", gap:"var(--GlobalgapOfInputs)", width:{xs:"100%", lg:"50%"} }}>
        <MUI.Typography variant="textHead" >{text.sections.address.title}</MUI.Typography >
          {addressInputsFull.map(([l, Icon, p]) => (
                        <UI.InputBasic
                          label={l}
                          key={l}
                          name={l}
                          type={l}
                          Icon={Icon}
                          placeholder={p}
                          // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                        />
                      ))}
           <MUI.Box sx={{display:"flex", flexDirection:"row", gap:"var(--GlobalgapOfInputs)"}}>
              {addressInputsHalf.map(([l, Icon, p]) => (
                        <UI.InputBasic
                          label={l}
                          key={l}
                          name={l}
                          type={l}
                          Icon={Icon}
                          placeholder={p}
                          // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                        />
                      ))}
            </MUI.Box>           
              <UI.ButtonBasic
                          type="submit"
                          title={text.button.signup}
                          to={"/applayout/menu"}
                          color={"white"}
                        />
      </MUI.Box>
      </MUI.Box>
      </MUI.Box>
      {/* <MUI.Box sx={{display: "flex", flexDirection: "column", gap: 2, marginBottom:4, height:10}}>
      
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
              value={formData.personalInfo.address}
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
      </MUI.Box>*/}
    </>
  );
}
