import React from "react";

function ErrorPage() {
  return (
    <div className="h-screen">
      <h1 className="text-6xl font-extrabold text-center dark:text-white">
        Erreur
        <span className="text-8xl text-gray-700"> 404 </span>
        <br />
        <span className="text-4xl">
          la page que vous recherchez semble introuvable.
        </span>
      </h1>
    </div>
  );
}

export default ErrorPage;
