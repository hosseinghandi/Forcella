import * as UI from "../barrels/UI"
import * as MUI from "../barrels/MUI"
import * as Icon from "../barrels/Icons"
import { useLocation } from "react-router-dom"
import useRequestText from "../hook/useRequestText"
import { number } from "motion"


export default function Payment() {
    const {state} = useLocation()
    const {payment,button} = useRequestText("cart")
    const upperInputs = 
        [[payment.cardHolder,Icon.Person_outlined , payment.cardHolder, "e.g. Jack Walton", "text"],
        [payment.cardNum, Icon.CardBank,payment.cardNum,"**** **** **** 4567", "number"],
        ]
    const belowInputs = 
        [[payment.expiry,Icon.Calender , payment.expiry, payment.dateFormat, "date"],
        [payment.ccv,Icon.CardBank , payment.ccv, "12345", "number"]]

    return( 
        <>
            <UI.SharedNavigation varient={"cart"}  />
            <UI.LayoutHandeler
            style={ {
                marginTop:{xs:"20vh", lg:"unset"},
                // margin:"auto",
                width:"100%", 
                height:{xs:"50vh" ,lg:"80vh"},
                }}
            >
            <MUI.Box sx={{minHeight:"80px", display:"flex", 
                flexDirection:"column", gap:"var(--GlobalgapOfItems)"}}>
                <MUI.Typography variant="textNormal"> 
                    {payment.title}</MUI.Typography>
                {/* <UI.Error 
                message={"here is the invalid"}/> */}
            </MUI.Box>
            
            <MUI.FormControl
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--GlobalgapOfItems)", 
                        width: {xs:"100%", 
                          sm:"clamp(28.13rem, 13.89vi + 22.92rem, 43.75rem)"},
                      }}
                    >
                        
            <MUI.Box 
                sx={{display:"flex", 
                flexDirection:"column", 
                gap:"var(--GlobalgapOfItems)", marginTop:"20px"}}>
            {upperInputs.map(([label, icon, name, placeholder, type], index) => (
                          <UI.InputBasic
                            label={label} 
                            key={`input_${index}`}
                            name={name}
                            type={type}
                            NoBorder={false}
                            Icon={icon }
                            placeholder={placeholder}
                            // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                          />))
                  }
            
            <MUI.Box sx={{display:"flex", flexDirection:"row", gap:"var(--GlobalgapOfItems)"}}>
            {belowInputs.map(([label, icon, name, placeholder, type], index) => (
                          <UI.InputBasic
                            label={label} 
                            key={`input_${index}`}
                            name={name}
                            type={type}
                            NoBorder={false}
                            Icon={icon}
                            placeholder={placeholder}
                            // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                          />))
                  }
                  </MUI.Box>
                  <UI.ButtonBasic
                              title={`${button.pay} ${state?? ""}`}
                              to="/menu"
                              color="white"
                              disabled={true}
                            />
            </MUI.Box>
            </MUI.FormControl>
            </UI.LayoutHandeler>
        </>
    )
}


//   const date = new Date()
//   console.log(date.toLocaleString().split(",")[0])