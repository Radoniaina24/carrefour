/* eslint-disable */
import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import { FaCheck } from "react-icons/fa";
import ButtonNextPrev from "../ButtonPrevNext/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../Modal/Modal";
import dayjs from "dayjs";
import { useAddCandidateMutation } from "@/redux/api/candidateApi";

export default function Confirmation() {
  dayjs.locale("en");
  const formatDate = (isoDate: string | Date): string => {
    return dayjs(isoDate).format(" DD MMMM YYYY");
  };
  const { formData, setShowSuccessModal, setFormData } = useFormPassContext();
  // console.log(formData);
  const [registerCandidate] = useAddCandidateMutation();
  const initialvalues = {
    acceptConditions: false,
  };
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      acceptConditions: Yup.boolean()
        .oneOf([true], "Vous devez accepter les conditions pour continuer")
        .required("Champ requis"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]: any) => {
        if (value !== undefined && value !== "") {
          data.append(key, value instanceof File ? value : String(value));
        }
      });
      setSubmitting(true);

      try {
        const response = await registerCandidate(data).unwrap();
        setShowSuccessModal(true);
      } catch (error: any) {
        if (error?.data?.message) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  //   console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Modal />
      <div className="space-y-6">
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <div className="text-green-600 text-5xl mb-4">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Récapitulatif de votre candidature
          </h3>
          <p className="text-gray-700">
            Veuillez vérifier les informations ci-dessous avant de soumettre
            votre candidature.
          </p>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2">
              <h4 className="font-bold text-gray-800">
                Informations personnelles
              </h4>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Nom</p>
                <p className="font-medium">{formData.lastName || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Prénom</p>
                <p className="font-medium">{formData.firstName || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{formData.emailAddress || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Téléphone</p>
                <p className="font-medium">{formData.phoneNumber || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Date de naissance</p>
                <p className="font-medium">
                  {formatDate(formData.dateOfBirth) || "-"}{" "}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Nationalité</p>
                <p className="font-medium">{formData.nationality || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Adresse</p>
                <p className="font-medium">{formData.address || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Pays</p>
                <p className="font-medium">{formData.country || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Ville</p>
                <p className="font-medium">{formData.city || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Code postal</p>
                <p className="font-medium">{formData.postalCode || "-"}</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2">
              <h4 className="font-bold text-gray-800">Secteur choisi</h4>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Secteur</p>
                <p className="font-medium">{formData.sector || "-"}</p>
              </div>
              <div>
                <p className="text-gray-500">Categorie</p>
                <p className="font-medium">{formData.category || "-"}</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2">
              <h4 className="font-bold text-gray-800">Documents fournis</h4>
            </div>
            <div className="p-4 space-y-2 text-sm">
              <div className="flex items-center">
                <FaCheck
                  className={` ${formData.photo ? " text-green-500 mr-2" : ""}`}
                />
                <span>Photo récente</span>
              </div>
              <div className="flex items-center">
                <FaCheck
                  className={` ${formData.cv ? " text-green-500 mr-2" : ""}`}
                />
                <span>CV</span>
              </div>
              <div className="flex items-center">
                <FaCheck
                  className={` ${
                    formData.degree ? " text-green-500 mr-2" : ""
                  }`}
                />
                <span>Diplômes</span>
              </div>

              <div className="flex items-center">
                <FaCheck
                  className={` ${
                    formData.coverLetter ? " text-green-500 mr-2" : ""
                  }`}
                />
                <span>Lettre de motivation</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="acceptConditions"
              name="acceptConditions"
              checked={formik.values.acceptConditions}
              onChange={formik.handleChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="acceptConditions" className="text-sm text-gray-700">
              Je certifie l'exactitude des informations fournies et j'accepte
              les{" "}
              <a href="#" className="text-blue-700 hover:underline">
                conditions générales
              </a>{" "}
              et la{" "}
              <a href="#" className="text-blue-700 hover:underline">
                politique de confidentialité
              </a>{" "}
              de carrefour d'emploie Madagascar.
            </label>
          </div>
          {formik.errors.acceptConditions && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.acceptConditions}
            </p>
          )}
        </div>
        <ButtonNextPrev isSubmitting={formik.isSubmitting} />
      </div>
    </form>
  );
}
