// ui elements
// 
export default function Input({
  name,
  label,
  icon,
  error,
  isValid,
  ...inputProps
}) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>

      <div
        className="border rounded-[25px] h-[40px] 
        flex items-center px-3
        focus-within:border-[var(--color-orange)]"
      >
        <input
          id={name}
          name={name}
          {...inputProps}
          className="w-[90%] focus:outline-none"
        />

        <div className="w-[10%] flex justify-center"
        style={{ color : isValid ?  "green" : "" }}>
          {icon}
        </div>
      </div>
    </div>
  );
}

