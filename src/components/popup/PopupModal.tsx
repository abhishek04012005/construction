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
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Phone number must start with 6, 7, 8 or 9 and be 10 digits")
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
                  className={styles.input}
                  placeholder="Enter your name"
                  pattern="[A-Za-z\s]+"
                  onKeyPress={(e: React.KeyboardEvent) => {
                    const char = String.fromCharCode(e.charCode);
                    if (!/[A-Za-z\s]/.test(char)) {
                      e.preventDefault();
                    }
                  }}
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
                  className={styles.input}
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    const char = String.fromCharCode(e.charCode);
                    // Check if it's the first digit
                    if ((e.currentTarget as HTMLInputElement).value.length === 0) {
                      // Only allow 6-9 for first digit
                      if (!/[6-9]/.test(char)) {
                        e.preventDefault();
                      }
                    } else {
                      // Allow any digit for remaining positions
                      if (!/[0-9]/.test(char)) {
                        e.preventDefault();
                      }
                    }
                  }}
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
