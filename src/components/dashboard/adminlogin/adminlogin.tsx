"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabase/Supabase";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./adminlogin.module.css";

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is required"),
});

const AdminLogin = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      setError(null);

      // First, try to sign in with Supabase Auth
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: values.email.trim(),
        password: values.password,
      });


      if (authError) throw authError;

      // Then verify admin role
      const { data: adminData, error: adminError } = await supabase
        .from("admin_users")
        .select("role")
        .eq("email", values.email)
        .single();

      if (adminError || adminData?.role !== "admin") {
        throw new Error("Unauthorized access");
      }

      // Store password hash in admin_users table
      const { error: updateError } = await supabase
        .from("admin_users")
        .update({ password_hash: values.password })
        .eq("email", values.email);

      if (updateError) throw updateError;

      // If everything is successful, redirect to dashboard
      router.push("/dashboard/contact");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error("Login error:", error.message);
      } else {
        setError("Invalid credentials");
        console.error("Login error:", error);
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Admin Login</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
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
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={styles.input}
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>

              {error && <div className={styles.errorMessage}>{error}</div>}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting || loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminLogin;