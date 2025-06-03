"use client";
/* eslint-disable */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { User, Mail, Lock, MapPin, Globe } from "lucide-react";
import { FormValues, InputField } from "@/components/Form/InputField";
import Link from "next/link";
import Image from "next/image";
import { SelectCountryField } from "@/components/Form/SelectCountryField";
import toast, { Toaster } from "react-hot-toast";
import { useAddRecruiterMutation } from "@/redux/api/recruiterApi";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  lastName: Yup.string().required("Ce champ est requis"),
  firstName: Yup.string().required("Ce champ est requis"),
  company: Yup.string().required("Ce champ est requis"),
  country: Yup.string().required("Ce champ est requis"),
  emailAddress: Yup.string()
    .email("Email invalide")
    .required("Ce champ est requis"),
  password: Yup.string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .required("Ce champ est requis"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas")
    .required("Ce champ est requis"),
});

export const InscriptionFormRecruiter: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const ErrorNotification = (msg: string) => toast.error(msg);
  const SuccessrNotification = (msg: string) => toast.success(msg);
  const [addRecruiter] = useAddRecruiterMutation();
  const navigation = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: {
      lastName: "",
      firstName: "",
      company: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      try {
        const response: any = await addRecruiter(values).unwrap();

        SuccessrNotification(response?.message);
        resetForm();
      } catch (error: any) {
        const message = error?.data?.message || "Une erreur est survenue";
        ErrorNotification(message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      </div>
      <Toaster />
      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center pt-5">
            <Link href={"/"}>
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1748260405/carrefour-removebg-preview_pjn3yd.png"
                alt="Logo"
                width={160}
                height={60}
                priority
                className="h-28 w-auto"
              />
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Inscription Recruteur
          </h2>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8 space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField
              name="lastName"
              label="Nom"
              icon={User}
              placeholder="Votre nom"
              formik={formik}
            />
            <InputField
              name="firstName"
              label="Prénom"
              icon={User}
              placeholder="Votre prénom"
              formik={formik}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField
              name="company"
              label="Entreprise"
              icon={MapPin}
              placeholder="Nom de l'entreprise"
              formik={formik}
            />
            <InputField
              name="emailAddress"
              label="Email"
              type="email"
              icon={Mail}
              placeholder="votre@email.com"
              formik={formik}
            />
          </div>
          <SelectCountryField
            name="country"
            label="Pays"
            placeholder="Sélectionnez un pays"
            icon={Globe}
            formik={formik}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField
              name="password"
              label="Mot de passe"
              type="password"
              icon={Lock}
              placeholder="Minimum 6 caractères"
              formik={formik}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            <InputField
              name="confirmPassword"
              label="Confirmer le mot de passe"
              type="password"
              icon={Lock}
              placeholder="Confirmez votre mot de passe"
              formik={formik}
              showPassword={showConfirmPassword}
              onTogglePassword={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            />
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={`w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-all duration-300 transform ${
              formik.isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:to-orange-600"
            }`}
          >
            {formik.isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Inscription en cours...</span>
              </div>
            ) : (
              "S'inscrire"
            )}
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-blue-600">
              Déjà inscrit ?{" "}
              <Link
                href="/connexion"
                className="font-medium text-orange-600 hover:text-orange-700"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-blue-500">
            En vous inscrivant, vous acceptez nos conditions d&apos;utilisation
            et notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
};
