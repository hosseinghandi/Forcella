// role : render loading or error while mounting the page 
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";

export default function LandingPage({ error }) {
  return (
    <MUI.Box
      sx={{
        position: "fixed",
        inset: 0, // top:0, right:0, bottom:0, left:0
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      {error ? (
        <MUI.Dialog
          PaperProps={{
            sx: {
              height: { lg: "fit-content" },
              padding: "var(--cardPaddingY) var(--cardPaddingX)",
              borderRadius: "25px",
            },
          }}
          aria-describedby="error-message"
          open={!!error}
          maxWidth="special"
        >
          <UI.Error message={error} />
        </MUI.Dialog>
      ) : (
        <MUI.Box role="status" aria-label="Application is loading">
          <MUI.CircularProgress
            aria-hidden="true"
            sx={{ color: "var(--orange)" }}
            size="clamp(2rem, 2.12vi + 1.5rem, 4.69rem)"
          />
        </MUI.Box>
      )}
    </MUI.Box>
  );
}
