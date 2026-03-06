// react imports 
import {BrowserRouter} from "react-router-dom"
import * as UI from "./barrels/UI"
import  AppRoutes  from "./AppRoutes";
import * as providers from "../src/barrels/providers"


export default function App() {
  // console.log(localStorage.getItem("userState"))
  return (
  <BrowserRouter>
      <providers.UserData>
        <providers.Theme>
          <providers.Language>
              <providers.PizzaData>
                  <UI.SiteWrapper>
                    <AppRoutes/>
                  </UI.SiteWrapper>
              </providers.PizzaData>
          </providers.Language>
        </providers.Theme>
      </providers.UserData>
  </BrowserRouter>
  );
}
