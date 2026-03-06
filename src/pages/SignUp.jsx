// role : takes theuser data and save it to the user data json

// react imports
import { useState, useMemo } from "react";
import useRequestText from "../hook/useRequestText";
import * as MUI from "../barrels/MUI"
import * as UI from "../barrels/UI"

// utiles
import { isValid } from "../utils/validator";


export default function Signup() {
  const data = useRequestText("signup")
  const text = data.text
  const personalInputs  = data.personalInputs
  // tak ethe first item which is street an dthe rest for halfwidth
  const fullWidthInput  = Array(data.addressInputs[0])
  const halfWidthInputs  = data.addressInputs.slice(1)
  return (
    <>
      <UI.SharedNavigation varient={"signup"}/>
      <UI.LayoutHandeler 
      style={{
                marginTop:{xs:"5vh", lg:"15vh"},
                width:"100%", 
                height:{xs:"fit-content"},
                
      }}> 

      <MUI.Box sx={{
        width: {xs:"100%", 
                special:"clamp(43.75rem, 65.41vi + 1.89rem, 100rem)"},
                display:"flex", 
                flexDirection:"column", 
                alignItems:"flex-end", 
                justifyContent:"center"}}>

      {/* main flex wrapper */}
      <MUI.Box sx={{display:"flex", 
      flexDirection:{xs:"column", lg:"column"},
      gap:"calc(var(--GlobalgapOfInputs)*2)", width:"100%"}}>
      <MUI.Typography variant="textNormal"  >
        {text.subtitle}</MUI.Typography >
      {/* personal and address wrapper */}
      <MUI.Box sx={{display:"flex", 
        flexDirection:{xs:"column" ,lg:"row"},
        gap:"calc(var(--GlobalgapOfInputs) * 10)" }}>
      {/* personal wrapper */}
      <MUI.Box sx={{display:"flex", flexDirection:"column", 
        gap:"calc(var(--GlobalgapOfInputs)*2)", width:{xs:"100%", lg:"50%"}} }>
        <MUI.Typography variant="textNormal" sx={{fontWeight:"bold"}} >{text.sections.personalInfo.title}</MUI.Typography >
          {personalInputs.map(({label, icon, placeholder}) => (
                        <UI.InputBasic
                          label={label}
                          key={label}
                          name={label}
                          type={label}
                          Icon={icon}
                          placeholder={placeholder}
                          // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                        />
                      ))}
        </MUI.Box>

        {/*  address wrapper */}
        <MUI.Box sx={{display:"flex", flexDirection:"column", gap:"calc(var(--GlobalgapOfInputs)*2)", width:{xs:"100%", lg:"50%"} }}>
          <MUI.Typography variant="textNormal" sx={{fontWeight:"bold"}}  >{text.sections.address.title}</MUI.Typography >
            {fullWidthInput.map(({label, icon, placeholder}) => (
                          <UI.InputBasic
                            label={label}
                            key={label}
                            name={label}
                            type={label}
                            Icon={icon}
                            placeholder={placeholder}
                            // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                          />
                        ))}
            <MUI.Box sx={{display:"flex", flexDirection:"row", gap:"var(--GlobalgapOfInputs)"}}>
                {halfWidthInputs.map(({label, icon, placeholder}) => (
                          <UI.InputBasic
                            label={label}
                            key={label}
                            name={label}
                            type={label}
                            Icon={icon}
                            placeholder={placeholder}
                            // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                          />
                        ))}
            </MUI.Box>     
              <MUI.Box sx={{marginTop:"calc(var(--textLabel) + 10px)"}}>
                <UI.ButtonBasic
                            type="submit"
                            title={text.button.signup}
                            to={"/menu"}
                            color={"white"}
                            disabled={true}
                          />
              </MUI.Box>
      </MUI.Box>
      </MUI.Box>                
      </MUI.Box>
      </MUI.Box>
      </UI.LayoutHandeler>
    </>
  );
}



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