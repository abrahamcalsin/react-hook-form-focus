import clsx from "clsx";
import { useController } from "react-hook-form";

const RhfRadio = (props) => {
  const { id, name, control, value, imageSrc } = props;

  const { field, fieldState } = useController({
    name,
    control
  });

  return (
    <div className="checkGender">
      <input type="radio" id={id} {...field} value={value} />
      <label
        htmlFor={id}
        className={clsx(
          field.value && "genderChecked",
          fieldState.error && "errorStatus"
        )}
      >
        <img src={imageSrc} alt="gender" />
      </label>
      {/* <input type="radio" id={id} {...field} value={value} />
      <label
        htmlFor={id}
        className={clsx(
          field.value && "genderChecked",
          fieldState.error && "errorStatus"
        )}
      />
      <span className="labelText">{label}</span> */}
    </div>
  );
};

export default RhfRadio;
