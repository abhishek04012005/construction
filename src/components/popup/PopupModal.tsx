"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./popupmodal.module.css";
import StatusPopup from "../messagepopup/Popup";
import { submitQuote } from "./submitQuote";


interface QuoteFormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  requirements: string;
}

const initialValues: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  requirements: "",
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
  requirements: Yup.string().required("Project requirements are required"),
});

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [popupOpen, setPopupOpen] = useState(false);


  if (!isOpen) return null;

  const handleSubmit = async (
    values: QuoteFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const result = await submitQuote({
        name: values.name,
        email: values.email,
        phone: values.phone,
        project_type: values.projectType,
        requirements: values.requirements,
      });

      if (!result.success) throw new Error("Failed to submit quote");

      setSubmitStatus("success");
      setPopupOpen(true);
      resetForm();
      setTimeout(() => {
        setSubmitStatus("idle");
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting quote:", error);
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          <h2 className={styles.modalTitle}>Request a Quote</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className={styles.input}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className={styles.input}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectType">Project Type</label>
                <Field
                  as="select"
                  id="projectType"
                  name="projectType"
                  className={styles.select}
                >
                  <option value="">Select project type</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                  <option value="Industrial">Industrial</option>
                </Field>
                <ErrorMessage
                  name="projectType"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="requirements">Project Requirements</label>
                <Field
                  as="textarea"
                  id="requirements"
                  name="requirements"
                  placeholder="Describe your project requirements"
                  className={styles.textarea}
                />
                <ErrorMessage
                  name="requirements"
                  component="div"
                  className={styles.error}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                {submitStatus === "success"
                  ? "Quote Requested!"
                  : submitStatus === "error"
                    ? "Error Sending"
                    : "Request Quote"}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <StatusPopup
        type="success"
        message="Your message has been sent successfully!"
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
};

export default QuoteModal;
