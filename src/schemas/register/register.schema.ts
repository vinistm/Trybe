import * as yup from "yup"

const registerSchema = yup.object().shape({
  username: yup.string().required("username is required.").min(3, "username requires at least 3 characters"),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "The password must contain an uppercase letter, a number."
    )
  
});

export default registerSchema;
