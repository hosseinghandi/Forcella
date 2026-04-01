import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";

export default function ConfirmationDialog({
    onClose,
    open, 
    message, 
    actOnPositive,
    positiveBtnName,
    actOnNegative,
    negativeBtnName,
      }) {
  return (
    <MUI.Dialog
    disableRestoreFocus
    aria-modal="true"
    aria-labelledby="dialog-message"
      PaperProps={{
        sx: {
          maxWidth:{xs:"85vw",md:"500px"},
          minWidth:"300px",
          padding: "var(--cardPaddingY) var(--cardPaddingX)",
          borderRadius: "25px",
        },
      }}
      onClose={onClose}
      open={open}
      fullWidth
    >
      <MUI.CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MUI.Typography variant="textNormal" id="dialog-message"> {message}</MUI.Typography>
        <MUI.Box sx={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent:"space-between",
          gap:{xs:"10px"},
          alignItems:"center",
          width:"100%",}}>
          {
            positiveBtnName &&
          <UI.ButtonBasic
            title={positiveBtnName}
            task={actOnPositive}
          />
          }
          {negativeBtnName &&
            <UI.ButtonBasic
            title={negativeBtnName}
            task={actOnNegative}
          />}
        </MUI.Box>
      </MUI.CardActions>
    </MUI.Dialog>
  );
}
