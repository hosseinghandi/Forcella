// *role : help to navigate through app guided by given input
import * as UI from "../../barrels/UI";
import { useState } from "react";

export default function SharedNavigation({
  variant,
  filter,
  editMode,
  setEditMode,
  headText,
}) {
  const [exit, setExit] = useState(false);

  const NavSetup = {
    login: {
      distance: true,
      photobaner: true,
      switches: false,
    },
    signup: {
      distance: true,
      photobaner: true,
      switches: false,
    },
    welcoming: {
      distance: false,
      photobaner: true,
      switches: true,
    },
    menu: {
      filter: filter,
      navBar: true,
      headText: headText,
    },
    cart: {
      filter: false,
      navBar: true,
      headText: headText,
    },
    profile: {
      exit: exit,
      setExit: setExit,
      editMode: editMode,
      setEditMode: setEditMode,
      navBar: true,
    },
  };

  const html = (variant) => {
    switch (variant) {
      case "welcoming":
        return <UI.NavigationBasic {...NavSetup[variant]} />;

      case "login":
      case "signup":
        return <UI.NavigationBasic {...NavSetup[variant]} />;
      case "menu":
        return <UI.NavigationComplex {...NavSetup[variant]} />;

      case "cart":
        return <UI.NavigationComplex {...NavSetup[variant]} />;

      case "profile":
        return <UI.NavProfile {...NavSetup[variant]} />;
      default:
        return <UI.NavigationBasic {...NavSetup[variant]} />;
    }
  };

  return html(variant);
}
