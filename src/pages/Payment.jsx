
import * as UI from "../barrels/UI"
import * as MUI from "../barrels/MUI"
import * as Icon from "../barrels/Icons"
export default function Payment() {
    const upperInputs = 
        [["Card Holder",Icon.Person_outlined , "cardHolder", "e.g. Jack Walton"],
        ["Card Number", Icon.CardBank,"CardNumber","**** **** **** 4567"],
        ]
    const belowInputs = 
        [["Expiry date",Icon.Calender , "expiry date", "mm/dd/yyyy"],
        ["CCV",Icon.CardBank , "cvv", "12345"]]

    return( 
        <>
            <UI.SharedNavigation main={true}/>
            <MUI.Typography> Please provide your bank details.</MUI.Typography>
            <UI.Error message={"here is the invalid"}/>
            <MUI.Box sx={{display:"flex", flexDirection:"column", 
                gap:"var(--gapOfItems)", marginTop:"20px"}}>
            {upperInputs.map(([label, Icon, name, placeholder], index) => (
                          <UI.InputBasic
                            label={label} 
                            key={`input_${index}`}
                            name={name}
                            type="text"
                            NoBorder={false}
                            icon={<Icon />}
                            placeholder={placeholder}
                            // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                          />))
                  }
            <MUI.Box sx={{display:"flex", flexDirection:"row", gap:"var(--gapOfItems)"}}>
            {belowInputs.map(([label, Icon, name, placeholder], index) => (
                          <UI.InputBasic
                            label={label} 
                            key={`input_${index}`}
                            name={name}
                            type="text"
                            NoBorder={false}
                            icon={<Icon />}
                            placeholder={placeholder}
                            // onChange={helpers.handleChange("personalInfo",(subsection ? subsection : ""), setFormData)}
                          />))
                  }
                  </MUI.Box>
                  <UI.ButtonBasic
                              title={"Pay"}
                              to="/applayout/menu"
                              color="white"
                              disabled={false}
                            />
            </MUI.Box>
        </>

    )
}


//   const date = new Date()
//   console.log(date.toLocaleString().split(",")[0])