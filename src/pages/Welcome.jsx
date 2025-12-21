// react imports

import { useContext } from "react"
import { siteContext } from "../App"

// ui compoenents
import Logo from "../components/shared/logo"
import SwitchLabels from "../components/ui/SwitchLabels"
import BubbleToggel from "../components/ui/BubbleToggel"
import Button from "../components/ui/Button"
import ToggleTheme from "../components/ui/ToggleTheme"
import Container from "../components/shared/Container"
import Header from "../components/shared/Header"
// element
import pizzaSlice from "../assets/pizza-image/margherita.png";

export default function welcome() {
    const {lan, setLang, mode, setMode, data, colorTheme} = useContext(siteContext) 
    const {welcoming} = data
    const t = {
        welcome : welcoming.static,
        info : {
            0 : welcoming.info[0],
            1 : welcoming.info[1],
            2 : welcoming.info[2]
        }
    }

    return(
        <Container>
        {/* page wrapper  */}
            <Header>
                <Logo color={colorTheme}/>
                <SwitchLabels value={lan} setValue={setLang} mode={mode} />
                <ToggleTheme value={mode} setValue={setMode} colorTheme={colorTheme} />
            </Header>
            <div className="flex flex-col items-center justify-center" >
                <div 
                className="text-left"
                >
                    <h1 className="text-welcome-small font-black leading-[36px]">{t.welcome}</h1>
                    <BubbleToggel dataList={t.info} colorTheme={colorTheme} />
                </div>

                <div className="flex flex-col gap-[10px] mt-[40px] w-full">
                    <Button title={lan ? "Accedi" : "Log in"  } to={"/login"}  color={"white"} disable={false}/>
                    <Button title={lan ? "Registrati" : "Sign up"}  to={"/signUp"}  color={"white"} disable={false}/>
                    <Button title={lan ? "Continua senza accedere": "Continue without logIn"} to={"/applayout/menu"}  color={"white"} disable={false}/>
                </div>
            </div>
        </Container>
    )
}



// const {lan, setLang} = useContext(siteContext)
//     const userId = true