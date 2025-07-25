import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner principal */}
        <div className="relative">
          {/* Cercle extérieur - Orange */}
          <div className="w-16 h-16 border-4 border-orange-200 rounded-full animate-pulse"></div>

          {/* Cercle rotatif - Bleu et Orange */}
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-600 border-r-orange-500 rounded-full animate-spin"></div>

          {/* Cercle intérieur */}
          <div
            className="absolute top-2 left-2 w-12 h-12 border-3 border-transparent border-t-orange-400 border-l-blue-500 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>

          {/* Point central */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>

        {/* Texte de chargement */}
        <div className="text-center">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Chargement...
          </h3>
          <div className="flex space-x-1 mt-2 justify-center">
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>

        {/* Barre de progression stylisée */}
        {/* <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-orange-400 to-blue-600 rounded-full animate-pulse"></div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateY(0);
          }
          40%,
          43% {
            transform: translateY(-8px);
          }
          70% {
            transform: translateY(-4px);
          }
          90% {
            transform: translateY(-2px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-spin {
          animation: spin 2s linear infinite;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default PreLoader;
