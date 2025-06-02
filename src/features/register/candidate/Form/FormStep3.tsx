import React, { useEffect } from "react";
import { useFormPassContext } from "../context/SignupContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import { motion } from "framer-motion";
import FormSelect from "@/components/Form/FormSelect";
/* eslint-disable */
export default function FormStep3() {
  const sectors = [
    { label: "Technologies & BTP", value: "technologies_btp" },
    { label: "Tourisme, santé & services", value: "tourisme_sante_services" },
    { label: "Communication & gestion", value: "communication_gestion" },
    { label: "Événementiel & artistique", value: "evenementiel_artistique" },
  ];

  const sectorCategories: Record<string, { label: string; value: string }[]> = {
    technologies_btp: [
      {
        label: "Développeurs web, IA, cybersécurité, robotique",
        value: "Développeurs web, IA, cybersécurité, robotique",
      },
      {
        label: "Électriciens, techniciens AC, plombiers, soudeurs",
        value: "Électriciens, techniciens AC, plombiers, soudeurs",
      },
    ],
    tourisme_sante_services: [
      {
        label: "Réception, cuisine, spa, housekeeping",
        value: "Réception, cuisine, spa, housekeeping",
      },
      {
        label: "Infirmiers, aides-soignants, ambulanciers",
        value: "Infirmiers, aides-soignants, ambulanciers",
      },
      {
        label: "Chauffeurs, agents logistiques",
        value: "Chauffeurs, agents logistiques",
      },
    ],
    communication_gestion: [
      {
        label: "Accueil client trilingue, call center",
        value: "Accueil client trilingue, call center",
      },
      {
        label: "Secrétaires, assistants RH, community managers",
        value: "Secrétaires, assistants RH, community managers",
      },
    ],
    evenementiel_artistique: [
      {
        label: "Techniciens lumière/son/vidéo, régisseurs",
        value: "Techniciens lumière/son/vidéo, régisseurs",
      },
      {
        label: "DJs, musiciens, animateurs, artistes live",
        value: "DJs, musiciens, animateurs, artistes live",
      },
    ],
  };

  const { setFormData, nextStep, formData } = useFormPassContext();

  const formik = useFormik({
    initialValues: {
      sector: formData.sector || "",
      category: formData.category || "",
    },
    validationSchema: Yup.object({
      sector: Yup.string().required("Le choix du secteur est requis"),
      category: Yup.string().required("Le choix de la catégorie est requis"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      nextStep();
      setFormData((prev: any) => ({ ...prev, ...values }));
    },
  });

  useEffect(() => {
    const validOptions = sectorCategories[formik.values.sector] || [];
    const isValidCategory = validOptions.some(
      (opt) => opt.value === formik.values.category
    );
    if (!isValidCategory) {
      formik.setFieldValue("category", "");
    }
  }, [formik.values.sector]);

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
          label="Secteur d'activité"
          value={formik.values.sector}
          onChange={formik.handleChange}
          options={sectors}
          error={formik.errors.sector}
          touched={formik.touched.sector}
          placeholder="Sélectionnez un secteur"
          required
        />
      </div>

      <div>
        <FormSelect
          id="category"
          label="Catégorie"
          value={formik.values.category}
          onChange={formik.handleChange}
          options={sectorCategories[formik.values.sector] || []}
          error={formik.errors.category}
          touched={formik.touched.category}
          placeholder="Sélectionnez une catégorie"
          required
        />
      </div>

      <div className="pt-4">
        <ButtonNextPrev />
      </div>
    </motion.form>
  );
}
