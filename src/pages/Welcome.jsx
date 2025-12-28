import { useTranslation } from "react-i18next";
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


export default function Welcome() {

    const {lan, setLang, mode, setMode, data, colorTheme} = useContext(siteContext) 
    const { t } = useTranslation();

    const messages = {
        welcome : t("metadata.welcoming.static"),
        info :  t("metadata.welcoming.info", { returnObjects: true }),
    }

    const button = {
        login : t("metadata.button.login"),
        signup:  t("metadata.button.signup"),
        continue:  t("metadata.button.continue"),

    }
    
    return(
        <Container>
        {/* page wrapper  */}
            <Header position={false}>
                <Logo color={colorTheme}/>
                <SwitchLabels value={lan} setValue={setLang} mode={mode} />
                <ToggleTheme value={mode} setValue={setMode} colorTheme={colorTheme} />
            </Header>
            <div className="flex flex-col items-center justify-center" >
                <div 
                className="text-left"
                >
                    <h1 className="text-welcome-small font-black leading-[36px]">
                        {messages.welcome}</h1>
                    <BubbleToggel dataList={messages.info} colorTheme={colorTheme} />
                </div>

                <div className="flex flex-col gap-[10px] mt-[40px] w-full">
                    <Button title={button.login} to={"/login"}  color={"white"} disable={false}/>
                    <Button title={button.signup}  to={"/signup"}  color={"white"} disable={false}/>
                    <Button title={button.continue} to={"/applayout/menu"}  color={"white"} disable={false}/>
                </div>
            </div>
        </Container>
    )
}