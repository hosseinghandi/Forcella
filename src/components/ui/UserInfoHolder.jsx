// *role : on request render passed pizza as special offer*
// material ui component


import * as Icon from "../../utils/Icons";
import * as MUI from "../../utils/MUI";
import { memo } from "react"


// import translator
import { useTranslation } from "react-i18next";

export default memo(function UserInfoHolder({userdata}) {

const dataPrepration = [
        [userdata.personalInfo.firstName, Icon.Person_outlined], 
        [userdata.personalInfo.lastName, Icon.Person_outlined], 
        [userdata.personalInfo.address.street, Icon.Location], 
        [userdata.personalInfo.email, Icon.Email],
        [userdata.personalInfo.phone, Icon.Phone],
        // [userdata.lastOrdered.phone, Icon.ShoppingBag]
]

console.log(dataPrepration)
        
// [userdata.lastOrdered, Icon.ShoppingBag],


const personalDetail = (dataPrepration) => {
                return dataPrepration.map(([data, Icon], index)=> 
                <MUI.Box 
                        key={index}>
                    {Icon}
                    {data}
                </MUI.Box> ) }


return (
        <MUI.Card
            key={userdata.personalInfo.firstName}
            sx={{
                height:"60px",
                borderRadius: "25px",
                width: "100%",
                backgroundColor: "var(--gray)",
                boxShadow: "none",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
             <MUI.Box>
                    <Icon.Person_outlined/>
                    {userdata.personalInfo.firstName}
            </MUI.Box>  
                    {personalDetail(dataPrepration)}
            </MUI.Card>
    )
})


// <h2>
//         {userdata.personalInfo.lastName}
//       </h2>

//       <p>Email: {userdata.personalInfo.email}</p>
//       <p>Phone: {userdata.personalInfo.phone}</p>

//       <h3>Address</h3>
//       <p>
//         {userdata.personalInfo.address.street}, {" "}
//         {userdata.personalInfo.address.city},{" "}
//         {userdata.personalInfo.address.zipcode}
//       </p>

//       <h3>Preferences</h3>
//       <p>Language: {userdata.preferences.language}</p>
//       <p>Theme: {userdata.preferences.dark ? "Dark" : "Light"}</p>

//       <h3>Last Order</h3>
//       <p>Status: {userdata.lastOrdered.orderState}</p>
//       <p>Total: ${userdata.lastOrdered.totalPrice}</p>
//     {
//         userdata.lastOrdered &&
//       <p>
//         Pizzas Ordered:
//         {userdata.lastOrdered.pizzaId.map((id, index) => (
//           <span key={id}>
//             {" "}ID {id} × {userdata.lastOrdered.quantity[index]}
//           </span>
//         ))}
//       </p>
//     }