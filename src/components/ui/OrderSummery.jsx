import * as MUI from "../../utils/MUI"
export default function Ordersummery ({timeList, count}) {

    
    function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
    }

    const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
    <MUI.TableContainer component={MUI.Paper} sx={{border:"none"}}>
      <MUI.Table 
      sx={{ width:"full", borderCollapse:"none",  "& td, & th": {
      borderBottom: "none",
    }, }} 
      size="small" 
      aria-label="a summery of user order">
        <MUI.TableHead>
          <MUI.TableRow>
            <MUI.TableCell >OrderSummery</MUI.TableCell>
            <MUI.TableCell align="right">Calories</MUI.TableCell>
          </MUI.TableRow>
        </MUI.TableHead>
        <MUI.TableBody>
          {rows.map((row) => (
            <MUI.TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <MUI.TableCell component="th" scope="row">
                {row.name}
              </MUI.TableCell>
              <MUI.TableCell align="right">{row.calories}</MUI.TableCell>

            </MUI.TableRow>
          ))}
        </MUI.TableBody>
      </MUI.Table>
    </MUI.TableContainer>
  );
}
