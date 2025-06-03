/* eslint-disable */
import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormInput from "@/components/Form/FormInput";

import ButtonNextPrev from "../ButtonPrevNext/Button";
export default function FormStep4() {
  const { setFormData, nextStep, formData } = useFormPassContext();
  const initialvalues = {
    password: formData.password as string,
    re_type_password: formData.re_type_password as string,
  };
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),

      re_type_password: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match")
        .min(6, "Confirm Password must be at least 6 characters long"),
    }),

    onSubmit: (values) => {
      console.log("Form Submitted : ", values);
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="space-y-6">
        <FormInput
          id="password"
          label="Mot de passe"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          touched={formik.touched.password}
          placeholder="Votre mot de passe"
          required
          type="password"
        />
        <FormInput
          id="re_type_password"
          label="Confirmation du mot de passe"
          value={formik.values.re_type_password}
          onChange={formik.handleChange}
          error={formik.errors.re_type_password}
          touched={formik.touched.re_type_password}
          placeholder=""
          required
          type="password"
        />
      </div>

      <ButtonNextPrev />
    </form>
  );
}
