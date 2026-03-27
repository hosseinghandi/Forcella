// role: this function gets the field and make inputs that helps
// avoiding repating to create rules for react hook form

import * as Icons from "../barrels/Icons";
// required pattern to add
const patternslib = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9+\-\s]{8,15}$/,
  zipcode: /^[0-9]{4,6}$/,
  cardNumber: /^[0-9\s]{16,19}$/,
  cvv: /^[0-9]{3,4}$/,
};
// icons required for each filed
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
  cardNumber: Icons.CardBank,
  expiryDate: Icons.Calender,
  cvv: Icons.CardBank,
};

// this function get field and if exist, formtools to create rules
const resolveRules = (field, formTools) => {
  const { rules, error } = field;

  if (!rules || Object.keys(rules).length === 0) return {};
  const resolved = {};
  // check the type of rules which comes from data json

  // if it is just required add the message
  if (rules.required) resolved.required = error;
  // if length matters add to rules
  if (rules.minLength)
    resolved.minLength = {
      value: rules.minLength.value ?? rules.minLength,
      message: rules.minLength.message ?? error,
    };

  // take care of the length of address string
  if (rules.maxLength)
    resolved.maxLength = {
      value: rules.maxLength.value ?? rules.maxLength,
      message: rules.maxLength.message ?? "Too many characters",
    };
  // if pattern matters add to rules
  if (rules.pattern)
    resolved.pattern = { value: patternslib[rules.pattern], message: error };

  //   just one input requirs a function/ formtools(GetValue)
  if (rules.validate === "matchPassword" && formTools) {
    resolved.validate = (value) => value === formTools("password") || error;
  }
  return resolved;
};

export default function buildInputData(field, formTools) {
  // return filds items + rules and icon
  return Object.fromEntries(
    Object.entries(field).map(([key, field]) => [
      key,
      {
        ...field,
        icon: fieldIconslib[key],
        rules: resolveRules(field, formTools),
      },
    ]),
  );
}
