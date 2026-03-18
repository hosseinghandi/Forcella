import * as Icons from "../barrels/Icons";
const patternslib = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9+\-\s]{8,15}$/,
  zipcode: /^[0-9]{4,10}$/,
  cardNumber: /^[0-9\s]{16,19}$/,
  cvv: /^[0-9]{3,4}$/,
};

const fieldIconslib = {
  firstName: Icons.Person_outlined,
  lastName: Icons.Person_outlined,
  email: Icons.Email,
  phone: Icons.Phone,
  password: Icons.Key,
  confirmPassword: Icons.Key,
  address: Icons.Location,
  zipcode: Icons.Mailbox,
  addressExtra: Icons.Location,
  cardHolder: Icons.Person_outlined,
  cardNumber : Icons.CardBank,
  expiryDate :Icons.Calender,
  cvv : Icons.CardBank
};

const resolveRules = (fieled, formTools) => {
  // for th field 3 main elements needed 
  const {rules, error, name} = fieled

  if (!rules || Object.keys(rules).length === 0) return {};
  
  const resolved = {}
//   check the type of rules
  if  (rules.required) resolved.required = error;
  if  (rules.minLength) resolved.minLength = { value: rules.minLength, message :error};
  if (rules.pattern) resolved.pattern = {value : patternslib[rules.pattern], message:error}

//   just one input requirs a function 
  if (rules.validate ==="matchedPassword" && formTools){
      resolved.validate = (value) => value === formTools(name) ?? error
  }
  return resolved
}

export default function buildInputData(fieled, formTools) {

    return Object.fromEntries( 
        Object.entries(fieled).map(([key, field]) => [
            key, 
           { ...field,
            icon : fieldIconslib[key],
            rules: resolveRules(fieled[key], formTools)
        }
        ] )
    )

}
