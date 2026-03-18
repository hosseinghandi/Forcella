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
      PaperProps={{
        sx: {
          padding: "var(--cardPaddingY) var(--cardPaddingX)",
          borderRadius: "25px",
        },
      }}
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth="sm"
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
        <MUI.Typography variant="textNormal" > {message}</MUI.Typography>
        <MUI.Box sx={{ display: "flex", flexDirection: "row", gap: 8 }}>
          {
            positiveBtnName &&
          <UI.ButtonBasic
            type="submit"
            title={positiveBtnName}
            key={positiveBtnName}
            task={actOnPositive}
            shrink={true}
          />
          }
          {negativeBtnName &&
            <UI.ButtonBasic
            type="submit"
            title={negativeBtnName}
            key={negativeBtnName}
            task={actOnNegative}
            shrink={true}
          />}
        </MUI.Box>
      </MUI.CardActions>
    </MUI.Dialog>
  );
}
