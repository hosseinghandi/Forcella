// role: gets the personal data of teh user and
// create meaningful UI
import * as MUI from "../../barrels/MUI";
export default function PersonalDetailsMaker({ list }) {
  return list.map(([data, Icon, label]) => (
    <MUI.Card
      key={label}
      sx={{
        minHeight: "50px",
        padding: "10px",
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {/* single input wrapper */}
      <MUI.Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--GlobalgapOfGrids) /2 )",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon aria-hidden="true" />
        <MUI.Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MUI.Typography
            component="span"
            variant="textProfileBold"
            sx={{
              width: { xs: "clamp(6.88rem, 6.91vi + 5.25rem, 15.63rem)" },
            }}
          >
            {label.toUpperCase()}
          </MUI.Typography>
          <MUI.Typography
            variant="textNormal"
            sx={{
              flex: 1,
            }}
          >
            {data}
          </MUI.Typography>
        </MUI.Box>
      </MUI.Box>
    </MUI.Card>
  ));
}
