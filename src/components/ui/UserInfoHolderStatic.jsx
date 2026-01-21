// *role : perapre boxes includes the data of user*
// material ui component
import * as Icon from "../../utils/Icons";
import * as MUI from "../../utils/MUI";
import { memo } from "react";

export default memo(function UserInfoHolderStatic({ userdata, pizzaRawData }) {
  // prepare personal data to render
  const dataPrepration = [
    [userdata.personalInfo.firstName, Icon.Person_outlined],
    [userdata.personalInfo.lastName, Icon.Person_outlined],
    [userdata.personalInfo.address.street, Icon.Location],
    [userdata.personalInfo.email, Icon.Email],
    [userdata.personalInfo.phone, Icon.Phone],
  ];

  const gapFull = "10px";
  const gapHalf = "5px"
  //   get passed data and make react nodes
  const personalDetail = (dataPrepration) => {
    return dataPrepration.map(([data, Icon], index) => {
      return (
        // main card holder
        <MUI.Card
          key={index}
          sx={{
            height: "60px",
            padding: "10px",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {/* Item wrapper */}
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: gapFull,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
          >
            <Icon />
            {data}
          </MUI.Box>
        </MUI.Card>
      );
    });
  };

  //   get passed object to render order states
  const orderState = (orders) =>
    {const keys = Object.keys(orders)
    return Object.values(orders).map((el, index) => {
      const { pizzaId, quantity, totalPrice, orderState, orderDate } = el;
      return (
        <MUI.Box key={keys[index]} >
          <MUI.TableContainer >
                <MUI.Table 
                sx={{ width:"full", borderCollapse:"none",  "& td, & th": {
                borderBottom: "none",
              }, }} 
                size="small" 
                aria-label="a summery of the ordr made by user">
                
                  <MUI.TableHead> 
                    <MUI.TableRow>
                      <MUI.TableCell scope="title" sx={{padding:"0", display:"flex", flexDirection:"row",gap:gapHalf 
                        }}>
                        <Icon.Circle
                                sx={{   
                                        color: orderState === "delivered" ? "green" : "var(--orange)",
                                }}
                                /> Order on {orderDate}:</MUI.TableCell>
                    </MUI.TableRow>
                  </MUI.TableHead>

                  <MUI.TableBody>
                                {pizzaId.map((i, index) => (                                       
                                                <MUI.TableRow key={`numberHolder${i}`}>
                                                        <MUI.TableCell scope="row" sx={{padding:"0 30px"}}>
                                                                {`${pizzaRawData[i].name}`}
                                                        </MUI.TableCell>
                                                        <MUI.TableCell  align="right">{`x ${quantity[index]}`}</MUI.TableCell>
                                                </MUI.TableRow>
                                        ))}
                                


                      
                      <MUI.TableRow >
                      <MUI.TableCell align="left" sx={{padding:"0 30px"}} >Total price</MUI.TableCell>
                      <MUI.TableCell align="right" >{`${totalPrice} $`}</MUI.TableCell>
                    </MUI.TableRow>
                  </MUI.TableBody>
                </MUI.Table>
              </MUI.TableContainer>
         </MUI.Box>
      );
    }
);
}


  const hint = () => {
    const arr = [
      ["Delivered", "green"],
      ["In the oven", "var(--orange)"],
    ];

    return (
      <MUI.Box sx={{ display: "flex", flexDirection: "row", gap:gapFull  }}>
        {arr.map(([state, color]) => (
          <MUI.Box
            key={state}
            sx={{ display: "flex", flexDirection: "row", gap:gapHalf  }}
          >
            <Icon.Circle sx={{ color: color }} />
            <MUI.Typography>{state}</MUI.Typography>
          </MUI.Box>
        ))}
      </MUI.Box>
    );
  };

  return (
    <>
      {personalDetail(dataPrepration)}
      <MUI.Card
        sx={{
          height: "fit-content",
          padding: "20px 10px",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <MUI.Box sx={{ width: "10%" }}>
          <Icon.ShoppingBag_outlined />
        </MUI.Box>
        {userdata?.orders && (
          <MUI.Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              gap: gapFull,
            }}
          >
            <MUI.Typography variant="titleBold">Your order:</MUI.Typography>
            {hint()}
            {orderState(userdata.orders)}
          </MUI.Box>
        )}
      </MUI.Card>
    </>
  );
});
