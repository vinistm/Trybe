import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required.").min(3, "Username requires at least 3 characters"),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "The password must contain an uppercase letter, a number and a special character."
    )
  
});

export default registerSchema;
