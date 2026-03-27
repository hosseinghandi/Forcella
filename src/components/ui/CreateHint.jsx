// role create hints for order list, that is if the order is delivered or not
import * as Icons from "../../barrels/Icons";
import * as MUI from "../../barrels/MUI";

export default function CreateHint({ orderSum }) {
  const arr = [
    [orderSum.state.delivered, "green"],
    [orderSum.state.inTheOven, "var(--orange)"],
  ];
  return (
    <>
      <MUI.Box
        role="list"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "var(--GlobalgapOfGrids)",
          marginTop: "0px",
        }}
      >
        {arr.map(([state, color], i) => (
          <MUI.Box
            key={`order${i}`}
            role="listitem"
            aria-label={`order state ${state}`}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "calc(var(--GlobalgapOfGrids)/2) ",
            }}
          >
            <Icons.Circle aria-hidden="true" sx={{ color: color }} />
            <MUI.Typography variant="textNormal">{state}</MUI.Typography>
          </MUI.Box>
        ))}
      </MUI.Box>
      <MUI.Divider />
    </>
  );
}
