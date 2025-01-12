import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

import styles from "./ContactForm.module.scss";

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
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const errorData = await response.json();

          console.error("Error:", errorData);
          alert(
            "Failed to submit form: " + (errorData.message || "Unknown error"),
          );
        } else {
          const responseData = await response.json();

          console.log("Success:", responseData);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
      <div className={styles.formContainer}>
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

          <p className="font-extrabold text-lg  flex items-center space-x-2">
            <span>✨</span> <span>Where Design Meets Impeccable Execution</span>{" "}
            <span>✨</span>
          </p>

          <div className="py-4">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm">Call us on</p>
              <p className="text-xs">+91 72590 41146</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm">Write to us at:</p>
              <p className="text-xs text-linkHover">
                <a href="mailto:contact@xibit.homes">contact@xibit.homes</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <Input
              fullWidth
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
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
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
              errorMessage={formik.touched.lastName && formik.errors.lastName}
              isInvalid={
                formik.touched.lastName && Boolean(formik.errors.lastName)
              }
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
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
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
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
              errorMessage={
                formik.touched.companyName && formik.errors.companyName
              }
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
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
              errorMessage={
                formik.touched.designation && formik.errors.designation
              }
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
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
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
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
              errorMessage={formik.touched.message && formik.errors.message}
              isInvalid={
                formik.touched.message && Boolean(formik.errors.message)
              }
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
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
