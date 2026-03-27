import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import * as Icons from "../../barrels/Icons";
export default function OrderRow({
  pizzaId,
  quantity,
  totalPrice,
  orderState,
  orderDate,
  editMode,
  delet,
  setDelet,
  onClick,
  text,
  pizzaRawData,
}) {
  return (
    <MUI.Box>
      <MUI.TableContainer>
        <MUI.Table
          size="small"
          sx={{ "& td, & th": { borderBottom: "none" } }}
          aria-label="order details"
        >
          <MUI.TableHead>
            <MUI.TableRow>
              {/* Order date + state indicator */}
              <MUI.TableCell
                sx={{
                  padding: "0",
                  display: "flex",
                  alignItems: "center",
                  gap: "calc(var(--GlobalgapOfGrids) / 4)",
                }}
              >
                {!editMode && (
                  <Icons.Circle
                    aria-hidden="true"
                    sx={{
                      color:
                        orderState === "delivered" ? "green" : "var(--orange)",
                    }}
                  />
                )}
                <MUI.Typography variant="textNormal">
                  {`${text.orderSum.orderedIn} ${orderDate}`}
                </MUI.Typography>
              </MUI.TableCell>

              {/* Delete button */}
              {editMode && (
                <MUI.TableCell sx={{ padding: "0" }}>
                  <MUI.IconButton
                    aria-label="Delet order"
                    disableRipple
                    onClick={() => setDelet(true)}
                    sx={{
                      borderRadius: "0",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: "2px",
                      padding: "0",
                      width: "100%",
                      color: "var(--black-bg)",
                    }}
                  >
                    <MUI.Typography variant="textNormal">
                      {text.orderSum.delet}
                    </MUI.Typography>
                    <Icons.Trash />
                  </MUI.IconButton>
                </MUI.TableCell>
              )}

              {/* Confirmation dialog */}
              <UI.ConfirmationDialog
                open={delet}
                onClose={() => setDelet(false)}
                message={text.orderSum.removeItem}
                actOnPositive={onClick}
                positiveBtnName={text.button.sure}
                actOnNegative={() => setDelet(false)}
                negativeBtnName={text.button.no}
              />
            </MUI.TableRow>
          </MUI.TableHead>

          <MUI.TableBody>
            {/* Pizza rows */}
            {pizzaId
              .split(",")
              .map(Number)
              .map((id, i) => (
                <MUI.TableRow key={id}>
                  <MUI.TableCell sx={{ padding: "5px 30px" }}>
                    <MUI.Typography variant="textNormal">
                      {pizzaRawData.find((el) => el.id === id)?.name}
                    </MUI.Typography>
                  </MUI.TableCell>
                  <MUI.TableCell align="right">
                    <MUI.Typography variant="textNormal">
                      {`x ${quantity.split(",").map(Number)[i]}`}
                    </MUI.Typography>
                  </MUI.TableCell>
                </MUI.TableRow>
              ))}

            {/* Total */}
            <MUI.TableRow>
              <MUI.TableCell align="left" sx={{ padding: "0 30px" }}>
                <MUI.Typography variant="textNormal">
                  {text.orderSum.total}
                </MUI.Typography>
              </MUI.TableCell>
              <MUI.TableCell align="right">
                <MUI.Typography variant="textNormal">{`${totalPrice} $`}</MUI.Typography>
              </MUI.TableCell>
            </MUI.TableRow>
          </MUI.TableBody>
        </MUI.Table>
      </MUI.TableContainer>
      <MUI.Divider />
    </MUI.Box>
  );
}