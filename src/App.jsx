// role:take care of the render order and providers
import { BrowserRouter } from "react-router-dom";
import * as UI from "./barrels/UI";
import AppRoutes from "./AppRoutes";
import * as providers from "../src/barrels/providers";
import AppInitializer from "./AppInitializer";
import { HelmetProvider } from "react-helmet-async";
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <providers.UserData>
          <AppInitializer>
            <providers.Theme>
              <providers.PizzaData>
                <UI.SiteWrapper>
                  <AppRoutes/>
                </UI.SiteWrapper>
              </providers.PizzaData>
            </providers.Theme>
          </AppInitializer>
        </providers.UserData>
      </BrowserRouter>
    </HelmetProvider>
  );
}
