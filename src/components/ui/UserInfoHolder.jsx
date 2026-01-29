// *role : perapre boxes includes the data of user*
// material ui component
import * as Icon from "../../barrels/Icons";
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import * as helpers from "../../barrels/helpers"
import {useOrderCount} from "../../hook/useOrderCount"
import { memo, useState } from "react";

export default memo(function UserInfoHolder({ userdata, pizzaRawData, editeMode, setEditMode, setUser}) {
  const gapFull = "10px";
  const gapHalf = "5px";
  // editeMode = true
  const dataPrepration = helpers.requestData("profile")
  const [showMore, setShowMore] = useState(false)
  //   get passed data and make react nodes
  const [formData, setFormData] = useState(userdata);
  const handelDelet = useOrderCount("delet");
  
  const personalDetail = (dataPrepration) => {
    const data = editeMode ? dataPrepration.slice(0,-2) : dataPrepration
    return !editeMode ? (
        data.map(([data, Icon, label], index) => 
        <MUI.Card
          key={index}
          sx={{
            marginTop:"0",
            minHeight: "45px",
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
            {<Icon />}
            <MUI.Box sx={{display:"flex", flexDirection:"row", 
              justifyContent:"center", alignItems:"center"}}>
              <MUI.Typography variant="textProfileBold" sx={{ width:"110px"}}>{label.toUpperCase()}</MUI.Typography> 
              <MUI.Typography variant="textNormal" sx={{ flex:1}}>{data}</MUI.Typography> 
            </MUI.Box>
          </MUI.Box>
        </MUI.Card>
      )):(
        data.map(([data, Icon, name, subsection], index) => (
              <UI.InputBasic
                key={`editItem_${index}`}
                name={name}
                type="text"
                NoBorder={false}
                editMode={true}
                defaultValueInput={data}
                icon={<Icon />}
                placeholder={name}
                onChange={helpers.handleChange("personalInfo",(subsection ? subsection : null), setFormData)}
              />))
      ) 
  }

  //   get passed object to render order states
  const orderState = (orders) =>

    {const keys = showMore  ? Object?.keys(orders): [Object?.keys(orders)[0]] 
      const list = showMore  ? Object?.values(orders)  : [Object?.values(orders)[0]]
    return list[0] ? list.map((el, index) => {
      const { pizzaId, quantity, totalPrice, orderState, orderDate } = el;
      return (
        <MUI.Box 
        id={keys[index]}
        key={keys[index]}>
          <MUI.TableContainer >
                <MUI.Table 
                sx={{ width:"full", borderCollapse:"none",  "& td, & th": {
                borderBottom: "none",
              }, }} 
                size="small" 
                aria-label="a summery of the ordr made by user">
                
                  <MUI.TableHead> 
                    <MUI.TableRow >
                      <MUI.TableCell 
                      scope="title" 
                       sx={{padding:"0", display:"flex",
                       flexDirection:"row",gap:gapHalf, justifyContent:"space-between", 
                        }}>
                        
                        {!editeMode && 
                        <Icon.Circle
                                sx={{   
                                        color: orderState === "delivered" ? "green" : "var(--orange)",
                                }}
                                /> }
                        Order on {orderDate}: 
                        </MUI.TableCell>
                        {editeMode && 
                        <MUI.TableCell 
                        sx={{padding:"0"}}>
                          <MUI.Box 
                          onClick={ () => 
                          {
                            handelDelet(keys[index])
                          }
                          }
                          sx={{display:"flex", flexDirection:"row", 
                            justifyContent:"flex-end", alignItems:"center", gap:"2px"}}>
                            <MUI.Typography >
                              Delet
                            </MUI.Typography>
                            <Icon.Trash />
                            </MUI.Box>
                          </MUI.TableCell>}
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
              <MUI.Divider />
         </MUI.Box>
      );
    } 
) : (
  <h1>There is no order</h1>
)
}

  const hint = () => {
    const hints = helpers.requestData("hints");
    return (
      <>
        <MUI.Box sx={{ display: "flex", flexDirection: "row", gap:gapFull, marginTop:"10px"}}>
          {hints.map(([state, color]) => (
            <MUI.Box
              key={state}
              sx={{ display: "flex", flexDirection: "row", gap:gapHalf  }}
            >
              <Icon.Circle sx={{ color: color }} />
              <MUI.Typography>{state}</MUI.Typography>
            </MUI.Box>
          ))}
        </MUI.Box>
        <MUI.Divider/>
      </>
    );
  };

  return (
    <>
    {/* upper part */}
    <MUI.Box component={"section"} 
    sx={{marginTop:"20px", display:"grid", gap:1}}>
      {personalDetail(dataPrepration)}
      </MUI.Box>
      <MUI.Card
        sx={{
          ...(!editeMode ? {marginBottom:"70px"} : {marginBottom:"10px"}),
          height: "fit-content",
          padding: "20px 10px",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          ...(editeMode && {backgroundColor:"white", border:"1px solid black"})
        }}
      >
        <MUI.Box sx={{ width: "10%", padding:"0"}}>
          <Icon.ShoppingBag_outlined />
        </MUI.Box>
        {userdata?.orders && (
          <MUI.Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: gapFull,
            }}
          >
            <MUI.Box sx={{display:"flex", flexDirection:"row", 
              justifyContent:"space-between", alignItems:"flex-start", marginTop:"5px"}}>
              <MUI.Typography variant="textProfileBold">YOUR ORDER:</MUI.Typography>
              <MUI.Typography 
                variant="textNormal"
                onClick ={ () => setShowMore(prev => !prev)}
                >{`Show ${showMore ? "less" : "more"}`}</MUI.Typography>
            </MUI.Box>
            {hint()}
            {orderState(userdata.orders)}
          </MUI.Box>
        )}
      </MUI.Card>
     { editeMode && 
     <MUI.Box
     component={"div"}
      sx={{...(editeMode && {marginBottom:"70px"})}}> 
     <UI.ButtonBasic
                    task={() => {
                      helpers.handelSubmit("personalInfo",formData.personalInfo, setUser)
                      setEditMode((prev) => !prev);
                    }}
                    type="submit"
                    title={"Submit"}
                    // to={ "/signup" }
                    color={"white"}
                  />
                  </MUI.Box>
                  }
        </>
  );
});
