// role : takes the user inputs and find it in user database 


// react imports
import { useContext, useState, useMemo } from "react";
import { siteContext } from "../App";
import { useTranslation } from "react-i18next";
// ui elements
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import SharedNavigation from "../components/shared/SharedNavigation";
import Container from "../components/shared/Container";
import Header from "../components/shared/Header";
import Error from "../components/ui/Error";
// 
// ui 
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

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
    
    const listOfInputs = 
    [["email",<EmailOutlinedIcon />, "email", null],
    ["password",<KeyOutlinedIcon />,"password", null]]

    return (
      <Container>
      <Header position={false}>
          <SharedNavigation backTo={"/welcome"}/>
      </Header>
      <div className="flex flex-col gap-2 mb-[36px] h-[80px]">
        <p>{message.head}</p>
        <Error message={error}/>
      </div>
        <form onSubmit={handleSubmit} >
          <div className="flex flex-col items-center justify-center gap-2">
              <InputGroup 
                  listOfInputs={listOfInputs}
                  message={message}
                  formData={formData}
                  validation={validation}
                  handleChange={handleChange}
                />
            <p 
            style={{
              color : mode ? "#00000090" : "#FFFFFF60"
            }}
            className="w-full text-left my-2">{message.forget}</p>
          </div>
          <div >
          <Button               
                                type="submit"
                                title={message.button} 
                                to={ !error.length > 0 ? "" : "/signup" }
                                color={"white"} 
                                />

          </div>

        </form>
        </Container>
    );
}
