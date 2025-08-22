"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./contact.module.css";
import { supabase } from "../../supabase/Supabase";
import StatusPopup from "../messagepopup/Popup";
import { FormikHelpers } from "formik";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      "Please enter a valid phone number"
    )
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .required("Phone number is required"),
  projectType: Yup.string().required("Project type is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          project_type: values.projectType,
          message: values.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      setPopupOpen(true);
      resetForm();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error submitting form:", error.message);
      } else {
        console.error("Error submitting form:", error);
      }
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.container}>


          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>
              Get in <span className={styles.highlight}>Touch</span>
            </h2>
            <p className={styles.subtitle}>Contact us</p>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.formContainer}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles.errorText}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Mobile Number
                  </label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    placeholder="Enter your mobile number"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.errorText}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.errorText}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="projectType" className={styles.label}>
                    Project Type
                  </label>
                  <Field
                    as="select"
                    id="projectType"
                    name="projectType"
                    className={styles.select}
                  >
                    <option value="">Select a project type</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                    <option value="Industrial">Industrial</option>
                  </Field>
                  <ErrorMessage
                    name="projectType"
                    component="div"
                    className={styles.errorText}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Enter your message"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className={styles.errorText}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  {submitStatus === "success"
                    ? "Message Sent!"
                    : submitStatus === "error"
                      ? "Error Sending"
                      : "Send Message"}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
      <StatusPopup
        type="success"
        message="Your message has been sent successfully!"
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
};

export default Contact;
