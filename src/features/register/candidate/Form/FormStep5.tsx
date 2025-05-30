/* eslint-disable */
import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import FileUpload from "@/components/Form/FileUpload";
export default function FormStep5() {
  const { setFormData, nextStep, formData } = useFormPassContext();
  const initialvalues = {
    cv: formData.cv,
    degree: formData.degree,
    photo: formData.photo,
    coverLetter: formData.gradeTranscript,
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      coverLetter: Yup.mixed()
        .required("La carte d'identité nationnal est requise")
        .test("fileType", "Le fichier doit être un PDF", (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", "Taille maximale 5MB", (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),
      cv: Yup.mixed()
        .required("Le CV est requis")
        .test("fileType", "Le fichier doit être un PDF", (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", "Taille maximale 5MB", (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),
      degree: Yup.mixed()
        .required("Note ou copies des diplômes obtenus est requis")
        .test("fileType", "Le fichier doit être un PDF", (file: any) =>
          file ? file.type === "application/pdf" : false
        )
        .test("fileSize", "Taille maximale 5MB", (file: any) =>
          file ? file.size <= 5 * 1024 * 1024 : false
        ),

      photo: Yup.mixed<File>()
        .required("La photo récente est requise")
        .test(
          "fileType",
          "Le fichier doit être une image (jpg, jpeg, png, webp)",
          (file) =>
            !!file &&
            ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
              file.type
            )
        )
        .test(
          "fileSize",
          "La taille maximale est de 5MB",
          (file) => !!file && file.size <= 5 * 1024 * 1024
        ),
    }),

    onSubmit: (values) => {
      //   console.log("Form Submitted : ", values);
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });
  //   console.log(formik.errors);
  const { setFieldValue } = formik;
  //   console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <div className="space-y-6">
        <FileUpload
          name="photo"
          label="Photo récente"
          value={formik.values.photo}
          onChange={(e) => {
            const file = e.currentTarget.files?.[0] || null;
            setFieldValue("photo", file);
          }}
          error={formik.errors.photo}
          touched={formik.touched.photo}
          required
          helperText="Format image uniquement (jpg, jpeg, png, webp), taille max: 5 MB"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUpload
            name="cv"
            label="CV "
            value={formik.values.cv}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              setFieldValue("cv", file);
            }}
            error={formik.errors.cv}
            touched={formik.touched.cv}
            required
            helperText="Format PDF uniquement, taille max: 5 MB"
          />
          <FileUpload
            name="degree"
            label="Copies des diplômes obtenus"
            value={formik.values.degree}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] || null;
              setFieldValue("degree", file);
            }}
            error={formik.errors.degree}
            touched={formik.touched.degree}
            required
            helperText="Format PDF uniquement, taille max: 5 MB"
          />
        </div>

        <FileUpload
          name="coverLetter"
          label="Lettre de motivation"
          value={formik.values.coverLetter}
          onChange={(e) => {
            const file = e.currentTarget.files?.[0] || null;
            setFieldValue("coverLetter", file);
          }}
          error={formik.errors.coverLetter}
          touched={formik.touched.coverLetter}
          required
          helperText="Format PDF uniquement, taille max: 5 MB"
        />
      </div>

      {/* <ButtonNextPrev /> */}
    </form>
  );
}
