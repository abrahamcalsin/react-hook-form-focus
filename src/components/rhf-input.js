import * as React from "react";
import clsx from "clsx";

import { useController } from "react-hook-form";

const RhfInput = (props) => {
  const { id, name, control, label, errorMessage, ...restProps } = props;

  const { field, fieldState } = useController({
    name,
    control
  });

  return (
    <>
      <div className={clsx("field", fieldState.error && "errorStatus")}>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...field} {...restProps} />
      </div>
      {errorMessage ? (
        <span className="helperText">
          {fieldState.error ? fieldState.error.message : undefined}
        </span>
      ) : null}
    </>
  );
};

export default RhfInput;
