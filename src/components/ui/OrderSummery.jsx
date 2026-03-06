import * as MUI from "../../barrels/MUI"
export default function Ordersummery ({subTotalPrice , shippingPrice, taxPrice, totalToPay, text}) {
    
   const {
      title,
      subtotal,
      shipping,
      tax,
      total
    } = text.orderSummary

  function createData(name, value) {
    return { name, value };
}
   

    const rows = [
    createData(subtotal, subTotalPrice.toFixed(2)),
    createData(shipping, shippingPrice.toFixed(2)),
    createData(tax, taxPrice.toFixed(2)),
    ];

    return (
    <MUI.Card >
    <MUI.TableContainer sx={{padding:"0"}}>
      <MUI.Table 
      sx={{ padding:"0",width:"full", borderCollapse:"none",  "& td, & th": {
      borderBottom: "none",
    }, }} 
      size="small" 
      aria-label="a summery of user order">
        <MUI.TableHead> 
          <MUI.TableRow>
            <MUI.TableCell scope="title"> 
              <MUI.Typography component={"span"} variant="pizzaContentBold">{title} 
                </MUI.Typography> </MUI.TableCell>
          </MUI.TableRow>
        </MUI.TableHead>
        <MUI.TableBody>
          {rows.map((row) => (
            <MUI.TableRow
              key={row.name}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 } ,
                borderBottom:"1px dotted var(--black-text)"
              }}
            >
              <MUI.TableCell component="th" scope="row" >
                <MUI.Typography component={"span"} variant="textNormal">{row.name} </MUI.Typography>
                
              </MUI.TableCell>
              <MUI.TableCell align="right"><MUI.Typography component={"span"} variant="titleBold">{`${row.value}$`}</MUI.Typography> </MUI.TableCell>
            </MUI.TableRow>
          ))}
          <MUI.TableRow sx={{borderTop:"2px solid var(--black-bg)"}}>
            <MUI.TableCell align="left" ><MUI.Typography component={"span"} variant="pizzaContentBold">{total}</MUI.Typography> </MUI.TableCell>
            <MUI.TableCell align="right" > <MUI.Typography component={"span"} variant="pizzaContentBold">{`${totalToPay.toFixed(2)}$`}</MUI.Typography>  </MUI.TableCell>
          </MUI.TableRow>
        </MUI.TableBody>
      </MUI.Table>
    </MUI.TableContainer>
    </MUI.Card>
  );
}
