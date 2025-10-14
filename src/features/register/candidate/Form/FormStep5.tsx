"use client";
/* eslint-disable */
import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import FileUpload from "@/components/Form/FileUpload";
import { useTranslations } from "next-intl";

export default function FormStep5() {
  const t = useTranslations("form.form5");

  const { setFormData, nextStep, formData } = useFormPassContext();

  const initialvalues = {
    cv: formData.cv,
    degree: formData.degree,
    photo: formData.photo,
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      cv: Yup.mixed()
        .required(t("validation.cv.required"))
        .test("fileType", t("validation.pdfType"), (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", t("validation.pdfSize"), (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),

      photo: Yup.mixed<File>()
        .required(t("validation.photo.required"))
        .test(
          "fileType",
          t("validation.imageType"),
          (file) =>
            !!file &&
            ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
              file.type
            )
        )
        .test(
          "fileSize",
          t("validation.imageSize"),
          (file) => !!file && file.size <= 5 * 1024 * 1024
        ),
    }),
    onSubmit: (values) => {
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });

  const { setFieldValue } = formik;

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUpload
            name="photo"
            label={t("fields.photo")}
            value={formik.values.photo}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              setFieldValue("photo", file);
            }}
            error={formik.errors.photo}
            touched={formik.touched.photo}
            required
            helperText={t("helpers.photo")}
          />
          <FileUpload
            name="cv"
            label={t("fields.cv")}
            value={formik.values.cv}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              setFieldValue("cv", file);
            }}
            error={formik.errors.cv}
            touched={formik.touched.cv}
            required
            helperText={t("helpers.pdf")}
          />
        </div>
      </div>

      <ButtonNextPrev />
    </form>
  );
}
