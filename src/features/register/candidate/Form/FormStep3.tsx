"use client";
/* eslint-disable */
import React, { useEffect } from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import { motion } from "framer-motion";
import FormSelect from "@/components/Form/FormSelect";
import { useTranslations } from "next-intl";

export default function FormStep3() {
  const t = useTranslations("form.form3"); // Namespace, ex: translations/form3.json

  const sectors = [
    { label: t("sectors.technologies_btp"), value: "Étudiant & Jeune diplômé" },
    {
      label: t("sectors.tourisme_sante_services"),
      value: "Recruteur",
    },
    {
      label: t("sectors.communication_gestion"),
      value: "Candidat",
    },
  ];
  const { setFormData, nextStep, formData } = useFormPassContext();

  const formik = useFormik({
    initialValues: {
      sector: formData.sector || "",
    },
    validationSchema: Yup.object({
      sector: Yup.string().required(t("validation.sectorRequired")),
    }),
    onSubmit: (values) => {
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });
  // console.log(formik.values.sector);
  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl"
    >
      <div>
        <FormSelect
          id="sector"
          label={t("labels.sector")}
          value={formik.values.sector}
          onChange={formik.handleChange}
          options={sectors}
          error={formik.errors.sector}
          touched={formik.touched.sector}
          placeholder={t("placeholders.sector")}
          required
        />
      </div>
      <div className="pt-4">
        <ButtonNextPrev />
      </div>
    </motion.form>
  );
}
