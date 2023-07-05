import "./styles.css";

import * as React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidationSchema } from "./utils/schemas";
import RhfInput from "./components/rhf-input";
import RhfCheckbox from "./components/rhf-checkbox";
import { Spinner } from "react-bootstrap";
import RhfRadio from "./components/rhf-radio";

export default function App(prop) {
  const { isLoading, handleSubmit } = prop;

  const form = useForm({
    mode: "all",
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      name: "",
      lastName: "",
      gender: false,
      termsAndConditions: false
    }
  });

  const { formState, handleSubmit: handleFormSubmit, control } = form;

  const { errors } = formState;

  const handleOnSubmit = (event) => handleFormSubmit(() => {})(event);

  const handleSubmitClick = () => handleFormSubmit(handleSubmit)();

  return (
    <>
      <h1 className="mainTitle">React Hook Form - Focus</h1>
      <form className="formSection" onSubmit={handleOnSubmit}>
        <div className="formField">
          <RhfInput
            id="name"
            name="name"
            label="Agrega tu primer nombre"
            placeholder="Ingresa tu nombre"
            control={control}
            errorMessage={true}
          />
        </div>
        <div className="formField">
          <RhfInput
            id="lastName"
            name="lastName"
            label="Agrega tu apellido"
            placeholder="Ingresa tu apellido"
            control={control}
            errorMessage={true}
          />
        </div>
        <div className="gender">
          <RhfRadio
            id="gender-male"
            name="gender"
            imageSrc="https://cdn-icons-png.flaticon.com/512/3233/3233508.png"
            value="male"
            control={control}
          />
          <RhfRadio
            id="gender-female"
            name="gender"
            imageSrc="https://cdn-icons-png.flaticon.com/512/3577/3577099.png"
            value="female"
            control={control}
          />
          <span className="helperText">
            {errors.gender ? errors.gender.message : undefined}
          </span>
        </div>
        <RhfCheckbox
          id="termsAndConditions"
          name="termsAndConditions"
          label={
            <>
              Acepto los{" "}
              <a href="https://github.com">términos y condiciones.</a>
            </>
          }
          control={control}
        />

        <input type="submit" hidden />
        <button
          type="submit"
          className="formButton"
          disabled={!formState.isValid || isLoading}
          onClick={handleSubmitClick}
        >
          {isLoading ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
}
