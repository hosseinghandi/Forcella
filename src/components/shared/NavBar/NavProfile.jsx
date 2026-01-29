import { useNavigate } from "react-router-dom";
export default function NavProfile ({exit, setExit}) {
    const navigate = useNavigate();
    return  (
        <>
                      <MUI.Dialog
                            PaperProps={{
                          sx: {
                            borderRadius: "25px",
                            padding:"12px 18px", display:"flex", 
                            flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"var(--gapOfItems)"
                          },
                        }}
                        onClose={exit}
                        open={exit}
                        fullWidth
                        maxWidth="sm"
                            >
                         <MUI.Typography>Wait—leaving already? The pizza will miss you!</MUI.Typography>
                          <MUI.Box sx={{ display: "flex", flexDirection: "row", gap: 8 }}>
                                       <UI.ButtonBasic
                                         type="submit"
                                         title={"Yes"}
                                         to={"/welcome"}
                                        //  task={setExit}
                                         shrink={true}
                                       />
                                       <UI.ButtonBasic
                                         type="submit"
                                         title={"No"}
                                         task={setExit}
                                         shrink={true}
                                       />
                                     </MUI.Box>
                        </MUI.Dialog>
                      <MUI.Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "7px",
                              justifyContent:"space-between",
                              alignItems: "flex-end",
                            }}
                          >
                      <MUI.IconButton sx={{padding:"0px"}} onClick={() => navigate(-1)}>
                      < Icon.Arrow htmlColor= {colorText} /> 
                      </MUI.IconButton>
                            <MUI.Box sx={{display:"flex", flexDirection:"row", 
                              justifyContent:"center", alignItems:"flex-start"}}
                              >
                              <MUI.IconButton 
                              disableFocusRipple={true} 
                              disableRipple={true}
                              onClick={()=> setEditMode(prev => !prev)}
                              sx={{
                                padding:"0", 
                                color: editeMode ? " var(--orange)" : "black"}}>
                                <Icon.EditPen/>
                                <MUI.Typography sx={{marginRight:"30px", marginLeft:"5px"}}>Edit</MUI.Typography>
                              </MUI.IconButton>
                                <Icon.LogOut onClick={() => setExit( prev => !prev)}/>
                            </MUI.Box>
                      </MUI.Box> 
                </>
    )
} 