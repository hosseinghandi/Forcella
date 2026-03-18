import { Controller } from "react-hook-form"
import * as UI from "../../barrels/UI"

export default function InputControllerGroup({
  inputs,
  control,
  errors, 
}) {

  return inputs.map(({ name, label, type, placeholder, icon, rules }) => (
    <Controller
      key={name}
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <UI.InputBasic
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          inputRef={field.ref}
          label={label}
          type={type}
          Icon={icon}
          placeholder={placeholder}
          error={errors[name]}
        />
      )
    }
    />
  ))
}