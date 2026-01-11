// role : takes the user inputs and find it in user database 


// react imports
import { useContext, useState, useMemo } from "react";
import { siteContext } from "../App";
import { useTranslation } from "react-i18next";
// ui elements
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import SharedNavigation from "../components/shared/SharedNavigation";
import SiteWrapper from "../components/shared/SiteWrapper";
import Header from "../components/shared/Header";
import Error from "../components/ui/Error";
// 
// ui 
import Button from "../components/ui/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
// utiles 
import {isValid} from "../utils/validator";
import InputGroup from "../components/ui/InputGroup";


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
    const {mode} = useContext(siteContext); 

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
    [["email",<EmailOutlinedIcon />, "email", null],
    ["password",<KeyOutlinedIcon />,"password", null]]

    return (
      <SiteWrapper>
      <Header position={false}>
          <SharedNavigation distance={false} backTo={"/welcome"}/>
      </Header>
      <Box sx={{display: "flex", flexDirection: "column", gap: 2, marginBottom:4, height:10}}>
        <Typography variant="textHead">{message.head}</Typography>
        <Error message={error}/>
        <FormControl onSubmit={handleSubmit} >
          <Box sx={{display: "flex", flexDirection: "column", gap: 2,alignItems :"center", justifyContent: "center"}}>
            {/* these are inputs respected to input list above */}
              <InputGroup 
                  listOfInputs={listOfInputs}
                  message={message}
                  formData={formData}
                  validation={validation}
                  handleChange={handleChange}
                />
            <Typography 
            sx={{
              color : mode ? "#00000090" : "#FFFFFF60",
              width : "100%", 
              textAlign : "left",
              
            }}>{message.forget}</Typography>

          <Button               
                                type="submit"
                                title={message.button} 
                                to={ !error.length > 0 ? "" : "/signup" }
                                color={"white"} 
                                />
          </Box>
        </FormControl>
        </Box>
        </SiteWrapper>
    );
}
