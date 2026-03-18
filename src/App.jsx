// react imports 
import {BrowserRouter} from "react-router-dom"
import * as UI from "./barrels/UI"
import  AppRoutes  from "./AppRoutes";
import * as providers from "../src/barrels/providers"
import AppInitializer from "./AppInitializer";

export default function App() {
  return (
  <BrowserRouter>
      <providers.UserData>
        {/* just be sure the data ais ready to share otherwise wait by rendering landing componenet (loading) */}
        <AppInitializer>
          <providers.Theme>
            <providers.Language>
                <providers.PizzaData>
                    <UI.SiteWrapper>
                      <AppRoutes/>
                    </UI.SiteWrapper>
                </providers.PizzaData>
            </providers.Language>
          </providers.Theme>
        </AppInitializer>
      </providers.UserData>
  </BrowserRouter>
  );
}
