// role: render successful action using toast
import * as UI from "../../barrels/UI";
import * as MUI from "../../barrels/MUI";
export default function SuccessfulAction({ toastMessage, loading }) {
  return (
    <MUI.Box
      role="status"
      aria-live="polite"
      aria-label={loading ? "Processing request" : "Action successful"}
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <MUI.Box sx={{ m: 1, position: "relative" }}>
        {loading ? (
          <MUI.CircularProgress
            aria-hidden="true"
            sx={{ color: "var(--orange)" }}
            size="clamp(2rem, 2.12vi + 1.5rem, 4.69rem)"
          />
        ) : (
          <UI.Toast message={toastMessage} />
        )}
      </MUI.Box>
    </MUI.Box>
  );
}
