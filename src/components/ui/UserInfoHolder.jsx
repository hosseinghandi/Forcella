// *role : perapre boxes includes the data of user*
// material ui component
import * as Icon from "../../barrels/Icons";
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import { useForm} from "react-hook-form";
import useRequestText from "../../hook/useRequestText";
import { memo, useState } from "react";
import useUpdateUser from "../../hook/useUserUpdate";
export default memo(function UserInfoHolder({
  editMode,
  setEditMode,
}) {
  const {updateProfile, handleOrder} = useUpdateUser()
  const {text,inputs,pizzaRawData, isOrder} = useRequestText("profile");
  const listItems = text.listItems;
  const orderSum = text.orderSum
  const {
    control,  
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {defaultValues: Object.fromEntries(inputs.map(input => [input.name, input.placeholder]))}
  );
// *****here theme and languges are missed
  const onsubmit= (formData) => {
      console.log(formData)
      updateProfile(formData)
      setEditMode(false) 
  }

  const [showMore, setShowMore] = useState(false);
  const [delet, setDelet] = useState(false)
  //   get passed data and make react nodes
  // const [formData, setFormData] = useState(userdata);

  // prepare user data
  const personalDetail = (listItems) => {
    const list = editMode ? listItems.slice(0, -2) : listItems;
    return !editMode
      ? list.map(([data, Icon, label], index) => (
          <MUI.Card
            key={index}
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
                alignItems: "center" ,
                justifyContent: "center",
              }}
              key={index}
            >
              {<Icon />}

              <MUI.Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MUI.Typography
                  variant="textProfileBold"
                  sx={{ width: {xs:"clamp(6.88rem, 6.91vi + 5.25rem, 15.63rem)"} }}
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
        ))
      : 
        <UI.InputControllerGroup 
          inputs={inputs}
          control={control}
          errors={errors}
        />
  };
  //   get passed object to render order states
  const orderState = (orders) => {

    const keys = showMore ? Object?.keys(orders) : [Object?.keys(orders)[0]];
    const list = showMore
      ? Object?.values(orders)
      : [Object?.values(orders)[0]];

    return list[0] ? (
      list.map((el, index) => {
        const { pizzaId, quantity, totalPrice, orderState, orderDate } = el;
        return (
          <MUI.Box id={keys[index]} key={keys[index]} >
            <MUI.TableContainer >
              <MUI.Table
                sx={{
                  width: "full",
                  borderCollapse: "none",
                  "& td, & th": {
                    borderBottom: "none",
                  },
                }}
                size="small"
                aria-label="a summery of the orderd and its state"
              >
                <MUI.TableHead>
                  <MUI.TableRow>
                    <MUI.TableCell
                      scope="title"
                      sx={{
                        padding: "0",
                        display: "flex",
                        flexDirection: "row",
                        gap: "calc(var(--GlobalgapOfGrids) /4)",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {!editMode && (
                        <Icon.Circle
                          sx={{
                            color:
                              orderState === "delivered"
                                ? "green"
                                : "var(--orange)",
                          }}
                        />
                      )}
                      <MUI.Typography variant="textNormal">
                        {`${orderSum.orderedIn}  ${orderDate}`}
                      </MUI.Typography>
                    </MUI.TableCell>
                    {editMode && (
                      <MUI.TableCell sx={{ padding: "0" }}>
                        
                        <MUI.IconButton
                        disableRipple
                        aria-label="Delet order"
                          onClick={() => {
                            setDelet(true)
                          }}
                          sx={{
                            borderRadius:"0",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "2px",
                            padding:"0",
                            width:"100%",
                            color:("var(--black-bg)")

                          }}
                        >
                          <MUI.Typography variant="textNormal">
                            {orderSum.delet}
                          </MUI.Typography>
                          <Icon.Trash />
                        </MUI.IconButton>
                      </MUI.TableCell>
                    )}
                    <UI.ConfirmationDialog 
                                  onClose={!delet}
                                  open={delet} 
                                  message={orderSum.removeItem} 
                                  actOnPositive={() => 
                                  {
                                    handleOrder(keys[index])
                                    setDelet(false)
                                  }}
                                  positiveBtnName={text.button.sure}
                                  actOnNegative={() => setDelet(false)}
                                  negativeBtnName={text.button.no}
                                />                    
                  </MUI.TableRow>
                </MUI.TableHead>

                <MUI.TableBody>
                  {pizzaId.split(",").map(Number).map((i, index) => (
                    <MUI.TableRow key={`numberHolder${i}`}>
                      <MUI.TableCell scope="row" sx={{ padding: "5px 30px" }}>
                        <MUI.Typography variant="textNormal">
                          {`${pizzaRawData.find( el => el.id === i).name}`}
                        </MUI.Typography>
                      </MUI.TableCell>
                      <MUI.TableCell align="right">
                        <MUI.Typography variant="textNormal">
                          {`x ${quantity.split(",").map(Number)[index]}`}
                        </MUI.Typography>
                      </MUI.TableCell>
                    </MUI.TableRow>
                  ))}

                  <MUI.TableRow>
                    <MUI.TableCell align="left" sx={{ padding: "0 30px" }}>
                      <MUI.Typography variant="textNormal">
                        {orderSum.total}
                      </MUI.Typography>
                    </MUI.TableCell>
                    <MUI.TableCell align="right">
                      {" "}
                      <MUI.Typography variant="textNormal">
                        {`${totalPrice} $`}
                      </MUI.Typography>
                    </MUI.TableCell>
                  </MUI.TableRow>
                </MUI.TableBody>
              </MUI.Table>
            </MUI.TableContainer>
            <MUI.Divider/>
          </MUI.Box>
        );
      })
    ) : (
      <h1>{orderSum.state.empty}</h1>
    );
  };
  // creat hint for table
  const hint = () => {
    const arr = [
      [orderSum.state.delivered, "green"],
      [orderSum.state.inTheOven, "var(--orange)"],
    ];
    return (
      <>
        <MUI.Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "var(--GlobalgapOfGrids)",
            marginTop: "0px",
          }}
        >
          {arr.map(([state, color]) => (
            <MUI.Box
              key={state}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "calc(var(--GlobalgapOfGrids)/2) ",
              }}
            >
              <Icon.Circle sx={{ color: color }} />
              <MUI.Typography variant="textNormal">{state}</MUI.Typography>
            </MUI.Box>
          ))}
        </MUI.Box>
        <MUI.Divider />
      </>
    );
  };

  return (
    <>
      <MUI.Box
        component={editMode ? "form" : "section"}
        onSubmit={handleSubmit(onsubmit)}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: {xs:"95vw", md:"70vw",lg:"95vw"},
          height: "fit-content",
          maxHeight:{lg:"65vh"},
          px: {
            xs: "calc(var(--spacing-global-padding-x-mobile) - 3vw)",
            md: "calc(var(--spacing-global-padding-x-tablet) - 2.5vw)",
            special: "calc(var(--spacing-global-padding-x-desktop) - 2.8vw)",
          },
          
          mt: { md: "2vw", xl:"0" },
          alignItems: {special: "flex-start" },
          gap: "calc(var(--GlobalgapOfGrids)*2)",
        }}
      >
        {/* upper part */}
        <MUI.Box
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width:"100%",
            gap: "calc(var(--GlobalgapOfGrids)/2)",
          }}
        >
          {personalDetail(listItems)}
        </MUI.Box>
        {/* summery and submit wrapper */}

        <MUI.Box sx={{
          display:"flex",
          flexDirection:"column", 
          width:"100%", 
          justifyContent:"space-between",
          
          }}>
        <MUI.Card
          sx={{
            ...(!editMode
              ? { marginBottom: "70px" }
              : { marginBottom: "10px" }),
            width: "100%",
            height: "100%",
            maxHeight:"40vh",
            overflow:"scroll",
            padding: "20px 10px",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            ...(editMode && {
              backgroundColor: "var(--white-bg)",
              border: "1px solid black",
              marginTop:"var(--GlobalgapOfGrids)"
              
            }),
          }}
        >
          <MUI.Box sx={{ flexShrink: 0 }}>
            <Icon.ShoppingBag_outlined />
          </MUI.Box>
            
          {text?.orders && (
            <MUI.Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "var(--GlobalgapOfGrids)",
                overflowY:"scroll",
                
               
                
              }}
            >
              <MUI.Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginTop: "5px",
                  marginLeft: "5px",
                }}
              >
                <MUI.Typography variant="textProfileBold">
                  {orderSum.title.toUpperCase()}
                </MUI.Typography>
                <MUI.IconButton 
                disableRipple
                sx={{padding:"0", color:"var(--black-bg)"}}>
                  <MUI.Typography
                    variant="textNormal"
                    onClick={() => setShowMore((prev) => !prev)}
                  >
                    { isOrder > 1 ? 
                    !showMore ? orderSum.showMore : 
                    orderSum.showLess: null}
                    </MUI.Typography>
                
                  </MUI.IconButton>
              </MUI.Box>
              {hint()}
              {orderState(text.orders)}
            </MUI.Box>
          )}
        </MUI.Card>

          {editMode && (
            <MUI.Box
              component={"div"}
              sx={{ ...(editMode && { marginBottom: {xs:"70px", special:"0" } }) }}
            >
              
              <UI.ButtonBasic
                type="submit"
                title={text.button.submit}
                // to={ "/signup" }
                color={"white"}
              />
            </MUI.Box>
          )}
          </MUI.Box>
      </MUI.Box>
    </>
  );
});
