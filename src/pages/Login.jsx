// role : takes the user inputs and find it in user database 


// react imports
import { useContext, useState, useMemo } from "react";
import { siteContext } from "../App";
import { useTranslation } from "react-i18next";

import * as MUI from "../utils/MUI"
import * as UI from "../utils/UI"
import * as Icon from "../utils/Icons"
// utiles 
import {isValid} from "../utils/validator";

export default function Login() {
  // const user = {email: "123@gmail.com",password: "23456"} 
    
  // text to render
    const {t} = useTranslation()
    const message = {
        head : t("metadata.login.head"),
        email : t("metadata.login.email", { returnObjects: true }),
        password : t("metadata.login.password", { returnObjects: true }),
        forget : t("metadata.login.forget"),  
        button : t("metadata.button.login")
    };

    // required context to render ui elements
    const {mode, colorTheme} = useContext(siteContext); 

    //states
    const [formData, setFormData] = useState({email: "",password: ""});
    const [error, setError] = useState("");

    // validator 
    const validation = useMemo( () => {
      const validation = {};
      for (const [key, value] of Object.entries(formData)) { 
        validation[key] = isValid(key,value)};
      return {validation} 
    }, [formData]);

    // form handeler
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => 
          ({ ...prevFormData, [name]: value }));
    };
    
    const handleSubmit = (event) => { 
      event.preventDefault();
    };
    
    // requird inputs
    // [Field, icon, type, section]
    const listOfInputs = 
    [["email",<Icon.Email />, "email", null],
    ["password",<Icon.Key />,"password", null]]

    return (
      <UI.SiteWrapper>
      <UI.SharedNavigation navigation={true}/>
      <MUI.Box sx={{display: "flex", flexDirection: "column", gap: 2, marginBottom:4, height:10}}>
        <MUI.Typography variant="textHead">{message.head}</MUI.Typography>
        <UI.Error message={error}/>
        <MUI.FormControl onSubmit={handleSubmit} >
          <MUI.Box sx={{display: "flex", flexDirection: "column", gap: 2,alignItems :"center", justifyContent: "center"}}>
            {/* these are inputs respected to input list above */}
              <UI.InputGroup 
                  listOfInputs={listOfInputs}
                  message={message}
                  formData={formData}
                  validation={validation}
                  handleChange={handleChange}
                />
            <MUI.Typography 
            sx={{
              color : mode ? "#00000090" : "#FFFFFF60",
              width : "100%", 
              textAlign : "left",
              
            }}>{message.forget}</MUI.Typography>

          <UI.ButtonBasic               
                                type="submit"
                                title={message.button} 
                                to={ !error.length > 0 ? "" : "/signup" }
                                color={"white"} 
                                />
          </MUI.Box>
        </MUI.FormControl>
        </MUI.Box>
        </UI.SiteWrapper>
    );
}
