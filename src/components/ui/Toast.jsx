// role: get the message and render it on the top of the page
import * as MUI from "../../barrels/MUI";
export default function Toast({ message }) {
  return (
    <MUI.Alert
      severity={"success"}
      sx={{
        position: "fixed",
        width: { xs: "80%", md: "fit-content" },
        left: "50%",
        top: "15vh",
        transform: "translate(-50%, -100%)",
        zIndex: 99999,
        fontSize: "var(--textNormal)",
        borderRadius: "var(--radius)",

        "@keyframes slideInOut": {
          "0%": {
            transform: "translate(-50%, -100%)",
            opacity: 0,
          },
          "20%": {
            transform: "translate(-50%, 0)",
            opacity: 1,
          },
          "80%": {
            transform: "translate(-50%, 0)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(-50%, -100%)",
            opacity: 0,
          },
        },
        animation: "slideInOut 5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {message}
    </MUI.Alert>
  );
}
