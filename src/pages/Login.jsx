// react imports
import { useContext, useState } from "react";
import { siteContext } from "../App";

// ui elements
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import SharedNavigation from "../components/shared/SharedNavigation"
import Container from "../components/shared/Container";
import Error from "../components/ui/Error";
import Header from "../components/shared/Header";
// 

// import FormControl from "../components/ui/FormControl"
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";





export default function Login() {
    const user = {email: "123@gmail.com",password: "23456"} 
    const {mode, lan} = useContext(siteContext); 
    const [formData, setFormData] = useState({email: "",password: ""});
    const [error, setErrot] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => 
        ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
};

  return (
    <Container>
    <Header>
        <SharedNavigation/>
    </Header>
    <div className="flex flex-col gap-2 mb-[36px] h-[80px]">
      <p>     Log in with your data that you entered 
              during your registration please.</p>
      {error && <Error message={"this is an error"}/>}
    </div>
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-col items-center justify-center">
          <Input 
            label="Email"
            name="email"
            type="email"
            // error={false, "email"}                  
            icon={<EmailOutlinedIcon />}
            value={formData.email}
            onChange={handleChange}
            isValid={formData.email.includes("@" && ".com")}
            placeholder="Enter your email"/>
          
          <Input 
            label="password"
            name="password"
            icon={<KeyOutlinedIcon />}
            type="password"
            // error={false, "password"}                  
            value={formData.password}
            isValid={formData.password.length >= 10}
            onChange={handleChange}
            placeholder="Password"/>
          <p 
          style={{
            color : mode ? "#00000090" : "#FFFFFF60"
          }}
          className="w-full text-left my-2">Do you forget your password?</p>
        </div>
        <div >
        <Button               
                              type="submit"
                              title={lan ? "Accedi" : "Log in"  } 
                              to={false}
                              color={"white"} 
                              disable={false}/>

        </div>

      </form>
      </Container>
  );
}
