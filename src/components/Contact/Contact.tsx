"use client";

import React from "react";
import {
  User,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock,
  Send,
  Building2,
} from "lucide-react";
import { useFormik } from "formik";
import { FormValues, InputField } from "../Form/InputField";
import * as Yup from "yup";
import { TextAreaField } from "../Form/TextAreaField";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object({
  lastName: Yup.string().required("Ce champ est requis"),
  firstName: Yup.string().required("Ce champ est requis"),
  adresse: Yup.string().required("Ce champ est requis"),
  email: Yup.string().email("Email invalide").required("Ce champ est requis"),
  message: Yup.string().required("Ce champ est requis"),
});

const Contact = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      lastName: "",
      firstName: "",
      adresse: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const toastId = toast.loading("Envoi du message...");
      try {
        const fullname = values.lastName + " " + values.firstName;
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fullname,
            email: values.email,
            address: values.adresse,
            message: values.message,
          }),
        });

        if (!response.ok) throw new Error("Erreur serveur");

        toast.success("Message envoyé avec succès !", { id: toastId });
        resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Une erreur est survenue. Veuillez réessayer.", {
          id: toastId,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>
      <Toaster position="bottom-center" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-slate-600">
                    Remplissez le formulaire ci-dessous et nous vous
                    recontacterons rapidement.
                  </p>
                </div>
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                  <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField
                        name="email"
                        label="Email"
                        type="email"
                        icon={Mail}
                        placeholder="votre@email.com"
                        formik={formik}
                      />
                      <InputField
                        name="adresse"
                        label="Adresse"
                        icon={MapPin}
                        placeholder="Votre adresse complète"
                        formik={formik}
                      />
                    </div>

                    {/* Message Field */}
                    <TextAreaField
                      name="message"
                      label="Message"
                      placeholder="Écrivez votre message ici..."
                      icon={MessageCircle}
                      formik={formik}
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className={`w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 px-6 rounded-2xl font-semibold shadow-xl transition-all duration-300 transform flex items-center justify-center space-x-3 ${
                        formik.isSubmitting
                          ? "opacity-70 cursor-not-allowed scale-95"
                          : "hover:shadow-2xl hover:scale-105 hover:from-blue-700 hover:to-orange-600 active:scale-95"
                      }`}
                    >
                      {formik.isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 h-fit sticky top-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">
                  Informations de contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Email professionnel
                      </h4>
                      <p className="text-slate-600 text-sm mt-1">
                        contact@carrefour-emploi.com
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Téléphone
                      </h4>
                      <p className="text-slate-600 text-sm mt-1">
                        +261 37 07 777 07
                        <br /> +230 5 488-4377
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        Lun - Ven : 8h - 17h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Horaires d&apos;ouverture
                      </h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Lundi - Vendredi
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        08:00 - 17:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Adresse</h4>
                      <p className="text-slate-600 text-sm mt-1">Nanisana</p>
                      <p className="text-slate-500 text-xs mt-1">
                        Antananarivo Madagascar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
