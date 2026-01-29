// react imports 
import {BrowserRouter} from "react-router-dom"
import * as UI from "./barrels/UI"
import  AppRoutes  from "./AppRoutes";
import * as providers from "../src/barrels/providers"


export default function App() {
  // localStorage.clear()

  return (
            <BrowserRouter>
    <providers.Theme>
      <providers.Language>
        <providers.UserData>
          <providers.PizzaData>
              <UI.SiteWrapper>
                <AppRoutes/>
              </UI.SiteWrapper>
          </providers.PizzaData>
        </providers.UserData>
      </providers.Language>
    </providers.Theme>
            </BrowserRouter>
  );
}
