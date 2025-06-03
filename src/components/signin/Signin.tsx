"use client";
/* eslint-disable */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Lock } from "lucide-react";
import { FormValues, InputField } from "@/components/Form/InputField";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  email: Yup.string().email("Email invalide").required("Ce champ est requis"),
  password: Yup.string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .required("Ce champ est requis"),
});

const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  const router = useRouter();
  const ErrorNotification = (msg: string) => toast.error(msg);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const response = await login({
          email: values.email,
          password: values.password,
        }).unwrap();
        const role = response?.role;

        switch (role) {
          case "admin":
            router.push("/admin");
          case "super_admin":
            router.push("/admin");
            break;
          case "candidate":
            router.push("/admin");
            break;
          default:
            ErrorNotification("Rôle utilisateur non reconnu");
            break;
        }
      } catch (error: any) {
        const message = error?.data?.message || "Une erreur est survenue";
        ErrorNotification(message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      </div>
      <Toaster />
      <div className="relative max-w-md mx-auto bg-white/80 backdrop-blur-sm  rounded-2xl  shadow-2xl border border-white/50">
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
        <form onSubmit={formik.handleSubmit} className="  p-8 space-y-6">
          <InputField
            name="email"
            label="Email"
            type="email"
            icon={Mail}
            placeholder="votre@email.com"
            formik={formik}
          />

          <InputField
            name="password"
            label="Mot de passe"
            type="password"
            icon={Lock}
            placeholder="votre mot de passe"
            formik={formik}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

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
                <span>connexion en cours...</span>
              </div>
            ) : (
              "Se connecter"
            )}
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-blue-600">
              Vous n&apos;avez pas de compte ? S&apos;inscrire maintenant{" "}
              <Link
                href="/inscription/candidat"
                className="font-medium text-orange-600 hover:text-orange-700"
              >
                Candidat
              </Link>
              {" | "}
              <Link
                href="/inscription/recruteur"
                className="font-medium text-orange-600 hover:text-orange-700"
              >
                Recruteur
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
