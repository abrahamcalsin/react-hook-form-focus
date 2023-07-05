import clsx from "clsx";
import { useController } from "react-hook-form";

const RhfCheckbox = (props) => {
  const { id, name, label, control } = props;

  const { field, fieldState } = useController({
    name,
    control
  });

  return (
    <div className="checkPolicy">
      <input type="checkbox" id={id} {...field} />
      <label
        htmlFor={id}
        className={clsx(
          field.value && "policyChecked",
          fieldState.error && "errorStatus"
        )}
      />
      <span className="labelText">{label}</span>
      <span className="helperText">
        {fieldState.error ? fieldState.error.message : undefined}
      </span>
    </div>
  );
};

export default RhfCheckbox;
