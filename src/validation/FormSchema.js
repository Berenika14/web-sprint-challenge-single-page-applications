import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  sausage: yup.boolean(),
  pepperoni: yup.boolean(),
  mushrooms: yup.boolean(),
  extraCheese: yup.boolean(),
});

export default FormSchema;
