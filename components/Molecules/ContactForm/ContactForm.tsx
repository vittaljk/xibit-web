import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      designation: "",
      handPhone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      companyName: Yup.string().required("Company Name is required"),
      designation: Yup.string().required("Designation is required"),
      handPhone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("Hand Phone is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
      alert("Form Submitted Successfully!");
    },
  });

  return (
    <form className="max-w-md mx-auto space-y-6" onSubmit={formik.handleSubmit}>
      <h1 className="text-white text-xl font-bold mb-4">Contact Us</h1>

      {/* First Name */}
      <div>
        <Input
          fullWidth
          errorMessage={formik.touched.firstName && formik.errors.firstName}
          isInvalid={
            formik.touched.firstName && Boolean(formik.errors.firstName)
          }
          label="First Name"
          name="firstName"
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>

      {/* Last Name */}
      <div>
        <Input
          fullWidth
          errorMessage={formik.touched.lastName && formik.errors.lastName}
          isInvalid={formik.touched.lastName && Boolean(formik.errors.lastName)}
          label="Last Name"
          name="lastName"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>

      {/* Email */}
      <div>
        <Input
          fullWidth
          errorMessage={formik.touched.email && formik.errors.email}
          isInvalid={formik.touched.email && Boolean(formik.errors.email)}
          label="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>

      {/* Company Name */}
      <div>
        <Input
          fullWidth
          errorMessage={formik.touched.companyName && formik.errors.companyName}
          isInvalid={
            formik.touched.companyName && Boolean(formik.errors.companyName)
          }
          label="Company Name"
          name="companyName"
          value={formik.values.companyName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>

      {/* Designation */}
      <div>
        <Input
          fullWidth
          errorMessage={formik.touched.designation && formik.errors.designation}
          isInvalid={
            formik.touched.designation && Boolean(formik.errors.designation)
          }
          label="Designation"
          name="designation"
          value={formik.values.designation}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>

      {/* Hand Phone */}
      <div>
        <Input
          fullWidth
          errorMessage={formik.touched.handPhone && formik.errors.handPhone}
          isInvalid={
            formik.touched.handPhone && Boolean(formik.errors.handPhone)
          }
          label="Hand Phone"
          name="handPhone"
          value={formik.values.handPhone}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>

      {/* Message */}
      <div>
        <Textarea
          fullWidth
          errorMessage={formik.touched.message && formik.errors.message}
          isInvalid={formik.touched.message && Boolean(formik.errors.message)}
          label="Message"
          name="message"
          value={formik.values.message}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <Button color="secondary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
