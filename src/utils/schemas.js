import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup
    .string()
    .required("El nombre es requerido")
    .typeError("El nombre es requerido"),
  lastName: yup
    .string()
    .required("El apellido es requerido")
    .typeError("El apellido es requerido"),
  gender: yup
    .boolean()
    .isTrue("El genero es requerido")
    .typeError("El genero es requerido"),
  termsAndConditions: yup
    .boolean()
    .isTrue("Debes aceptar los terminos y condiciones")
    .typeError("Debes aceptar los terminos y condiciones")
});

export { formValidationSchema };
