// *role: make a group of inputs in sign up and login page*

// ui component
import * as UI from "../../utils/UI"

export default function InputGroup({
  listOfInputs,
  message,
  formData,
  validation,
  handleChange,
}) {
  return listOfInputs.map(([Field, icon, type, section]) => {
    const msgSource = section ? message[section] : message;
    const dataSource = section ? formData[section] : formData;
    const validationSource = section ? validation?.[section] : null;
    return (
      <UI.InputBasic
        key={Field}
        label={msgSource[Field].Label}
        name={Field}
        type={type}
        icon={icon}
        value={dataSource?.[Field]}
        isValid={validationSource?.[Field]}
        onChange={section ? handleChange(section) : handleChange}
        placeholder={msgSource?.[Field].placeHolder}
      />
    );
  });
}
