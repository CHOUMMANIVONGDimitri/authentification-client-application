import React from "react";

const HeaderSection = () => {
  return (
    <div className="px-4 w-full">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Test Technique Strateg.In
      </h1>
      <p className="w-full md:w-4/5 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Voici le resultat du test technique suivant les instructions du PDF
        envoyées. Créez-vous un compte pour pouvoir accéder à la liste des
        utilisateurs ou connectez vous si vous avez déjà un compte.
      </p>
    </div>
  );
};

export default HeaderSection;
